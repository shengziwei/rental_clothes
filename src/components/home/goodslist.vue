<template>
 <div class='goods-list'>
    <div class='goods-item' v-for="item in goodsData" :key="item.id">
     <a href="" @click.prevent = 'goDetail(item.id)' ><!--取消原来的事件，使用自定义事件-->
     <goods :item="item"></goods>
      </a>
  </div>
  </div>   
</template>

<script>
import goods from '@/components/home/goods.vue'
import {useRouter} from 'vue-router'
import {ref, onMounted,reactive,watchEffect,nextTick } from 'vue'
import BScroll from 'better-scroll'


export default {
    name: 'GoodsList',
    components:{
        goods
    },
    props:{
        goodsData: {
            type: Object,
            default(){
              return {}
            }
        }
    },
    setup() {
      const router = useRouter();

      const goDetail = (id) =>{
      router.push({
      name: 'Detail',
      params: {
          id
        }
      })
    } 
    
    return{
        goDetail       
    }
  }
}
</script>

<style>
.goods-list{
  display: flex;
  padding-bottom: 50px;
  align-content: center;
  font-size: 10px;
  flex-wrap: wrap;
  justify-content: center;
}

.goods-item{
  margin: 20px;
  padding: 0 20px;
  align-items: center;
}
</style>