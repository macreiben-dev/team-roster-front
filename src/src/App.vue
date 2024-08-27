<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
import { useConnectedUserStore } from './stores/connectedUserStore'

onMounted(async () => {
  const store = useConnectedUserStore()

  const logContext = {
    file: 'App.vue',
    function: 'onMounted'
  }

  if (store.isLoggedIn === false) {
    console.info('User not logged in, redirecting to loginin spa page', logContext)
    router.push('/loginin')
  }
})
</script>

<template>
  <header>
    <div class="flex ml-4 mb-4 mt-4">
      <div class="w-1/3"><RouterLink to="/">Home</RouterLink></div>
      <div class="w-1/3"><RouterLink to="/about">About</RouterLink></div>
      <div class="w-1/3"><RouterLink to="/profile">Profile</RouterLink></div>
    </div>
  </header>
  <div class="flex ml-4 mb-4 mt-4">
    <RouterView />
  </div>
</template>

<style scoped>
body {
  background-color: white;
  font-family: Arial, sans-serif;
  margin: 0;
  padding: 0;
}
</style>
