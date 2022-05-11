<template>
    <div class='searchView'>
        <tab-control @tabClick="tabClick" :titles="['最新上架','价格','热销']"></tab-control>
        <goodslist class="goodsList" :goodsData="resultData"></goodslist>
    </div>
</template>


<script>
import goodslist from '@/components/home/goodslist.vue';
import { useRoute } from 'vue-router'
import { onMounted, ref } from '@vue/runtime-core';
import { getSearchResult } from '@/service/home';
import TabControl from '@/components/utils/TabControl.vue'

export default {
    name: 'Search',
	components: { goodslist,TabControl },
    setup() {
        const route = useRoute();
        const description = route.query.description;
        const resultData = ref([]);

        console.log(description)

        onMounted(()=>{
            getSearchResult(description).then(res=>{
                console.log(res)
                resultData.value = res.data.list;
            })
        })
          const tabClick = (index) => {
            let types = ['id','counterPrice','id'];
            console.log(sortByKey(resultData.value,types[index]));
        };     
        
        const sortByKey=(array,key)=>{
            return array.sort(function(a,b){
                var x=a[key];
                var y=b[key];
                return ((x<y)?-1:((x<y)?1:0));
            });
        }
        return {
            resultData,
            tabClick
        }
        
    },
}
</script>

<style scoped>
.searchView{
    height: 100%;
    background: rgb(249, 240, 240);
}
.goodsList{
    background: rgb(249, 240, 240);
}
</style>