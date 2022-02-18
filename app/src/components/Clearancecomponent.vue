

<script setup>

import {computed, defineProps} from 'vue'
import noImage from "../assets/noImage.png"

const props = defineProps({
    clearance: Object
})



function getPriceString(){
return props.clearance.offer.newPrice.toString().length < 5 ? props.clearance.offer.newPrice + ".-" : props.clearance.offer.newPrice
}

const TimeToEnd = computed(() => {

    var startDate = new Date(props.clearance.offer.startTime)
    console.log("StartDate: ",startDate)
    var endDate = new Date(props.clearance.offer.endTime)
    var today = new Date()

var difference_In_Time = endDate.getTime() - today.getTime();
var difference_In_Days = difference_In_Time / (1000 * 3600 * 24);
return Math.ceil(difference_In_Days)

})

</script>




<template>
    
    <div class="offerCard">

        <img :src="clearance.product.image ? clearance.product.image : noImage" />
     
       <p class="title">{{clearance.product.description}}</p>

        <div class="prices"> 

                   <p class="newprice"> {{getPriceString()}}</p>
      <p class="oldprice"> {{clearance.offer.originalPrice}}</p>


        </div>
        <div class="timeatt"> 
            <p class="tp">Time left</p>
            <div class="holder">
                <p>{{TimeToEnd}} days</p>
            </div>
        </div>
        
    </div>


</template>

<style scoped>

.offerCard{
 flex: 0 0 265px;
background-color: white;
height: 400px;
width: 20%;
margin: 10px;
}

.offerCard:hover{
    box-shadow: 2px 2px 5px darkgray;
     transform: scale(1.1,1.1);
     cursor: pointer;
}

img{
        width: 100%;
        height: 65%;
        object-fit: scale-down;
        
}

.title{
    text-align: left;
    margin-left: 10px;
    font-size: 18px;
    font-weight: bold;
    height: 34px;
    margin-bottom: 15%;
}
span{

    display: block;
    height: 1px;
    width: 100%;
    background-color: rgb(0, 0, 0);
    margin-bottom: 4px;
}
.prices{
    display: inline-block;
    width: 70%;

    text-align: left;
}
.timeatt{
    width: 30%;
     display: inline-block;
    }
.tp{
    font-size: 12px;
    text-align: left;
    padding: 0px;
    margin: 0px;

    margin-left: 4px;
}

.holder{
    width: 90%;
    background-color:rgb(49, 172, 212);
    margin: 0px;
    color: white;
    border-radius: 20px;
}


.oldprice{
    display: inline-block;
    font-weight: bold;
    font-size: 20px;
    color: rgb(212, 49, 49,0.5);
    text-decoration: line-through;
    margin-right: 8px;
}
.newprice{  
   display: inline-block;
    margin-right: 8px;
    margin-left: 5px;
    font-weight: bold;
    font-size: 40px;
    color: rgb(49, 172, 212);
        
}
</style>