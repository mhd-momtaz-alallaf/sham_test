// src/stores/counter.js
import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const count = ref(0)
  const doubleCount = computed(() => count.value * 2)
  
  function increment() {
    count.value++
  }

  function zero() {
    count.value = 0;
  }

  return { count, doubleCount, increment, zero }
}, {
  persist: {
    enabled: true,
    strategies: [
      {
        key: 'counter',
        storage: localStorage,
      },
    ],
  },
})
