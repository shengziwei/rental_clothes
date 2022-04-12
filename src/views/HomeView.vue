<template>
<div class="home">
  <banner :bannerData='homeBanner'></banner>
     <div class='divider'>
      <div class='line'></div>
      <div class='text'>品牌推荐</div>
      <div class='line'></div>
     </div>
  <div class='brand'>
    <div><img src='@/assets/images/ledin.png'></div>
    <div><img src='@/assets/images/ur.png'></div>
    <div><img src='@/assets/images/only.png'></div>
    <div><img src='@/assets/images/teenie.png'></div>
  </div>
    <div class='divider'>
      <div class='line'></div>
      <div class='text'>热租单品</div>
      <div class='line'></div>
    </div>
    <div class="list">
    <goods-list :goodsData="recommends" @getData="getData"></goods-list>
    </div>
    </div>
</template>
<!--下拉刷新，上拉加载选用better-scroll开发-->

<script>
import {getHomeGoodsData} from '@/service/home.js'
import {ref, onMounted, reactive, watchEffect, nextTick } from 'vue'
import axios from 'axios'
import Banner from '@/components/home/banner.vue'
import TabControl from '@/components/utils/TabControl.vue'
import GoodsList from '@/components/home/goodslist.vue'
import BScroll from 'better-scroll'

export default{
  name: 'Home',
  components: { 
    Banner,
    TabControl,
    GoodsList
  },
  setup(){
    const recommends = ref([]);
    const wrapper = ref(null);
    const homeBanner = ref([]);
    let bscroll = reactive({});
    let page=1;
    
    onMounted(()=>{
    getHomeGoodsData().then(res=>{//只有promise对象有then方法
    console.log(res);
    homeBanner.value = res.data.banner;
    recommends.value = res.data.goods;
    console.log(recommends.value);
    console.log(homeBanner.value);
    })
  });

  const getData = (page) => {
    getHomeGoodsData(page).then(res=>{
      console.log("父组件调用"+page);
      recommends.value.push(...res.data.goods);
      console.log("homeview的getData获得"+recommends.value.length);
    })
  }

  return{
    recommends,
    wrapper,
    homeBanner,
    getData
  }
  }
}
  // async created(){
  //   let res = await axios.get("/api/getHomeGoodsData")
  //   console.log(res.data)
  // } 不用这个 用composition api 可以比较好的实现复用

</script>

<style scoped>
.home{
margin-top: 45px;
position: relative;
height: 100vh
}
.divider{
  margin-top: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.line{
  flex-grow: 1;
  height: 1px;
  background-color: black;
  margin-left: 10px;
  margin-right: 10px;
}
.text{
  margin: 0 15px;
  font-family: 'VisbyCF-Thin';
}

.brand{
  display: flex;
  flex-wrap: wrap;
  margin:20px 0;
  justify-content: space-evenly;
  align-items: center;
  
}

.brand img{
  width:100px;
  height:50px;
  padding:5px 20px
}


</style>
