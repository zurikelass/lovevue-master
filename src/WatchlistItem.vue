<script>
export default {
  props: ['item'],
  methods: {
    removeFromWatchlist(item) {
      this.$emit('remove-from-watchlist', item)
    }
  }
}
</script>

<template>
    <div class="watchlist-item">
      <img :src="item.coverImage"/>
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <a :href="item.url">{{ item.url }}</a>
  
      <button @click="removeFromWatchlist(item)">Remove from Watchlist </button>
    </div>
  </template>
  
 