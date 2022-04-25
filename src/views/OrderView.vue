<template>
    <div class='orderView'>
        <div class='addressBox'  @click="$router.push({path:'/address'})">
          <img src="@/assets/images/address.svg">
          <div  v-if='address' class='address'>
          <div class='name'>{{name}}  {{phone}}</div>
          <div>{{address}}</div>
          </div>
          <div v-else='address'>添加收货地址</div>
        </div>
        <div class="itemList">
        <div v-for="item,index in orderData" :key="index">
            <order-item :item="item"></order-item>
        </div>
        </div>
       <submit-bar class="submit" :buttomType=2></submit-bar>
    </div>
</template>

<script>
import submitBar from '@/components/shopcart/submit.vue'
import orderItem from '@/components/order/orderItem.vue'
import { onMounted, reactive, ref, toRefs } from '@vue/runtime-core'
import {getOrderGoodsInfo} from '@/service/trade.js'
import {getAddress} from '@/service/address.js'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

export default {
    name:"OrderView",
    components:{
        submitBar,
        orderItem
    },
    setup() {
        const addressInfo = reactive({
            name:null,
            address:null,
            phone:null
        })

        const route = useRoute();
        const orderData = ref([])
        const store = useStore();
        const goodsId = route.query.goodsId;
        const totalPrice = ref(0);

        onMounted(()=>{
            console.log(goodsId)
            getAddress().then(res=>{
                console.log(res);
                addressInfo.name = res.data.name
                addressInfo.address = res.data.address
                addressInfo.phone = res.data.phone
                })

            getOrderGoodsInfo().then(res=>{
                console.log(res);
                orderData.value = res.data;
                orderData.value.forEach(element => {
                    totalPrice.value+=element.num*element.price
                });
                store.state.shopCart.totalPrice = totalPrice.value
            })
        })

        return{
            ...toRefs(addressInfo),
            orderData,
            totalPrice
        }
        
    },
}
</script>

<style scoped>
.orderView{
    align-content: center; 
}
.addressBox{
    background-color: rgb(247, 230, 240);
    border-radius: 15px;
    display: flex;
    flex-direction: row;
    margin: 60px 20px 20px;
    width: 360px;
    height: 60px;
    align-items: center;
    justify-items: center;
    box-shadow: 0 4px 4px rgba(146, 145, 145, 0.2);
}
.addressBox img{
    width: 80px;
    height: 30px
}

.address{
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    font-size: 14px;
    font-weight: 300;
}
.name{
    margin: 5px 0px;
    font-size: 18px;
    font-weight: bold;
}
.submit{
    background-color: white;
    box-shadow: 0 -3px 4px rgba(146, 145, 145, 0.2);
    position: fixed;
    bottom:49px;
    width:100%
}
.itemList{
     padding: 10px 0;
     border-radius: 15px;
     margin:20px;
     width: 90%;
     height: 100%;
     box-shadow: 0 3px 4px rgba(146, 145, 145, 0.2);
}
</style>