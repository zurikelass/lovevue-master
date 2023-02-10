<script setup>
import navigationMenu from './components/menu/navigationMenu.vue'
import Search from './Search.vue'
import mainLayout from './layouts/mainLayout.vue'
</script>

<template>
  <mainLayout>
    <div class="container flex flex-col mt-4 mx-auto space-y-4">
      <navigationMenu />
      <div>
        <RouterView />
      </div>
      <form>
        <Search />
      </form>
    </div>
  </mainLayout>
</template>
