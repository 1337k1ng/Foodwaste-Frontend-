

<script setup>

import {defineProps, onMounted} from 'vue'

const props = defineProps({
    clearance: Object
})

onMounted(()=>{
    console.log("PROPS")
        console.log("PROPS")

    console.log(props)
})

</script>




<template>
    
    <div class="offerCard">

        <img :src="clearance.product.image ? clearance.product.image : '../assets/bilka.png'" />
       <p>{{clearance.product.description}}</p>

        
    </div>


</template>

<style scoped>

.offerCard{
 flex: 0 1 220px;
     border: 1px solid black;
height: 350px;
width: 200px;
margin: 10px;
}

img{
        width: 100%;
        height: 40%;
        object-fit: contain;
        
}
</style>