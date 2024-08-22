<script setup lang="ts">
import { onMounted } from 'vue'
import { getUserInformation } from '../repositories/UserLocalRepository'
import { useConnectedUserStore } from '@/stores/connectedUserStore'
import { createCookieRepository } from '@/repositories/cookieRepository'
import { redirectoToAuthenticationPage } from '@/repositories/TenantRepository'
import router from '@/router'

onMounted(async () => {
  const store = useConnectedUserStore() as ReturnType<typeof useConnectedUserStore>

  const logContext = {
    file: 'App.vue',
    function: 'onMounted'
  }

  console.log('Loginin.vue mounted', {
    ...logContext,
    userName: store.currentUserName,
    isLoggedin: store.isLoggedIn
  })

  const cookie = createCookieRepository().getToken()

  if (!cookie) {
    redirectoToAuthenticationPage()

    return
  }

  console.info('Authentication token cookie found.', {
    ...logContext,
    userName: store.currentUserName,
    isLoggedin: store.isLoggedIn
  })

  const user = await getUserInformation(logContext)

  store.setConnectedUser(user)

  if (store.isLoggedIn === false) {
    console.info('User not logged in, redirecting to loginin spa page', logContext)
    router.push('/loginin')
  }

  console.info('user logged in.', {
    ...logContext,
    userName: store.currentUserName,
    isLoggedin: store.isLoggedIn
  })

  router.push('/')
})
</script>

<template>
  <h1>Login in ...</h1>
</template>
