<template>
<div class="home">
  <banner></banner>
    <div class='divider'>
      <div class='line'></div>
      <div class='text'>热租单品</div>
      <div class='line'></div>
    </div>
  <div class='recommend'>
    <div class='recommend-item' v-for="item in recommends.slice(0,6)" :key="item.id">
     <a href="">
        <img :src='item.cover_url' alt="">
        <div class ='goods-name' >{{item.name}}</div>
        <div class = 'price'><div>￥</div>{{item.price}}</div>
        <button class='buy-button'>加入购物车</button>
      </a>
  </div>
  </div>
     <div class='divider'>
      <div class='line'></div>
      <div class='text'>品牌推荐</div>
      <div class='line'></div>
    </div>
</div>
</template>

<script>
import {getHomeGoodsData} from '@/service/home.js'
import {ref, onMounted } from 'vue'
import axios from 'axios'
import banner from '@/components/home/banner.vue'

export default{
  name: 'Home',
  components: { 
    banner
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
.price{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px
}

.recommend img{
  width:100px;
  height:100px;
  margin-bottom: 10px;
  box-shadow: 0 -1px 2px rgb(100,100,100,0.2);
}

</style>
