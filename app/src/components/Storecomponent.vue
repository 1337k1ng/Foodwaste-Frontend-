

<script setup>
import {defineProps} from 'vue'


const props = defineProps({
    store: Object
    })

  import {defineEmits} from 'vue'
  
    const emits = defineEmits(["setOffers"])


  function setOffers(id, name){
      emits("setOffers",id, name)
  }
  


</script>
<template >
    
  <div class="Storecomponent" >

      <div class="store" > 
          <button  @click.prevent="setOffers(props.store.id, props.store.name)" >  {{props.store.name}}</button>
      </div>

    </div>

</template>