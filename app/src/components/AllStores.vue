


<script setup>
import {defineProps, ref} from 'vue'
import Storecomponent from "../components/Storecomponent.vue"
import sallingApi from '../api/sallingApi'
import Clearancecomponent from '../components/Clearancecomponent.vue'

const props = defineProps({
  storelist: {
    type: Array,
    required: true
  }
})



const offers = ref([])

function setOffers(id){
    sallingApi.getOfffersByStore(id).then((data)=>{
       offers.value = data.clearances

    })

}


</script>


<template>
    <div class="storelist" v-if="offers.length === 0">

        <Storecomponent  @setOffers="setOffers" v-for="store in props.storelist" :store="store" :key="store.id"/>
    </div>

        <div class="offersList" v-else>
            <Clearancecomponent  v-for="clearance in offers" :clearance="clearance" :key="clearance"/> 
        </div>
</template>

<style>

.storelist{
      display: flex;
       flex-wrap: wrap;
   justify-content: space-between;
   justify-items: center;
   padding: 50px;

}
.singlestore{
    flex: 0 1 320px;
    height: 100px;
    margin: 20px;
     transition: width 0.3s, box-shadow 0.3s;
    cursor: pointer;
    display: inline-block;
    background-color: white;
    font-size: 2em;
    box-shadow: 2px 2px 5px darkgray;
}

.singlestore:hover{
    
      transform: scale(1.2,1.2);
}

button{
    width: 100%;
    height: 100%;
    background-color: white;
    border: none;
}


.offersList{
  display: flex;
       flex-wrap: wrap;
   justify-content: space-between;

}
</style>