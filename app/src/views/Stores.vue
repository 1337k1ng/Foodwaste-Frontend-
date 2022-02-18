<script setup> 

import { ref} from 'vue'
import StoreTypes from '../components/StoreTypes.vue'
import sallingApi from "../api/sallingApi.js"
import router from "../router/index.js"
import AllStores from "../components/AllStores.vue"
import Navbar from "../components/Navbar.vue"

const chosenStore = ref("")
const stores  = ref([])
 


function setStore(val) {

  sallingApi.getStores(val).then((res) =>{
      stores.value = res
      chosenStore.value = val
    })
    router.push("/Stores/" + val)
}


function ShowStoreTypes(){
    return router.currentRoute.value.path == "/Stores"
}


 </script>

<template>


  <div class="stores1">
 <Navbar />
     

    <div  v-if="ShowStoreTypes()">
     <h1> Types of Stores  </h1>
    <StoreTypes  @setStore="setStore" />
    </div>

    <div v-else > 
        <img v-if="chosenStore== 'Bilka'" src="../assets/bilka.png"/>
         <img v-else-if="chosenStore== 'Foetex'" src="../assets/fotex.png"/>
          <img v-else-if="chosenStore== 'Netto'" src="../assets/netto.png"/>

        <AllStores :storelist="stores"/>
    </div>

    
    

  </div>
</template>


<style scoped>

.stores1{
    height: 100vmax;
}


img{
  width: 250px;
}
h1{
    margin-top: 10%;
font-size: 4vw;

}

img{
    margin: 40px;
    box-shadow: 2px 2px 5px darkgray;
    width: 300px;
}
</style>
