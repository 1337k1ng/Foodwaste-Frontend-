<script setup> 

import {onMounted} from 'vue'
import Stores from '../components/Stores.vue'

  onMounted(async ()=> {
   fetch("https://localhost:5001/api/stores")
   .then( async response => {

      const data = await response.json();

      if(!response.ok){
        const error = data.message
        return Promise.reject(error)
      }

      console.log(data)
   })
   .catch(error => {
     console.error("There was error", error.message)
   })

      })
 </script>

<template>
  <div class="about">
    <Stores />

  </div>
</template>


<style scoped>

</style>
