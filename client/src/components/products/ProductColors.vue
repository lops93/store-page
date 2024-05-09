<template>
  <h3 class="text-sm font-medium text-gray-900">Color</h3>
  <RadioGroup v-model="selectedColor" class="mt-4">
    <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
    <div class="flex items-center space-x-3">
      <RadioGroupOption as="template" v-for="color in colors" :key="color.name" :value="color" v-slot="{ active, checked }">
        <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
          <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
          <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" @click="changeColorHandler(color.image)" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
import { changeColor } from '@/composables/useColor';

const colors = [
    { name: 'White', class: 'bg-white', image: 'fashion_shirt1_white.png', selectedClass: 'ring-gray-400' },
    { name: 'Sky Blue', class: 'bg-sky-300', image: 'fashion_shirt3_skyblue.png', selectedClass: 'ring-gray-400' },
    { name: 'Blue', class: 'bg-blue-500', image: 'fashion_shirt4_blue.png', selectedClass: 'ring-gray-400' },
    { name: 'Green', class: 'bg-green-400', image: 'fashion_shirt2_green.png', selectedClass: 'ring-gray-400' },
    { name: 'Red', class: 'bg-red-600', image: 'fashion_shirt6_red.png',  selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', image: 'fashion_shirt5_black.png',  selectedClass: 'ring-gray-900' },
  ]
  
const selectedColor = ref(colors[0])

const changeColorHandler = (color) => {
    changeColor(color);
};

</script>