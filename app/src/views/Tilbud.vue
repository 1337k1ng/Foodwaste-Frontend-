<script setup> 

import Clearancecomponent from "../components/Clearancecomponent.vue"
import {useStore} from 'vuex'
import { onMounted } from "@vue/runtime-core"
import Navbar from "../components/Navbar.vue"  

  const store = useStore()


  onMounted(()=>{

    console.log(store.state.offers, "OFFFERS")
  })


 </script>

<template>
  <div class="tilbud">
 <Navbar />

    <h1 class="storeTitle" > {{store.state.offers.store.name}}</h1>
<div class="clearences" v-if="store.state.offers != [] ">
<Clearancecomponent  v-for="clearance in store.state.offers.clearances" :clearance="clearance" :key="clearance" />
</div>
  </div>
</template>


<style scoped>
.clearences{

    width: 90%;
    display: flex;
    flex-wrap: wrap;
    flex-flow: row wrap;
    justify-content: space-between;
    margin-left: auto;
    margin-right: auto;
}
.storeTitle{
  /* position: -webkit-sticky; Safari */
  /* position: sticky; */
  /* top: 80px; */
 /* background-color: rgb(245, 245, 245);    */
 z-index: 5;
}


</style>

