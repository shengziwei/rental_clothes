<template>
<div class="orderlistView">
        <van-tabs class='nav' 
        color="black"
        title-active-color=""
        v-model:active="active"
        >
        <van-tab title="全部"></van-tab>
        <van-tab title="待付款"></van-tab>
        <van-tab title="待发货"></van-tab>
        <van-tab title="已发货"></van-tab>
        <van-tab title="已完成"></van-tab>
        </van-tabs>
        <div class="listBox">
        <div v-if="orderListData" class="orderlist" v-for="item,index in orderListData" :key='index'>
            <order-list-item :item='item'></order-list-item>
        </div>
        </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import orderListItem from '@/components/order/orderListItem.vue'
import { onMounted } from '@vue/runtime-core';
import {getOrderList} from '@/service/order.js'

export default {
    name: 'OrderListView',
    components: {
        orderListItem
    },
    setup() {
        const active = ref(0);
        const orderListData = ref([])

        onMounted(()=>{
            getOrderList().then(res=>{
                orderListData.value = res.orderList;
                console.log(res)
            })
        })

        return {
            active,
            orderListData
        }
    },
}
</script>

<style scoped>
.nav{
    height: 100%;
    width: 100%;
    margin-top: 50px;
    font-size: 100px;
}
.van-tabs{
 --van-tab-font-size:17px;
}
.orderlist{
    width: 100%;
    height:100%;
    margin-top:20px;
    padding-bottom: 30px;
}
.listBox{
   padding-bottom: 40px
}
</style>