import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { createWebHistory, createRouter } from 'vue-router'

import Home from "./components/Home.vue"
import CategoryDetails from "./components/CategoryDetails.vue"
import MealsDetails from "./components/MealsDetails.vue"

//definir rutas
const routes=[
    {
        path:"/",
        name:"Home",
        component:Home
    },
    {
        path:"/category/:title", //title se pasa como parametro
        name:"Category",
        component:CategoryDetails
    },
    {
        path:"/meal/:id",
        name:"Meals",
        component:MealsDetails
    },
    /* {
        path:"/categoryDetails", //title se pasa como parametro
        name:"Category",
        component:CategoryDetails
    },
    {
        path:"/mealsDetails",
        name:"Meals",
        component:MealsDetails
    }, */
]

const router=createRouter({
    history:createWebHistory(),
    routes
})
export default router

createApp(App).use(router).mount('#app')
