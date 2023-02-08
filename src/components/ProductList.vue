<script setup>
import ActionButtons from './ActionButtons.vue'
defineProps({
    data:{type:Array, required:true  },
    action:{ type:Boolean}
})
</script>
<template>
    <ul class="list-none md:list-disc space-y-2 ">
        <li v-for="item in data" :key="item.index">
           <span>{{ item.name }} - {{ item.price }}</span> 
           <ActionButtons :tocart="action" :id="item.id"/>
        </li>

         
    </ul>
</template>