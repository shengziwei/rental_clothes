<template>
    <div class='goods-info'>
        <img :src='item.cover_url' alt="">
        <div class ='goods-name' >{{item.name}}</div>
        <div class = 'price'><div>￥</div>{{item.price}}</div>
        <button class='buy-button'>加入购物车</button>
    </div>
</template>

<script>
export default {
    name:'Goods',
    props:{
        item:{
          type: Object,
          default(){
            return{}
          }         
        }
    },
    setup() {
        
    },
}
</script>



<style scoped>
.price{
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px
}

.goods-info img{
  width:100px;
  height:100px;
  margin-bottom: 10px;
  box-shadow: 0 -1px 2px rgb(100,100,100,0.2);
}
</style>