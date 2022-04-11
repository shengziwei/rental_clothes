<template>
  <van-swipe :autoplay="3000" lazy-render>
     <van-swipe-item v-for="item,index in bannerData" :key="index">
    <img :src="item" alt/>
  </van-swipe-item>
  </van-swipe>
</template>

<script>
export default {
    props:{
      bannerData:{
        type: Array,
        default(){
          return []
        }
      }
   },
    setup() {
        
    },
}
</script>

<style scoped>
.van-swipe-item img{
  height:250px;
  width: 100%;
}
.van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    height:250px;
    width:100%;
    text-align: center;
    background-color: #39a9ed;
  }
</style>