

<!-- src/components/Home.vue -->
<template>
  <div>
    <h1>Counter</h1>
    <p>Count: {{ counterStore.count }}</p>
    <p>Double Count: {{ counterStore.doubleCount }}</p>
    <button @click="counterStore.increment">Increment</button>
  </div>
</template>

<script setup>
import { useCounterStore } from '@/stores/counter.js'

const counterStore = useCounterStore()
</script>

<style scoped>
/* Add any styles you need for your component */
</style>
