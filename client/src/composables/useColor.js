import { ref } from 'vue';

export const Image = ref('fashion_shirt3_skyblue.png');

export const changeColor = (color) => {
  Image.value = color
};