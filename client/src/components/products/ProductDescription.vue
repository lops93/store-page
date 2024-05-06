<template>
  <div>
    <p
      class="text-base leading-normal text-gray-600 lg:leading-tight mt-7"
    >
      {{ product.description }}
    </p>
    <p class="text-base leading-4 text-gray-600 mt-7">
      Product Code: 8BN321AF2IF0NYA
    </p>
    <p class="mt-4 text-base leading-4 text-gray-600">
      Length: 13.2 inches
    </p>
    <p class="mt-4 text-base leading-4 text-gray-600">
      Height: 10 inches
    </p>
    <p class="mt-4 text-base leading-4 text-gray-600">
      Depth: 5.1 inches
    </p>
    <p
      class="mt-4 text-base leading-normal text-gray-600 md:w-96"
    >
      Composition: 100% calf leather, inside: 100% lamb leather
    </p>
  </div>
</template>

<script setup>
const product = {
  description:
    'The Basic Tee 6-Pack allows you to fully express your vibrant personality with three grayscale options. Feeling adventurous? Put on a heather gray tee. Want to be a trendsetter? Try our exclusive colorway: "Black". Need to add an extra pop of color to your outfit? Our white tee has you covered.',
}
</script>