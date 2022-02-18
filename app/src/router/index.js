import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import About from '../views/About.vue'
import Tilbud from '../views/Tilbud'
import Strores from '../views/Stores.vue'



const routes = [



  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/about',
    name: 'About',
    component: About

    
  },
  {
    path: '/tilbud',
    name: 'Tilbud',
    component: Tilbud,

    children:[
      {
        path: "/offers/:store",
        name:'tilbud',
        component: Tilbud,
      }
    ]
 
  },

  {
    path: '/Stores',
    name: 'Stores',
    component: Strores,
    children: [
      {
        path: "/Stores/:type",
        name:'Stores',
        component: Strores,
      }
    ]
 
  }
  
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
