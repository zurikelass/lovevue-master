<script>
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'
import { useStore } from 'vuex'

export default {
  components: {
    Cart,
    Products
  },
  data() {
    return {
      menu: [
        { routeName: 'Home', title: 'Main Page' },
        { routeName: 'About', title: 'About Us' }
      ]
    }
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
  <div class="container flex flex-col mt-4 mx-auto space-y-4">
    <div class="flex flex-row space-x-4">
      <RouterLink v-for="(item, index) in menu" :key="index" :to="{ name: item.routeName }">
        {{ item.title }}
      </RouterLink>
    </div>
    <div>
      <RouterView />
    </div>
  </div>
</template>
