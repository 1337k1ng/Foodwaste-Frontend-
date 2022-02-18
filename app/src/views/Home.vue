<template>
  <div class="home">
   <Navbar />
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
import Navbar from '../components/Navbar.vue'


export default {
  name: 'Home',
  components: {
    Navbar
    
  }
}
    Navbar
</script>

<style scoped>
.home{
  height: 100%;
}
</style>