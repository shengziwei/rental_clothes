<template>
<div>
    <div>{{id}}</div>
</div>
</template>

<script>
import { ref,onMounted } from 'vue';
import {useRoute} from'vue-router';
import {getGoodsInfo} from '@/service/detail.js'

export default{
  setup(){
      const route = new useRoute();
      let id = ref(0);
      id.value = route.params.id;
      
      onMounted(()=>{
          getGoodsInfo(id.value).then(res=>{
              console.log(res);
          })
      });

      return {
          id
     }
}
}
</script>

