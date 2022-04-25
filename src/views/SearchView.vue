<template>
    <div class='searchView'>
        <goodslist :goodsData="resultData"></goodslist>
    </div>
</template>


<script>
import goodslist from '@/components/home/goodslist.vue';
import { useRoute } from 'vue-router'
import { onMounted, ref } from '@vue/runtime-core';
import { getSearchResult } from '@/service/home';

export default {
    name: 'Search',
	components: { goodslist },
    setup() {
        const route = useRoute();
        const description = route.query.description;
        const resultData = ref([]);

        console.log(description)

        onMounted(()=>{
            getSearchResult(description).then(res=>{
                console.log(res)
                resultData.value = res.data.resultList;
            })
        })
        return {
            resultData
        }
        
    },
}
</script>

<style scoped>
.searchView{
    height: 100%;
    background: rgb(249, 240, 240);
}
</style>