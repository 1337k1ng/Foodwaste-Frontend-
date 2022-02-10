


<script setup>
    import {defineEmits} from 'vue'
  
    const emits = defineEmits(["setStore"])


  function test(val){
      console.log("Clikced")
      emits("setStore",val)
  }
  
</script>


<template>
    <div class="stores" >

   
        <h1> Stores  </h1>

            <div class="storeImages">
                
           <button id="bilka" v-on:click="test('Bilka')"> <img src="../assets/bilka.png" /> </button>
            <button v-on:click="test('Foetex')"> <img src="../assets/fotex.png"/></button>
              <button v-on:click="test('Netto')"><img src="../assets/netto.png"/> </button>
        </div>

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

button {
    padding: 0px;
    border: none;
    background-color: rgba(255, 255, 255, 0);
}
</style>