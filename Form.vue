<script>
export default {
  props: ['form'],
  methods: {
    updateCoverImage(event) {
      this.form.coverImage = URL.createObjectURL(event.target.files[0])
    },
    submitForm() {
      this.$emit('submit-form')
    }
  }
}
</script>

<template>
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
  </template>
  
 
  