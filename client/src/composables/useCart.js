import { ref } from 'vue';

export const cart = ref(0);

export const addToCart = () => {
    cart.value++;
  };