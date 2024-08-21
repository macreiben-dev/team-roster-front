<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInformation } from '../services/connectedUser/UserService'
import { useConnectedUserStore } from '@/stores/connectedUserStore'

onMounted(async () => {
  const logContext = {
    file: 'App.vue',
    function: 'onMounted'
  }

  console.log('Loginin.vue mounted', logContext)

  const user = await getUserInformation()

  console.log(`is user logged in ? ${user.isLoggedIn()} `, logContext)

  if (!user.isLoggedIn()) {
    const logContextNotLoggedId = { ...logContext, apiLoginUrl: import.meta.env.VITE_API_LOGIN_API }

    console.info('User is not logged in, redirecting ...', logContextNotLoggedId)

    window.location.href = import.meta.env.VITE_API_LOGIN_API
    return
  }
  const store = useConnectedUserStore()

  store.setConnectedUser(user)
})
</script>

<template>Hello from Login in component</template>
