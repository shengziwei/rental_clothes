<template>
<div>
    <div>{{id}}</div>
</div>
</template>

<script>
import { ref } from 'vue';
import {useRoute} from'vue-router';

export default{
  setup(){
      const route = new useRoute();
      let id = ref(0);
      id.value = route.params.id;

      return {
          id
      }
  }
}
</script>
