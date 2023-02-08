<!-- <script>
  export default {
    data() {
      return {
        form: {
          name: '',
          description: '',
          url: '',
          coverImage: null
        },
        cards: [],


        watchlist: [],


      }
    },
    methods: {
      updateCoverImage(event) {
        this.form.coverImage = URL.createObjectURL(event.target.files[0])
      },
      submitForm() {
        let newCard = {
          id: Date.now(),
          name: this.form.name,
          description: this.form.description,
          url: this.form.url,
          coverImage: this.form.coverImage
        }
        this.cards.push(newCard)
        this.form.name = ''
        this.form.description = ''
        this.form.url = ''
        this.form.coverImage = null
      },


      addToWatchlist(card) {
    this.watchlist.push(card)


  },


  removeFromWatchlist(item) {
    let index = this.watchlist.indexOf(item)
    this.watchlist.splice(index, 1)
  }
    }
  }
  </script>
  
 
  


<template>
    <div>
      <form @submit.prevent="submitForm">
        <label>Name:</label>
        <input type="text" v-model="form.name" />
  
        <label>Description:</label>
        <textarea v-model="form.description"></textarea>
  
        <label>URL:</label>
        <input type="text" v-model="form.url" />
  
        <label>Cover Image:</label>
        <input type="file" @change="updateCoverImage"/>
  
        <button type="submit">Submit</button>
      </form>
  
      <div v-for="card in cards" :key="card.id">
        <div class="card">
          <img :src="card.coverImage"/>
          <h3>{{ card.name }}</h3>
          <p>{{ card.description }}</p>
          <a :href="card.url">{{ card.url }}</a>
           <br/>
          <button class="watchbtn" @click="addToWatchlist(card)">Add to Watchlist</button>
        </div>
      </div>
    </div>
  
    <div v-for="item in watchlist" :key="item.id" class="w-full">
    <div class="watchlist-item">
      <img :src="item.coverImage"/>
      <h3>{{ item.name }}</h3>
      <p>{{ item.description }}</p>
      <a :href="item.url">{{ item.url }}</a>
          
      <button @click="removeFromWatchlist(item)">Remove from Watchlist </button>
      
    </div>
  </div>
   

  </template>
  
  <style>
  .card {
    display: inline-block;
    width: 300px;
    height: 330px;
    margin: 16px;
    text-align: center;
    overflow: hidden;
    background-color: aqua;
    border-radius: 10px;
  }

  .card img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    box-shadow: 50px;
  }


  .watchlist-item {
    display: inline-block;
    width: 300px;
    height: 400px;
    margin: 16px;
    text-align: center;
    overflow: hidden;
  }

  .watchlist-item img {
    width: 100%;
    height: 200px;
    object-fit: cover;
    box-shadow: 50px;
  }

  .watchbtn{
    background-color: burlywood;
    border-radius: 10px;
}
  
</style> -->



<script>
import Form from './Form.vue'
import Card from './Card.vue'
import WatchlistItem from './WatchlistItem.vue'

export default {
  components: {
    Form,
    Card,
    WatchlistItem
  },
  data() {
    return {
      form: {
        name: '',
        description: '',
        url: '',
        coverImage: null
      },
      cards: [],
      watchlist: []
    }
  },
  methods: {
    submitForm(newCard) {
      this.cards.push(newCard)
    },
    addToWatchlist(card) {
      this.watchlist.push(card)
    },
    removeFromWatchlist(item) {
      let index = this.watchlist.indexOf(item)
      this.watchlist.splice(index, 1)
    }
  }
}
</script>

<template>
  <div>
    <Form :form="form" @submit-form="submitForm"/>
  
    <div v-for="card in cards" :key="card.id">
      <Card :card="card" @add-to-watchlist="addToWatchlist"/>
    </div>
  </div>
  
  <div v-for="item in watchlist" :key="item.id" class="w-full">
    <WatchlistItem :item="item" @remove-from-watchlist="removeFromWatchlist"/>
  </div>
</template>
