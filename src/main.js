import { createApp } from "vue"
import App from "./App.vue"
import "./assets/main.css"
import router from "./router/index.js"
import store from "./store"
import '@splidejs/vue-splide/css';
import VueSplide from '@splidejs/vue-splide';

createApp(App)
.use( VueSplide )
.use(store)
.use(router)
.mount('#app')
