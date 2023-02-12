import { createRouter, createWebHashHistory } from "vue-router"

import WatchList from '../view/watchlist.vue'
import Wishlist from '../view/Wishlist.vue'

const routs=[
    {
     path:'/watchlist',
     name: 'watchlist',
     component: WatchList
    },
    {
     path:'/wishlist',
     name: 'wishlist',
     component: Wishlist
    }
 ]
 
 
const router= createRouter({
    history:createWebHashHistory(),
    routes:routs
})


export default router