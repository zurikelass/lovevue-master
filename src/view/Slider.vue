<script setup>
import FrontLayout from "../layouts/frontLayout.vue"
import { Splide, SplideSlide } from '@splidejs/vue-splide'
</script>

<template>
  <FrontLayout>
    <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
      <SplideSlide>
        <img class="mx-auto" src="../assets/images/image1.jpg" alt="Sample 1" />
      </SplideSlide>
      <SplideSlide>
        <img class="mx-auto " src="../assets/images/image2.jpg" alt="Sample 2" />
      </SplideSlide>
   
      <SplideSlide>
        <img class="mx-auto " src="../assets/images/image4.jpg" alt="Sample 4" />
      </SplideSlide>
      
    </Splide>
  </FrontLayout>
</template>
