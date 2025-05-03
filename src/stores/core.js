import { defineStore } from "pinia";
import { ref } from "vue";

export const useCoreStore = defineStore('core', () => {
  const drawer = ref(false)

  return {
    drawer,
  }
})