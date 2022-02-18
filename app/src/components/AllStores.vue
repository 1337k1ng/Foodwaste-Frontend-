


<script setup>
import {defineProps} from 'vue'
import Storecomponent from "../components/Storecomponent.vue"
//import sallingApi from '../api/sallingApi'
//import router from "../router/index.js"

const props = defineProps({
  storelist: {
    type: Array,
    required: true
  }})




</script>


<template>
    <div class="storelist" >

        <Storecomponent  v-for="store in props.storelist" :store="store" :key="store.id"/>
    </div>

     
</template>

<style>


.storelist{
    
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;

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