<script setup>
import navigationMenu from "./components/menu/navigationMenu.vue";
import mainLayout from "./layouts/mainLayout.vue";
</script>

<template>
  <mainLayout>
    <div class="container flex flex-col mt-4 mx-auto space-y-4">
      <navigationMenu />
      <div>
        <RouterView />
      </div>
    </div>
  </mainLayout>
</template>
