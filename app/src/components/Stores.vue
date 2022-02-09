


<script setup>
import { onMounted, ref } from "@vue/runtime-core"

const test =  ref("los")

onMounted(()=>{
test.value = de()

console.log("dad")
console.log(test)

})

function de(){
    console.log("LOADEDE")
return `
        <div class="storeImages">
            <img src="../assets/bilka.png"/>
             <img src="../assets/fotex.png"/>
              <img src="../assets/netto.png"/>
        </div>
        `
}

</script>


<template>
    <div class="stores" >

   
        <h1> Stores   </h1>

           {{test}}


    </div>

</template>


<style scoped>
.storeImages{
    margin-top: 20%;
        margin-bottom: 100%;
}
img {
 
    margin: 10px;
    width: 20em;
    box-shadow: 2px 2px 5px darkgrey;
     transition: width 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

img:hover{
    width: 22em;
      box-shadow: 2px 2px 8px darkgrey;

}
</style>