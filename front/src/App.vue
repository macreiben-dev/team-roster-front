<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <header>
    <div class="flex ml-4 mb-4 mt-4">
      <div class="w-1/3"><RouterLink to="/">Home</RouterLink></div>
      <div class="w-1/3"><RouterLink to="/about">About</RouterLink></div>
      <div class="w-1/3">&nbsp;</div>
    </div>
  </header>

  <RouterView />
</template>

<style scoped>
body {
  background-color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
