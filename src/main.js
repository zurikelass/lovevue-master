import { createApp } from "vue"
import App from "./App.vue"
import { createStore } from "vuex"
import "./assets/main.css"

const app = createApp(App)

const store = createStore({
    state(){
        return {
          products:{
           title: "WatchList",
           action: true,
           data:  [
            {id: 1, name: "Product 1", price: 100},
            {id: 2, name: "Product 2", price: 100 },
            {id: 3, name: "Product 3", price: 100 },
            {id: 4 , name: "Product 4", price: 100 },
          ]
          },
          cart: {
            title: "WishList",
            action:false,
            data: [],
          }
          
         
        };
    }
})


createApp(App)
.use(store)
.mount('#app')
