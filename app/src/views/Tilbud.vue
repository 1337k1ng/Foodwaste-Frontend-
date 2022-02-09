<script setup> 

import {onMounted} from 'vue'

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
  <div class="tilbud">
    <h1>This is an tilbud page xd</h1>

  

  </div>
</template>
