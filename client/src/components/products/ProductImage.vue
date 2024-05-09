<template>
  <div class="hidden xl:w-2/6 lg:w-2/5 w-80 md:block">
    <img class="w-full" alt="image of a shirt" :src="getImageUrl(Image)" />
  </div> 
  <div class="md:hidden">
    <img class="w-full" alt="image of a girl posing" :src="getImageUrl(Image)" />
  </div>
</template>

<script setup>
//import ImageTest from '@/assets/images/products/' + Image
import { Image }  from '@/composables/useColor';
function getImageUrl(name) {
  return require(`@/assets/images/products/${name}`);
}
</script>
