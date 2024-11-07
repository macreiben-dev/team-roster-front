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

<script>
export default {
  data() {
    return {
      menuVisible: false
    }
  },
  methods: {
    toggleMenu() {
      this.menuVisible = !this.menuVisible
    }
  },
  mounted() {
    if (this.$store.state.isLoggedIn === false) {
      console.info('User not logged in, redirecting to login page')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
.burger-menu {
  background: none;
  border: none;
  outline: none;
}
</style>
