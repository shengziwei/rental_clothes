<template>
<div id="app">
  <nav-bar></nav-bar>
  <head-bar></head-bar>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from '@/components/common/navBar'
import HeadBar from '@/components/common/headBar'
import { onMounted } from '@vue/runtime-core'
import { useStore } from 'vuex'

export default {
  name: 'APP',
  components: {
    NavBar,
    HeadBar
  },
  setup(){
  onMounted(()=>{
    // const store = useStore();
    // store.dispatch("updateCart");
  })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height:100vh;
  margin-top: 45px;
}

</style>
