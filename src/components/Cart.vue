<script setup>
import ListTitle from './ListTitle.vue';
import ProductList from './ProductList.vue';
import { useStore } from 'vuex';

const store = useStore()
const title=store.getters.getCartTitle
const cartData= store.getters.getCart
const action = false

</script>

<template>
  <div class="w-full">
    <ListTitle :title="title"/>
    <ProductList :data="cartData" :action="action"/>
  </div>
</template>
