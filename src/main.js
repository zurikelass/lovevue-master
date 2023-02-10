import { createApp } from "vue"
import App from "./App.vue"
import "./assets/main.css"
import router from "./router/index.js"
import store from "./components/store"
createApp(App)
.use(store)
.use(router)
.mount('#app')
