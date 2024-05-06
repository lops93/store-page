<template>
  <h3 class="text-sm font-medium text-gray-900">Color</h3>
  <RadioGroup v-model="selectedColor" class="mt-4">
    <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
    <div class="flex items-center space-x-3">
      <RadioGroupOption as="template" v-for="color in colors" :key="color.name" :value="color" v-slot="{ active, checked }">
        <div :class="[color.selectedClass, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
          <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
          <span aria-hidden="true" :class="[color.class, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
        </div>
      </RadioGroupOption>
    </div>
  </RadioGroup>
</template>

<script setup>
import { ref } from 'vue';
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from '@headlessui/vue'
const colors = [
    { name: 'White', class: 'bg-white', selectedClass: 'ring-gray-400' },
    { name: 'Sky Blue', class: 'bg-sky-300', selectedClass: 'ring-gray-400' },
    { name: 'Blue', class: 'bg-blue-500', selectedClass: 'ring-gray-400' },
    { name: 'Green', class: 'bg-green-400', selectedClass: 'ring-gray-400' },
    { name: 'Red', class: 'bg-red-600', selectedClass: 'ring-gray-400' },
    { name: 'Black', class: 'bg-gray-900', selectedClass: 'ring-gray-900' },
  ]
  
const selectedColor = ref(colors[0])
</script>