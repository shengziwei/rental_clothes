<template>
<div id="app">
  <nav-bar></nav-bar>
</div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import NavBar from '@/components/common/navBar.vue'


export default {
  name: 'APP',
  components: {
    NavBar
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
  margin-top: 60px;
}

</style>
