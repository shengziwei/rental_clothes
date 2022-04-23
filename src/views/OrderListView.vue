<template>
<div class="orderlistView">
        <van-tabs class='nav' 
        color="black"
        title-active-color=""
        v-model:active="active"
        @click-tab="tabClick"
        >
         <van-tab  v-for="item,index in ['全部','待付款','待发货','已发货','已完成']"
         :title="item"></van-tab>
        </van-tabs>

        <div class="listBox">
        <div v-if="chooseData" class="orderlist" v-for="item,index in chooseData" :key='index'>
            <order-list-item :item='item'></order-list-item>
        </div>
         <div class='warning'>
            没有更多数据
        </div>
        </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
import orderListItem from '@/components/order/orderListItem.vue'
import { onMounted } from '@vue/runtime-core';
import {getOrderList} from '@/service/order.js'
import { useStore } from 'vuex';

export default {
    name: 'OrderListView',
    components: {
        orderListItem
    },
    setup() {
        const active = ref(0);
        const chooseData = ref([])
        const store = useStore();

        onMounted(()=>{
            console.log(store.state.orderlist.order)
            chooseData.value = store.state.orderlist.order
        })

        const tabClick=(index)=>{
            console.log(index)
            if(index.name == 0)
            chooseData.value = store.state.orderlist.order;
            else
            chooseData.value =store.state.orderlist.order.filter(item=>item.order_status==index.name);
            console.log(chooseData.value)
        }

        return {
            active,
            tabClick,
            chooseData,
            store

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
}
.listBox{
   background:rgb(247, 247, 247);
   padding-bottom: 60px
}
.orderlistView{
    background:rgb(247, 247, 247);
}
.warning{
    margin: 20px;
    color: rgb(146, 146, 146);;
}
</style>