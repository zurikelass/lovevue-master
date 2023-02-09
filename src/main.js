import { createApp } from "vue"
import App from "./App.vue"
import { createStore } from "vuex"
import "./assets/main.css"
import router from "./router/index.js"
import Search from "./Search.vue"
const app = createApp(App)

const store = createStore({
    state(){
        return {
          products:{
                   
           title: "WatchList",
           action: true,
           data:  [
            {id: 1, name: "კაცები", description:'კაცები რომში'},
            {id: 2, name: "Product 2", price: 100 },
            {id: 3, name: "Product 3", price: 100 },
            {id: 4 , name: "Product 4", price: 100 },
          ]
          },
          cart: {
            title: "WishList",
            action:false,
            data: [],
          },
         
    
         
        };
    },
    
    mutations:{ 
       addToWishList(state, payload){
        let product=state.products.data.find(item => item.id == payload)
        state.products.data.splice(state.products.data.indexOf(product),1)
        state.cart.data.push(product)
       },
       removeFromWishList(state, payload){
        let product = state.cart.data.find(item => item.id == payload)
        state.cart.data.splice(state.cart.data.indexOf(product), 1)
       state.products.data.push(product)
       },
    },
    
})

createApp(App)
.component("search-component", Search)
.use(router)
.use(store)
.mount('#app')
