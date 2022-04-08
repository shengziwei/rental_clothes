<template>
    <div class='category-view'>
        <tab-control :titles="['新品上架','价格','热销']"></tab-control> 
        <div>
            <goods-list :goodsData="goodsData"></goods-list>
        </div>
    </div>
</template>

<script>
import TabControl from '@/components/utils/TabControl.vue'
import {getCategoryGoodsData} from '@/service/category.js'
import { onMounted, ref } from '@vue/runtime-core'
import GoodsList from '@/components/home/goodslist.vue'

export default {
    name: 'Category',
    components:{
        TabControl,
        GoodsList
    },
    setup() {
        const goodsData = ref([]);

        onMounted(()=>{getCategoryGoodsData().then( res=>{
                    console.log(res)
                    goodsData.value =res.data.goodsInfo;
                })
        })  
        
        return{
            goodsData
        }
    },
}
</script>

<style scoped>

</style>