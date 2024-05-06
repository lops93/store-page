<template>
  <nav aria-label="Breadcrumb">
      <ol role="list" class="flex items-center max-w-2xl px-4 mx-auto space-x-2 sm:px-6 lg:max-w-7xl lg:px-8">
        <li v-for="breadcrumb in product.breadcrumbs" :key="breadcrumb.id">
          <div class="flex items-center">
            <a :href="breadcrumb.href" class="mr-2 text-sm font-medium text-gray-900">{{ breadcrumb.name }}</a>
            <svg width="16" height="20" viewBox="0 0 16 20" fill="currentColor" aria-hidden="true" class="w-4 h-5 text-gray-300">
              <path d="M5.697 4.34L8.98 16.532h1.327L7.025 4.341H5.697z" />
            </svg>
          </div>
        </li>
        <li class="text-sm">
          <a :href="product.link" aria-current="page" class="font-medium text-gray-500 hover:text-gray-600">{{ product.name }}</a>
        </li>
      </ol>
    </nav>
</template>

<script setup>
const product = {
  name: 'Basic Tee 6-Pack',
  link: '#',
  breadcrumbs: [
    { id: 1, name: 'Men', href: '#' },
    { id: 2, name: 'Clothing', href: '#' },
  ],
};
</script>
