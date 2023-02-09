<script>
import ActionButtons from './ActionButtons.vue'

export default {
  components: {
    ActionButtons
  },
  props: {
    data: { type: Array, required: true },
    action: { type: Boolean }
  }
}
</script>
<template>
    <ul class="list-none md:list-disc space-y-2 ">
      <li v-for="item in data" :key="item.id">
        <span>{{ item.name }} - {{ item.price }}</span> 
        <ActionButtons :tocart="action" :id="item.id"/>
      </li>
    </ul>
  </template>