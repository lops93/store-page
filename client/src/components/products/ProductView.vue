<template>
  <div class="bg-white md:px-6">
    <div class="pt-6">
      <Breadcrumb />
    </div>
    <div class="px-4 pt-6 mx-auto lg:flex md:px-6 lg:max-w-7xl lg:px-8">
      <ProductImage />
      <div class="mt-6 xl:w-3/5 lg:ml-8 md:ml-6 md:mt-0">
        <div class="grid grid-cols-2 pb-6 border-b border-gray-200">
          <h1 class="text-2xl tracking-tight text-gray-900 sm:text-3xl">{{ product.name }}</h1>
          <div class="grid justify-items-end">
            <h1 class="text-2xl tracking-tight text-gray-900 sm:text-3xl">{{ product.price }}</h1>
          </div>
          <ProductReviews />
        </div>
        <div class="flex items-center justify-between py-4 border-b border-gray-200">
          <ProductColors />
        </div>
        <div class="items-center justify-between py-4 border-b border-gray-200">
          <ProductSizes />
        </div>
        <button type="submit" class="flex items-center justify-center w-full px-8 py-3 mt-10 text-base font-medium text-white bg-main border border-transparent rounded-md hover:bg-main-darker focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2" @click="addToCart" >Add to Cart</button>
        {{ cart }}<ProductDescription />
        <div>
          <div class="py-4 border-t border-b border-gray-200 mt-7">
            <div @click="toggleShowData" data-menu class="flex items-center justify-between cursor-pointer">
              <p class="text-base leading-4 text-gray-800">Shipping and returns</p>
              <button class="rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" role="button" aria-label="show or hide">
                <template v-if="showData">
                  <ChevronUpIcon class="w-5 h-5"/>
                </template>
                <template v-else>
                  <ChevronDownIcon class="w-5 h-5"/>
                </template>
              </button>
            </div>
            <div v-if="showData" class="pt-4 pr-12 mt-4 text-base leading-normal text-gray-600" id="sect">
              You will be responsible for paying for your own shipping costs for returning your item. Shipping costs are nonrefundable
            </div>
          </div>
        </div>
        <div>
          <div class="py-4 border-b border-gray-200">
            <div @click="toggleShowData1" data-menu class="flex items-center justify-between cursor-pointer">
              <p class="text-base leading-4 text-gray-800">Contact us</p>
              <button class="rounded cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-400" role="button" aria-label="show or hide">
                <template v-if="showData1">
                  <ChevronUpIcon class="w-5 h-5"/>
                </template>
                <template v-else>
                  <ChevronDownIcon class="w-5 h-5"/>
                </template>
              </button>
            </div>
            <div v-if="showData1" class="pt-4 pr-12 mt-4 text-base leading-normal text-gray-600" id="sect">If you have any questions on how to return your item to us, contact us.</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import Breadcrumb from '../layout/Breadcrumb.vue';
import ProductImage from './ProductImage.vue';
import ProductReviews from './ProductReviews.vue';
import ProductColors from './ProductColors.vue';
import ProductSizes from './ProductSizes.vue';
import ProductDescription from './ProductDescription.vue';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/vue/20/solid'
import { addToCart } from '@/composables/useCart';

const product = {
  name: 'Fashion Shirt',
  price: '$192',
}

const showData = ref(false);
const showData1 = ref(false);

const toggleShowData = () => {
  showData.value = !showData.value;
};

const toggleShowData1 = () => {
  showData1.value = !showData1.value;
};
</script>

