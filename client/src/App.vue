<template>
  <Navbar />
  <ProductView />
</template>

<script>
import Navbar from './components/layout/Navbar.vue'
import ProductView from './components/products/ProductView.vue'
export default {
  name: 'App',
  components: {
    Navbar,
    ProductView 
  }
}
</script>