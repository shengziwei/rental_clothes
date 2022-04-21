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
  margin: 5px;
  font-weight: bold
}

.goods-info img{
  width:100%;
  margin-bottom: 10px;
  box-shadow: 0 -1px 2px rgb(100,100,100,0.2);
}

.goods-name{
  width:100%
}
button{
    border-radius: 15px;
    border: 1px solid rgb(151, 149, 149);
    background-color: #fbf3f3eb;
    width: 90%;
    height: 35px;
    font-size: 10px;
    font-weight: 200;
    color: #111;
    font-weight: bold;
    margin-bottom: 10px;
}
</style>