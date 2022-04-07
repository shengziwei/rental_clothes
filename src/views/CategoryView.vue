<template>
    <div class='category-view'>
        <tab-control :titles="['新品上架','价格','热销']"></tab-control> 
    </div>
</template>

<script>
import TabControl from '@/components/utils/TabControl.vue'

export default {
    name: 'Category',
    components:{
        TabControl
    },
    setup() {
        
    },
}
</script>

<style scoped>

</style>