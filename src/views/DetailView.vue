<template>
<div class='detail-view'>
    
    <div class='detail-banner'>
    <banner :bannerData=info.image></banner>
    </div>
    <div class='basicInfo'>
        <div class = 'name'>{{info.name}}</div>
        <div class = 'price'>￥{{info.price}}</div>
        <quantity-control></quantity-control>
        <button>加 入 购 物 车</button>
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

export default{
	components: { 
        banner,
        QuantityControl,
TabControl
     },
  setup(){
      const route = new useRoute();
      let id = ref(0);
      id.value = route.params.id;
      const goodsInfo = reactive({
          info: {},
          comments:[]
      })
      
      onMounted(()=>{
          getGoodsInfo(id.value).then(res=>{
              console.log(res);
              goodsInfo.info = res.data.info;
              goodsInfo.comments = res.data.comments
          })
      });

      return {
          id,
          goodsInfo,
          ...toRefs(goodsInfo)        
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
button{
    border-radius: 0px;
    border: 0px;
    background-color: #111111;
    width: 85%;
    height: 45px;
    font-size: 14px;
    font-weight: 200;
    color: aliceblue;
    margin-bottom: 20px;
}
</style>

