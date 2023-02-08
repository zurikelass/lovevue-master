<script>
import ListTitle from './ListTitle.vue';
const props = {
    data: { type: Array, required: true }
};
</script>

<template>
  <div class="w-full">
    <ListTitle title="WishList"/>
    <ul>
        <li v-for="item in data" :key="item.index">{{ item.name }} - {{ item.price }}</li>
    </ul>
  </div>
</template>
