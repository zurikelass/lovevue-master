<script>
export default {
  data() {
    return {
      searchTerm: ''
    };
  },
  computed: {
    filteredProducts() {
      return this.$store.state.products.data.filter(product => {
        return product.name.toLowerCase().includes(this.searchTerm.toLowerCase());
      });
    }
  }
};
</script>
<template>
  <div>
    <input type="text" v-model="searchTerm">
    <div v-for="product in filteredProducts">
      {{ product.name }}
    </div>
  </div>
</template>
