
<script >
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'
import { useStore } from 'vuex'

export default {
  components: {
    Cart,
    Products
  },
  setup() {
    const store = useStore()
    const products = store.state.products
    const cart = store.state.cart
    return {
      products,
      cart
    }
  }
}
</script>
<template>
  <div class="navbar"></div>

  <div class="container flex flex-row mt-4 mx-auto">
    <Products :data="products"/>
    <Cart :data="cart"/>
  </div>
</template>