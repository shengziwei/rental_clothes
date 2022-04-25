<template>
    <div class='orderListItem'>
        <div class="orderInfo">
            <div class='number'>订单编号：{{item.orderId}}</div>
            <div class='status'>{{status}}</div>
        </div>
        <div class="van-hairline--surround"></div>
        <div class='infoBox'>
            <img :src="item.cover_img" 
            alt="img"
             width="80px" height="80px"/>
             <div  class='textInfo'>
                 <div>{{item.name}}</div>
                 <div>￥{{item.price}}</div>
             </div>
        </div>
        <div class='conclusion'>共{{item.totalNum}}件商品，合计<span>￥{{item.totalPrice}}</span></div>
    </div>
</template>


<script>
import { ref } from '@vue/reactivity';
import { computed, nextTick, watch, watchEffect } from '@vue/runtime-core';
export default {
    name: 'orderListItem',
    components:{

    },
    props:{
        item:{
            type: Object,
            default(){
                return {}
            }
        }
    },
    setup(props) {
        let index

        const status = computed(()=>{
            if( props.item.order_status === 1)
            return "未付款"
            else if( props.item.order_status=== 2)
            return '待发货'
            else if( props.item.order_status=== 3)
            return '已发货'
            else if( props.item.order_status=== 4)
            return '已完成'
        });

        return{
            status
        }
    },
}
</script>

<style scoped>
.orderInfo{
    display: flex;
    justify-content: flex-start;
    padding: 10px 10px;
}
.infoBox{
    display: flex;
}
.number{
    width:80%;
    text-align: start;
    color: rgb(146, 146, 146);
}
.status{
    width: 20%;
    color: rgb(245, 104, 104);
    text-align: end;
}
.orderListItem{
    box-shadow: 0 1px 1px rgb(183, 181, 181);
    border-radius: 10px;
    background-color: white;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    font-family: "VisbyCF-Bold";
}
.infoBox{
    margin: 20px 20px 0;
    text-align: start;
}
.infoBox img{
    width: 80px;
    height: 80px;
    border-radius: 15px;
    margin-right: 20px
}
.textInfo{
    width: 70%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin-bottom: 10px;
}

.conclusion{
    text-align: end;
    margin: 0 10px 10px;
}
.conclusion span{
    font-size: 20px;
    color: brown;
}


</style>