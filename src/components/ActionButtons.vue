<script setup>

import { useStore } from 'vuex';

const props= defineProps({
    tocart:  {type:Boolean, required: false, default:true},
      id:  { type: Number, required:true }
})

const store = useStore()
function addToWishList(){
 store.commit("addToWishList", props.id)
}
function removeFromWishList() {
store.commit("removeFromWishList", props.id)
}

</script>

<template>
    <button v-if="tocart"  @click.prevent="addToWishList" class="ml-5 bg-blue-500 hover:bg-blue-400 text-white font-bold py-2 px-4 border-b-4 border-blue-700 hover:border-blue-500 rounded ">Add To WatchList</button>
    <button  v-else  @click.prevent="removeFromWishList"   class=" ml-5 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">Remove From WishList</button>
</template>