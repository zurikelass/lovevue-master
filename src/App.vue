
<script setup>
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'

const products=[
  {name:"Product 1", price:100 },
  {name:"Product 2", price:100 },
  {name:"Product 3", price:100 },
  {name:"Product 4", price:100 },
]
</script>

<template>
  <div class="container flex flex-row mt-4 mx-auto">
   <Products :data="products"/>
   <Cart/>
  </div>
</template>