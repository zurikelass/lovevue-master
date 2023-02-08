<script>
 export default{
    props:{
    data:  {type:Array}
    }
  
 }

</script>
<template>
    <ul>
        <li v-for="name in data" :key="name.index" >{{ name.name }} - {{ name.price }}</li>
    </ul>
    {{data}}
</template>