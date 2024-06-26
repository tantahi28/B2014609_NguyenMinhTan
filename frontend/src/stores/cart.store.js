import { defineStore } from 'pinia'

export const useCartStore = defineStore('cart', {
  state: () => {
    return {
      details: [],
    }
  },
  actions: {
    reset() {
      this.details = [];
    }
  },
});
