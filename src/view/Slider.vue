<script setup>
import FrontLayout from "../layouts/frontLayout.vue"
import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>
<template>
  <FrontLayout>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img src="../assets/images/image1.jpg" alt="Sample 1" />
      </SplideSlide>
      <SplideSlide>
        <img src="../assets/images/image2.jpg" alt="Sample 2" />
      </SplideSlide>
    </Splide>
  </FrontLayout>
</template>
