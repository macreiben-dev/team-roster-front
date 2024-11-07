<template>
  <div class="flex">
    <div class="flex-none mt-1 mr-1 p-1">
      <button @click="toggleMenu" class="burger-menu text-2xl self-start">☰</button>
      <div v-if="menuVisible" class="menu flex flex-col">
        <div class="menu-item"><RouterLink to="/">Home</RouterLink></div>
        <div class="menu-item"><RouterLink to="/about">About</RouterLink></div>
        <div class="menu-item"><RouterLink to="/profile">Profile</RouterLink></div>
      </div>
    </div>
    <div class="main-view flex-1">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { RouterLink, RouterView } from 'vue-router'
import router from './router'
import { ref } from 'vue'
import { useConnectedUserStore } from './stores/connectedUserStore'

const menuVisible = ref(false)

function toggleMenu() {
  menuVisible.value = !menuVisible.value
}

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

<style scoped>
.burger-menu {
  background: none;
  border: none;
  outline: none;
}
</style>
