<template>
<div class="orderlistView">
        <van-tabs class='nav' 
        color="black"
        title-active-color=""
        v-model:active="active"
        @click-tab="tabClick"
        >
         <van-tab  v-for="item in ['全部','待付款','待发货','已发货','已完成']"
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
import { computed, onMounted } from '@vue/runtime-core';
import {getOrderList} from '@/service/order.js'
import { useStore } from 'vuex';
import { useRoute } from 'vue-router';

export default {
    name: 'OrderListView',
    components: {
        orderListItem
    },
    setup() {
        const route = useRoute();
        const active = ref(0);
        const chooseData = ref([])
        const store = useStore();
        console.log(active)

        onMounted(()=>{
            store.dispatch('setOrder')
            console.log(store.state.orderlist.order)
            active.value = Number(route.query.index)
            initial(Number(route.query.index))
        })

        const tabClick=(index)=>{
         initial(index.name)
        }

        const initial = (tabNum) =>{
            if(tabNum == 0)
            chooseData.value = store.state.orderlist.order;
            else
            chooseData.value =store.state.orderlist.order.filter(item=>Number(item.order_status==tabNum));
            chooseData.value.forEach((item)=>{
                let num=0;
                let price=0;
                item.goodsList.forEach(element=>{
                     num +=  element.number
                     price += element.number*element.price
                })
                item.totalNum=num
                item.totalPrice = price
            })
              console.log(chooseData.value)
        }

      
        return {
            active,
            tabClick,
            chooseData,
            store,
            initial

        }
    },
}
</script>

<style scoped>
.nav{
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
    height: 100%;
    background:rgb(247, 247, 247);
}
.warning{
    margin: 20px;
    color: rgb(146, 146, 146);;
}
</style>