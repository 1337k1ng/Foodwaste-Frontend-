

<script setup>
import {defineProps} from 'vue'
import {useStore} from 'vuex'


const store = useStore()

const props = defineProps({
    store: Object
    })
  



  function setOffersVal(id, name){
  
  store.dispatch("getOffers",{"id":id, "name":name})
  }
  


</script>
<template >
    


      <div class="store" > 
          <button  @click.prevent="setOffersVal(props.store.id, props.store.name)" > 
             <div class="map" > 
               <img src="../assets/maps.webp"/>
                </div>
            <h1 class="name"> {{props.store.name}} </h1>
             <h1 class="address"> {{props.store.address.street}} </h1>
            
             </button>
      </div>

    

</template>


<style scoped>



.store{
  height: 180px;
  background-color: lightblue;
   flex: 0 0 450px;
  margin: 20px;
  transition-duration: 0.6s;
}


.store:hover{
  z-index: 1;
  transform: scale(1.2,1.2);
  box-shadow: 2px 2px 8px rgb(112, 112, 112);
}
img{
  width: 100%;
  height: 100%;
  object-fit:cover ;
}
  button{
   background-color: rgba(173, 216, 230, 0);
   display: block;
   padding: 0px;
   height: 100%;
   width: 100%;

  }
  .map{
    float: right;
    width: 45%;
    background-color: beige;
    height: 100%;
  }


  .name{

    margin-top: 55px;
    font-size: 22px;
    text-align: center;
  font-weight:bold ;
    width: 55%;
  }
  .address{
    font-size: 22px;
    text-align: center;
    width: 55%;
  }
</style>