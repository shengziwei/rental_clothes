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

export default {
  name: 'APP',
  components: {
    NavBar,
    HeadBar
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
  margin-top: 45px;
}

</style>
