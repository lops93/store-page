<template>
  <div class="mt-10">
    <div class="flex items-center justify-between">
      <h3 class="text-sm font-medium text-gray-900">Size</h3>
      <a
        href="#"
        class="text-sm font-medium text-main-darker hover:text-main"
        >Size guide</a
      >
    </div>

    <RadioGroup v-model="selectedSize" class="mt-4">
      <RadioGroupLabel class="sr-only">Choose a size</RadioGroupLabel>
      <div class="grid grid-cols-4 gap-4 sm:grid-cols-8">
        <RadioGroupOption
          as="template"
          v-for="size in sizes"
          :key="size.name"
          :value="size"
          :disabled="!size.inStock"
          v-slot="{ active, checked }"
        >
          <div
            :class="[
              size.inStock
                ? 'cursor-pointer bg-white text-gray-900 shadow-sm'
                : 'cursor-not-allowed bg-gray-50 text-gray-200',
              active ? 'ring-2 ring-indigo-500' : '',
              'group relative flex items-center justify-center rounded-md border py-3 px-4 text-sm font-medium uppercase hover:bg-gray-50 focus:outline-none sm:flex-1 sm:py-6',
            ]"
          >
            <RadioGroupLabel as="span">{{ size.name }}</RadioGroupLabel>
            <span
              v-if="size.inStock"
              :class="[
                active ? 'border' : 'border-2',
                checked ? 'border-indigo-500' : 'border-transparent',
                'pointer-events-none absolute -inset-px rounded-md',
              ]"
              aria-hidden="true"
            />
            <span
              v-else
              aria-hidden="true"
              class="absolute border-2 border-gray-200 rounded-md pointer-events-none -inset-px"
            >
              <svg
                class="absolute inset-0 w-full h-full text-gray-200 stroke-2"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                stroke="currentColor"
              >
                <line
                  x1="0"
                  y1="100"
                  x2="100"
                  y2="0"
                  vector-effect="non-scaling-stroke"
                />
              </svg>
            </span>
          </div>
        </RadioGroupOption>
      </div>
    </RadioGroup>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { RadioGroup, RadioGroupLabel, RadioGroupOption } from "@headlessui/vue";

const sizes = [
  { name: "XXS", inStock: false },
  { name: "XS", inStock: true },
  { name: "S", inStock: true },
  { name: "M", inStock: true },
  { name: "L", inStock: true },
  { name: "XL", inStock: true },
  { name: "2XL", inStock: true },
  { name: "3XL", inStock: true },
];

const selectedSize = ref(sizes[2]);
</script>