<template>
<div class="home">
  <h1>happy </h1>
</div>
</template>

<script>
import {getHomeGoodsData} from '@/service/home.js'
import { onMounted } from 'vue'
import axios from 'axios'

export default{
  name: 'Home',
  setup(){
  onMounted(()=>{getHomeGoodsData().then(res=>{//只有promise对象有then方法
    console.log(res)
    })
  })
  }
}
  // async created(){
  //   let res = await axios.get("/api/getHomeGoodsData")
  //   console.log(res.data)
  // }

</script>
