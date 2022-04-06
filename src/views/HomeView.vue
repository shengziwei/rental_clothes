<template>
<div class="home">
  <div class='banner'>
    <img src='@/assets/images/banner.png'>
    <div class='divider'>
      <div class='line'></div>
      <div class='text'>热销单品</div>
      <div class='line'></div>
    </div>
     <div class='divider'>
      <div class='line'></div>
      <div class='text'>品牌推荐</div>
      <div class='line'></div>
    </div>
  </div>

</div>
</template>

<script>
import {getHomeGoodsData} from '@/service/home.js'
import { onMounted } from 'vue'
import axios from 'axios'

export default{
  name: 'Home',
  setup(){
  onMounted(()=>{getHomeGoodsData().then(res=>{//只有promise对象有then方法
    console.log(res)
    })
  })
  }
}
  // async created(){
  //   let res = await axios.get("/api/getHomeGoodsData")
  //   console.log(res.data)
  // }

</script>

<style scoped>

.banner img{
  height:300px;
  width:100%;
  border-radius: 2px;
}
.banner{
  padding:0;
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
}

</style>
