import { createRouter, createWebHistory } from "vue-router";

import WatchList from "../view/Watchlist.vue";
import Wishlist from "../view/Wishlist.vue";
import Currencies from "../view/Currencies.vue";


const routs = [
  {
    path: "/watchlist",
    name: "watchlist",
    component: WatchList,
  },
  {
    path: "/wishlist",
    name: "wishlist",
    component: Wishlist,
  },
  {
    path: "/currencies",
    name: "currencies",
    component: Currencies,
  },
  {
    path: "/slider",
    name: "slider",
    component: () => import('../view/Slider.vue'),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes: routs,
});

export default router;
