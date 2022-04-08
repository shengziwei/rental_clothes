<template>
<div class="home">
  <banner></banner>
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
    <goods-list :goodsData="recommends"></goods-list>
</div>
</template>

<script>
import {getHomeGoodsData} from '@/service/home.js'
import {ref, onMounted } from 'vue'
import axios from 'axios'
import Banner from '@/components/home/banner.vue'
import TabControl from '@/components/utils/TabControl.vue'
import GoodsList from '@/components/home/goodslist.vue'

export default{
  name: 'Home',
  components: { 
    Banner,
    TabControl,
    GoodsList
  },
  setup(){
    const recommends = ref([]);
    
    onMounted(()=>{getHomeGoodsData().then(res=>{//只有promise对象有then方法
    console.log(res);
    recommends.value = res.data.goods;
    console.log(recommends.value);
    })
  })

  return{
    recommends
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
  margin: 45px 0;
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
