<template>
<div class='detail-view'>
    
    <div class='detail-banner'>
    <banner :bannerData=info.gallery></banner>
    </div>
    <div class='basicInfo'>
        <div class = 'name'>{{info.name}}</div>
        <div class = 'price'>￥{{info.counterPrice}}/天</div>
        <quantity-control class='quantity' @getNum="getNum"></quantity-control>
        <div class='button-area'>
        <button  @click='addCart'>加 入 购 物 车</button>
        </div>
    </div>
    <tab-control :titles="['商品详情','评论','相关推荐']"></tab-control> 

</div>
</template>

<script>
import { ref,onMounted,reactive,toRefs, toRef } from 'vue';
import {useRoute} from'vue-router';
import {getGoodsInfo} from '@/service/detail.js'
import banner from '@/components/home/banner.vue';
import QuantityControl from '@/components/detail/detailQuantityControl.vue';
import TabControl from '@/components/utils/TabControl.vue';
import { addShopcartData} from '@/service/shopcart.js'
import { useStore } from 'vuex';
import { getHomeGoodsData } from '@/service/home';
import { GridItem } from 'vant';

export default{
	components: { 
        banner,
        QuantityControl,
TabControl
     },
  setup(){
      const route = new useRoute();
      const store = useStore();

      const goodsInfo = reactive({
          info: {},
          comments:[]
      })
      let id = ref(0);
      let name = ref("")
      let goodsNum = ref(1);
      id.value = route.query.id;  
      name.value = route.query.name 

      const getNum = (num) =>{
          console.log("得到了",num);
          goodsNum.value = num;
    }
      
      onMounted(()=>{
          getGoodsInfo(id.value).then(res=>{
              console.log(res);
              goodsInfo.info = res.data.info;
              goodsInfo.comments = res.data.comments;
          })
      });

      const addCart = () =>{
          addShopcartData(id.value,goodsNum.value).then(res=>{
              console.log(res);
            //   if(res.errno=== 0)
            //   {
            // if((store.state.shopCart.goods.filter(item=>item.goodsId==id.value).length)===0)//第一个等于不需要严格相等
            // {
            //    store.state.shopCart.goods.push(
            //         {
            //             goodsId: id.value,
            //             name:goodsInfo.info.name,
            //             number: goodsNum.value,
            //             price:goodsInfo.info.counterPrice,
            //             picUrl:goodsInfo.info.picUrl
            //         }
            //     )
            //     store.commit("setShopNumAndPrice",store.state.shopCart.goods)
            //     // store.state.shopCart.totalNum+=goodsNum.value
            //     // store.state.shopCart.totalPrice+=goodsNum.value*goodsInfo.info.price
            //     // store.dispatch('updateCart')//action的方法使用分发
            //     }
            //     else
            //     {
            //    store.state.shopCart.goods.filter(item=>item.goodsId==id.value)[0].number += goodsNum.value
                //store.commit("setShopNumAndPrice",store.state.shopCart.goods)
                store.dispatch('updateCart')
          })
        }

      return {
          id,
          goodsInfo,
          ...toRefs(goodsInfo),
          getNum,
          addCart,
          goodsNum,
          store,
          name  
     }
}
}
</script>

<style scoped>
.name{
    margin: 10px
}
.price{
    margin: 10px;
    font-family: 'VisbyCF-Thin';
    font-weight: bold
}
.buttom-area{
    display: flex;
}
button{
    border-radius: 0px;
    border: 0px;
    background-color: #111111;
    width: 150px;
    height: 45px;
    font-size: 14px;
    font-weight: 200;
    color: aliceblue;
    margin: 20px 20px
}
.quantity{
    margin: 10px 80px
}
</style>

