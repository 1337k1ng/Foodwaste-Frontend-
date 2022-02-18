import { createApp } from 'vue'
import { createStore } from 'vuex'

import App from './App.vue'
import router from './router'
import sallingApi from './api/sallingApi'
import 'bootstrap'; import 'bootstrap/dist/css/bootstrap.min.css'


const store = createStore({

    state: {
    offers: []
    },

    actions: {
    getOffers (state, info) {
        sallingApi.getOfffersByStore(info.id).then((data)=>{
            console.log(info.name, "infoNAME")

         this.commit('setOffers', {"data":data, "name":info.name})
            
            
                })
         }
    },

    mutations: {

        setOffers (state, data) {
            state.offers = data.data
            router.push("/offers/"+data.name)
            

        }

    }
})
createApp(App).use(router).use(store).mount('#app')

