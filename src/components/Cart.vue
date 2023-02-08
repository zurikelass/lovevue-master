<script setup>
import ListTitle from './ListTitle.vue';
import ProductList from './ProductList.vue';
import { useStore } from 'vuex';

const store =useStore()
const title = store.state.cart.title
const cartdata = store.state.cart.data
const action = store.state.cart.action

</script>

<template>
  <div class="w-full">
    <ListTitle :title="title"/>
    <ProductList :data="cartdata" :action="action"/>
  </div>
</template>
