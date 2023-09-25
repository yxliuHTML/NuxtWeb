<template>
  <div>
    <swiper
      :height="780"
      class="swiper-slide"
      :modules="[SwiperAutoplay, SwiperEffectCreative, Pagination]"
      :autoplay="{
        delay: 8000,
        disableOnInteraction: true,
      }"
      :direction="'vertical'"
      :pagination="{
        clickable: true,
      }"
    >
      <SwiperSlide
        v-for="(slide, idx) in slides"
        :key="idx"
        :style="`background-color: ${slide.bg}; color: ${slide.color}`"
      >
        {{ idx }}
      </SwiperSlide>

      <!-- useSwiper() within a swiper instance -->
      <SwiperControls />
    </swiper>
  </div>
</template>
<script setup lang="ts">
import { Pagination } from 'swiper/modules';
const slides = ref(
  Array.from({ length: 10 }, () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    // Figure out contrast color for font
    const contrast =
      r * 0.299 + g * 0.587 + b * 0.114 > 186 ? "black" : "white";

    return { bg: `rgb(${r}, ${g}, ${b})`, color: contrast };
  })
);
</script>
<style>
.swiper-slide {
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  height: 780px;
  font-size: 4rem;
  font-weight: bold;
  font-family: "Roboto", sans-serif;
}
.swiper-cards .swiper-slide {
  border-radius: 6px;
  border: 1px solid black;
}
</style>
