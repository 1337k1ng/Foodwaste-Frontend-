

<script setup>
import {defineProps, onMounted} from 'vue'

const props = defineProps({
    store: Object
})
onMounted(()=> {
    console.log(props.store)
})

</script>
<template>
    
  <div class="Storecomponent" >

      <div class="store"> 
          <button>{{props.store.name}}</button>
      </div>

    </div>

</template>