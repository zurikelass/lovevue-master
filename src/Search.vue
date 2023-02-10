<script setup>
import { ref, computed } from "vue";
import { useStore } from "vuex";

const searchTerm = ref("");
const store = useStore();
const filteredProducts = computed(() => {
  return store.getters.getProducts.filter((product) =>
    product.name.toLowerCase().includes(searchTerm.value.toLowerCase())
  );
});

</script>
<template>
  <div>
    <input type="text" v-model="searchTerm" />
    <div v-for="product in filteredProducts">
      {{ product.name }}
    </div>
  </div>
</template>


