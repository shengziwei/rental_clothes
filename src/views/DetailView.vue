<template>
<div class='detail-view'>
    
    <div class='detail-banner'>
    <banner :bannerData=info.image></banner>
    </div>
    <div class='basicInfo'>
        <div class = 'name'>{{info.name}}</div>
        <div class = 'price'>￥{{info.price}}</div>
        <quantity-control class='quantity' @postToDetail="getNum"></quantity-control>
        <div class='button-area'>
        <button  @click='addCart'>加 入 购 物 车</button>
        <button>立 即 购 买</button>
        </div>
    </div>
    <tab-control :titles="['商品详情','评论','相关推荐']"></tab-control> 

</div>
</template>

<script>
import { ref,onMounted,reactive,toRefs } from 'vue';
import {useRoute} from'vue-router';
import {getGoodsInfo} from '@/service/detail.js'
import banner from '@/components/home/banner.vue';
import QuantityControl from '@/components/detail/quantityControl.vue';
import TabControl from '@/components/utils/TabControl.vue';
import { addShopcartData} from '@/service/shopcart.js'
import store from '@/store';
import { useStore } from 'vuex';
import { getHomeGoodsData } from '@/service/home';

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
      let goodsNum = ref(1);
      id.value = route.params.id;
   

      const getNum = (num) =>{
          goodsNum.value = num;
    }
      
      onMounted(()=>{
          addShopcartData(id.value,goodsNum.value).then(res=>{
              console.log(res);
          }
          )
          getGoodsInfo(id.value).then(res=>{
              console.log(id.value);
              goodsInfo.info = res.data.info;
              goodsInfo.comments = res.data.comments
          })
      });

      const addCart = () =>{
          addShopcartData(id.value,goodsNum.value).then(res=>{
              console.log(res);
              if(res.data.status === 'success')
              {
                store.dispatch('updateCart')//action的方法使用分发
              }
          
          })
        }

      return {
          id,
          goodsInfo,
          ...toRefs(goodsInfo),
          getNum,
          addCart      
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

