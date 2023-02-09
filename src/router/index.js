import { createRouter, createWebHashHistory } from "vue-router"

import Home from '../view/Home.vue'
import About from '../view/About.vue'

const routs=[
    {
     path:'/',
     name: 'Home',
     component: Home
    },
    {
     path:'/',
     name: 'About',
     component: About
    }
 ]
 
 
const router= createRouter({
    history:createWebHashHistory(),
    routes:routs
})


export default router