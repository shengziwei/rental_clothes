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
  <div class='recommend'>
    <div class='recommend-item' v-for="item in recommends.slice(0,6)" :key="item.id">
     <a href="" @click.prevent = 'goDetail(item.id)' ><!--取消原来的事件，使用自定义事件-->
     <goods :item="item"></goods>
      </a>
  </div>
  </div>
</div>
</template>

<script>
import {getHomeGoodsData} from '@/service/home.js'
import {ref, onMounted } from 'vue'
import axios from 'axios'
import banner from '@/components/home/banner.vue'
import tabControl from '@/components/utils/TabControl.vue'
import {useRouter} from 'vue-router'
import goods from '@/components/home/goods.vue'
import Goods from '@/components/home/goods.vue'

export default{
  name: 'Home',
  components: { 
    banner,
    tabControl,
    Goods
  },
  setup(){
    const recommends = ref([]);
    
    const router = useRouter();

    const goDetail = (id) =>{
      router.push({
      name: 'Detail',
      params: {
          id
        }
      })
    }  
    
    onMounted(()=>{getHomeGoodsData().then(res=>{//只有promise对象有then方法
    console.log(res);
    recommends.value = res.data.goods;
    console.log(recommends.value);
    })
  })

  return{
    recommends,
    goDetail
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
.recommend{
  display: flex;
  align-content: center;
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.recommend-item{
  margin: 20px;
  padding: 0 20px;
  align-items: center;
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
