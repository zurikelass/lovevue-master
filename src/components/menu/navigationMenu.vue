<script setup>
import { useStore } from 'vuex';
import Search from '../../Search.vue';
 const store = useStore()
 const menu = store.getters.navigationMenu
</script>
<template>
      <nav class="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded dark:bg-gray-900;"  style="background-color: aqua;
    border-radius: 15px;">
      <div class="container flex flex-wrap items-center justify-between mx-auto ">
      <a href="#" class="flex items-center">
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Vue.js_Logo_2.svg/1200px-Vue.js_Logo_2.svg.png" class="h-6 mr-3 sm:h-9" alt="Flowbite Logo" />
          <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Love Vue</span>
      </a>
      <Search />
        <div class="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-search">
         
          <ul class="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
          
     <RouterLink class="block py-2 pl-3 pr-4 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" v-for="(item, index) in menu" :key="index" :to="{ name: item.routeName }">
        {{ item.title }}
      </RouterLink> 
          </ul>
        </div>
      </div>
    </nav>
    
</template>