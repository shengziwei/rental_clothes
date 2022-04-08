<template>
    <div class='category-view'>
        <tab-control @tabClick="tabClick"  :titles="['新品上架','价格','热销']"></tab-control> 
        <div>
            <goods-list :goodsData="currentGoods"></goods-list>
        </div>
    </div>
</template>

<script>
import TabControl from '@/components/utils/TabControl.vue'
import {getCategoryGoodsData} from '@/service/category.js'
import { computed, onMounted, reactive, ref } from '@vue/runtime-core'
import GoodsList from '@/components/home/goodslist.vue'

export default {
    name: 'Category',
    components:{
        TabControl,
        GoodsList
    },
    setup() {
        const goodsData = reactive({
            new: {list:[]},
            hot:{list:[]},
            price:{list:[]}
        });

        let currentType = ref('hot');
        const currentGoods = computed(() =>{
            return goodsData[currentType.value].list;
        })

        onMounted(()=>{
            getCategoryGoodsData('hot').then( res=>{
                    console.log(res)
                    goodsData.hot.list =res.data.goodsInfo;
                })
              getCategoryGoodsData('price').then( res=>{
                    console.log(res)
                    goodsData.price.list =res.data.goodsInfo;
                })
                  getCategoryGoodsData('new').then( res=>{
                    console.log(res)
                    goodsData.new.list =res.data.goodsInfo;
                })
                console.log(goodsData);
        })  
        
        const tabClick = (index) => {
            let types = ['hot','price','new'];
            currentType.value = types[index];
        }        
        return{
            goodsData,
            currentGoods,
            tabClick
        }
    },
}
</script>

<style scoped>

</style>