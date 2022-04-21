<template>
    <div class='shopCartView'>
        <div class='itemlist'>
        <div class='shopList' v-for="item,index in cartData" :key="index">
            <shop-item :item="item" :index='index'></shop-item>
        </div>
        </div>
        <div class='submit'>
       <submit-bar></submit-bar>
        </div>
    </div>
</template>

<script>
import shopItem from '@/components/shopcart/shopItem.vue'
import {getShopcartData} from '@/service/shopcart.js'
import { setup } from 'mockjs'
import { onMounted, reactive, ref } from '@vue/runtime-core'
import submitBar from '@/components/shopcart/submit.vue'
import { useStore } from 'vuex'
export default{
    name: 'shopCart',
    components:{
        shopItem,
        submitBar
    },
    setup()	{
        const cartData = ref([])
        const store = useStore();

        onMounted(() => {
            cartData.value = store.state.shopCart.goods;
		});
        return {
            cartData
        }
    }
}
</script>

<style scoped>
.shopList{
    margin-top: 30px
}
.account{
    margin-bottom: 50px;
}
.itemlist{
   padding-bottom: 160px;
   overflow: hidden;
}
.submit{
    background-color: white;
    box-shadow: 0 -3px 4px rgba(146, 145, 145, 0.2);
    position: fixed;
    bottom:49px;
    width:100%
}
button{
    margin-bottom: 10px;
}
</style>
  