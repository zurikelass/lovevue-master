<script setup>
import ListTitle from './ListTitle.vue'
import ProductList from './ProductList.vue';
import { useStore } from 'vuex'

const store =useStore()

const title=store.state.products.title
const productsdata= store.state.products.data
const action = true

</script>
<template>
    <div class="w-full">
        <ListTitle :title="title"/>
        <ProductList :data="productsdata" :action="action"/>
    </div>

</template>