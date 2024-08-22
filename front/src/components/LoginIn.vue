<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInformation } from '../repositories/UserLocalRepository'
import { useConnectedUserStore } from '@/stores/connectedUserStore'
import { createCookieRepository } from '@/repositories/cookieRepository'
import router from '@/router'

onMounted(async () => {
  const logContext = {
    file: 'App.vue',
    function: 'onMounted'
  }

  console.log('Loginin.vue mounted', logContext)

  const cookieRepo = createCookieRepository()

  const cookie = cookieRepo.get('app.at')

  if (!cookie) {
    const logContextNotLoggedId = { ...logContext, apiLoginUrl: import.meta.env.VITE_API_LOGIN_API }

    console.info('User is not logged in, redirecting ...', logContextNotLoggedId)

    window.location.href = import.meta.env.VITE_API_LOGIN_API
    return
  }

  const store = useConnectedUserStore() as ReturnType<typeof useConnectedUserStore>

  console.info('Authentication token cookie found.', {
    ...logContext,
    currentUsername: store.currentUserName
  })

  const user = await getUserInformation(logContext)

  store.setConnectedUser(user)

  if (store.isLoggedIn === false) {
    console.info('User not logged in, redirecting to loginin spa page', logContext)
    router.push('/loginin')
  }

  router.push('/')
})
</script>

<template>
  <h1>Login in ...</h1>
</template>
