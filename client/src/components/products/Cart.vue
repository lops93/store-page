<template>
  <div class="flex items-center group text-white hover:text-hover">
    <button
      type="button"
      class="relative p-1 rounded-full focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
    >
      <span class="absolute -inset-1.5" />
      <span class="sr-only">items in cart</span>
      <ShoppingCartIcon class="w-6 h-6" aria-hidden="true" />
    </button>
    <span
      class="ml-1 mr-5 text-sm font-medium group-hover:text-white"
      >{{ cart }}</span>
  </div>
</template>

<script setup>
import { ShoppingCartIcon } from '@heroicons/vue/24/outline'
import { cart } from '@/composables/useCart';
</script>