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
        <div class="orderlist">
        </div>
</div>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
    setup() {
        const active = ref(0)
        return {
            active
        }
    },
}
</script>

<style scoped>
.nav{
    height: 200px;
    width: 100%;
    margin-top: 50px;
    font-size: 100px;
}
.van-tabs{
 --van-tab-font-size:17px;
}
.orderlist{
    width: 100vh;
    height:100vh;
    background-color: gray ;
}
</style>