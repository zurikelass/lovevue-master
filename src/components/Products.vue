<script>
import ListTitle from './ListTitle.vue';
 export default{
    props:{
    data:  {type:Array}
    },
  components:{
    ListTitle,
  }
 }

</script>
<template>
    <div class="w-full">
        <ListTitle title="WatchList"/>
        <ul>
            <li v-for="name in data" :key="name.index">{{ name.name }} - {{ name.price }}</li>
        </ul>

    </div>

   
</template>