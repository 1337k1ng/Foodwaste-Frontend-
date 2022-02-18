


<script setup>
    import {defineEmits} from 'vue'
  
    const emits = defineEmits(["setStore"])


  function setStoreVal(val){
      emits("setStore",val)
  }



</script>


<template>
    <div class="stores" >

   

            <div class="storeImages">
        
                <button v-on:click="setStoreVal('Bilka')"> <img src="../assets/bilka.png" /> </button>
                <button v-on:click="setStoreVal('Foetex')"> <img src="../assets/fotex.png"/></button>
                <button v-on:click="setStoreVal('Netto')"><img src="../assets/netto.png"/> </button>

           </div>

    </div>

</template>


<style scoped>



.storeImages{
    margin-top: 8%;
  display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    width: 72%;
    margin-left: auto;
    margin-right: auto;
}


img {
    
    margin: 10px;
    width: 26em;
    box-shadow: 2px 2px 5px darkgrey;
     transition: width 0.3s, box-shadow 0.3s;
    cursor: pointer;
}

img:hover{
    width: 32em;
      box-shadow: 2px 2px 8px darkgrey;

}

button {
    flex: 0 0 212px;
    padding: 0px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
}
</style>