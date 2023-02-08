
<script setup>
import Cart from './components/Cart.vue'
import Products from './components/Products.vue'
import {useStore } from 'vuex'

const store = useStore()


</script>

<template>
  <div class="container flex flex-row mt-4 mx-auto">
   <Products :data="products"/>
   <Cart :data="cart"/>
  </div>
</template>