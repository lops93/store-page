<template>
  <div class="hidden xl:w-2/6 lg:w-2/5 w-80 md:block">
    <img class="w-full" alt="image of a girl posing" :src="Image" />
  </div> 
  <div class="md:hidden">
    <img class="w-full" alt="image of a girl posing" :src="Image" />
  </div>
</template>

<script setup>
import Image from '@/assets/images/products/fashion_shirt3_skyblue.png'

</script>
