<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInformation } from '../services/connectedUser/UserService'

onMounted(async () => {
  const logContext = {
    file: 'App.vue',
    function: 'onMounted'
  }

  console.log('App.vue mounted', logContext)

  const user = await getUserInformation()

  if (!user.isLoggedIn()) {
    const logContextNotLoggedId = { ...logContext, apiLoginUrl: import.meta.env.VITE_API_LOGIN_API }

    console.info('User is not logged in, redirecting ...', logContextNotLoggedId)

    window.location.href = import.meta.env.VITE_API_LOGIN_API
  }
})
</script>

<template>Hello from Login in component</template>
