<template>
    <div class='shopCartView'>
        <div class='shopList' v-for="item in cartData" :key="item.id">
            <shop-item :item="item"></shop-item>
        </div>
    </div>
</template>

<script>
import shopItem from '@/components/shopcart/shopItem.vue'
import {getShopcartData} from '@/service/shopcart.js'
import { setup } from 'mockjs'
import { onMounted, reactive, ref } from '@vue/runtime-core'

export default{
    name: 'shopCart',
    components:{
        shopItem
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
</style>
  