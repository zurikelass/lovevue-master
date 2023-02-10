<script setup>
import { useStore } from 'vuex';
 const store = useStore()
 const menu = store.getters.navigationMenu
</script>
<template>
     <div class="flex flex-row space-x-4">
      <RouterLink v-for="(item, index) in menu" :key="index" :to="{ name: item.routeName }">
        {{ item.title }}
      </RouterLink>
    </div>
</template>