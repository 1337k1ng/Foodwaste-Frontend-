


<script setup>
import {defineProps, ref} from 'vue'
import Storecomponent from "../components/Storecomponent.vue"
import sallingApi from '../api/sallingApi'
import Clearancecomponent from '../components/Clearancecomponent.vue'

const props = defineProps({
  storelist: {
    type: Array,
    required: true
  }})



const offers = ref([])
const storeName = ref("")


function setOffers(id, name){
    storeName.value = name
    sallingApi.getOfffersByStore(id).then((data)=>{
       offers.value = data.clearances


    })

}

console.log(storeName)
</script>


<template>
    <div class="storelist" v-if="offers.length === 0">

        <Storecomponent  @setOffers="setOffers" v-for="store in props.storelist" :store="store" :key="store.id"/>
    </div>

        <div class="offersList" v-else>
            <div class="offersheader"> 
                <h2> {{storeName}}</h2>
            </div>
            <div class="offersitems">
            <Clearancecomponent  v-for="clearance in offers" :clearance="clearance" :key="clearance"/> 
             </div>
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

.offersheader{
    background-color: rgb(210, 225, 230);
    text-align: left;
    margin-left: 40px;
    margin-right: 40px;
    

}



.offersitems{
   padding: 20px;
    display: flex;
    flex-wrap: wrap;
    background-color: rgb(210, 225, 230);
    margin-left: 40px;
    margin-right: 40px;
    justify-content: center;
}

h2{
    padding: 10px;
    font-weight: bold;
}

</style>