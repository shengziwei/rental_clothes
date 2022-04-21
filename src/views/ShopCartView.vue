<template>
    <div class='shopCartView'>
        <div class='shopList' v-for="item in cartData" :key="item.id">
            <shop-item :item="item"></shop-item>
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
export default{
    name: 'shopCart',
    components:{
        shopItem,
        submitBar
    },
    setup()	{
        const cartData = ref([])

        onMounted(() => {
			getShopcartData().then((res) => {
                console.log(res)
				cartData.value = res.data.goods;
			});
		});
        return {
            cartData
        }
    }
}
</script>

<style scoped>
.shopList{
    margin-top: 70px
}
.account{
    margin-bottom: 50px;
}
.shopCartView{
    height:100vh
}
.submit{
    box-shadow: 0 -3px 4px rgba(146, 145, 145, 0.2);
    position: fixed;
    bottom:60px;
    width:100%
}
</style>
  