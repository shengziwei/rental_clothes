<template>
    <div class='goods-info'>
        <img :src='item.picUrl' alt="">
        <div class ='goods-name' >{{item.name}}</div>
        <div class='buyBox'>
        <div class = 'price'>￥{{item.counterPrice}}/天</div>
        <div class='icon'><i class='iconfont icon-shopcart'></i></div>
        </div>
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
  font-family: 'VisbyCF-Bold';
  color: brown;
  width: 80%;
  font-size: 15px;
  text-align: left;
  margin-left: 10px;
}

.goods-info{
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  box-shadow: 0 -2px 2px rgb(100,100,100,0.2);
   border-radius: 10px;
}
.goods-info img{
  width: 100%;
  aspect-ratio: 1;
  margin:0px;
  border-radius: 10px;
}

.goods-name{
  width:100%;
  font-size: 15px;
  text-align: left;
  margin: 5px 10px;
}
.buyBox{
  display: flex;
  justify-content: left;
  align-items: center;
  margin: 0px 0 10px;
}
.icon{
  font-size: 15px;
  color: black;
  margin-right: 5px;
}
</style>