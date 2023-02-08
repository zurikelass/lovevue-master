<script>
export default {
  props: ['card'],
  methods: {
    addToWatchlist(card) {
      this.$emit('add-to-watchlist', card)
    }
  }
}
</script>

<template>
    <div class="card">
      <img :src="card.coverImage"/>
      <h3>{{ card.name }}</h3>
      <p>{{ card.description }}</p>
      <a :href="card.url">{{ card.url }}</a>
      <br/>
      <button class="watchbtn" @click="addToWatchlist(card)">Add to Watchlist</button>
    </div>
  </template>
  
 