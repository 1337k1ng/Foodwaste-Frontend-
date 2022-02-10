<script setup> 

import {ref} from 'vue'
import Stores from '../components/Stores.vue'
import AllStores from '../components/AllStores.vue'
import sallingApi from "../api/sallingApi.js"
const chosenStore = ref("")

const stores  = ref([])
 


function setStore(val) {
    


sallingApi.getStores("Bilka").then((res) =>{
  stores.value = res
   chosenStore.value = val
})
  
         console.log(val)
}




 </script>

<template>
  <div class="about">


    <div  v-if="!chosenStore">
    <Stores  @setStore="setStore" />
  </div>

  <div  v-else>
   <img src="../assets/bilka.png" v-if="chosenStore == 'Bilka'">
<img src="../assets/netto.png" v-else-if="chosenStore == 'Netto'">
<img src="../assets/fotex.png" v-else-if="chosenStore == 'Foetex'">
  <AllStores :storelist="stores" />
  </div>


  </div>
</template>


<style scoped>
img{
  width: 250px;
}
</style>
