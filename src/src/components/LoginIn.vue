<script setup lang="ts">
import { onMounted } from 'vue'

import { useConnectedUserStore } from '@/stores/connectedUserStore'
import { useTeamRoster } from '@/stores/teamStore'

import { getUserInformation } from '@/repositories/UserLocalRepository'
import { createCookieRepository } from '@/repositories/cookieRepository'
import { redirectoToAuthenticationPage } from '@/repositories/TenantRepository'

import router from '@/router'
import type { CurrentUser } from '@/services/connectedUser/ConnectedUser'
import { createTeamsRepository } from '@/repositories/TeamsRepository'

const logContext = {
  file: 'App.vue',
  function: 'onMounted'
}

onMounted(async () => {
  const connectedUserStore = useConnectedUserStore() as ReturnType<typeof useConnectedUserStore>

  console.log('Loginin.vue mounted', snapShotConnectedUserStore)

  const allCookies = createCookieRepository()
  const cookie = allCookies.getToken()

  if (!cookie) {
    redirectoToAuthenticationPage()
    return
  }

  console.info('Authentication token cookie found.', snapShotConnectedUserStore)

  const user = await getUserInformation(logContext)

  console.info('User information retrieved.', snapshotUserInfoRetrieved(user))

  connectedUserStore.setConnectedUser(user)

  if (connectedUserStore.isLoggedIn === false) {
    console.info('User not logged in, redirecting to loginin spa page', logContext)
    allCookies.clearToken()
    router.push('/loginin')
  }

  console.info('user logged in.', snapShotConnectedUserStore(connectedUserStore))

  /**
   * TODO this is here that we'll load the teams.
   */

  const teamRosterStore = useTeamRoster()

  const teamRepository = createTeamsRepository()

  teamRosterStore.initialize(teamRepository)

  router.push('/')
})

const snapShotConnectedUserStore = (
  connectedUserStore: ReturnType<typeof useConnectedUserStore>
) => {
  return {
    ...logContext,
    userName: connectedUserStore.currentUserName,
    isLoggedin: connectedUserStore.isLoggedIn
  }
}

const snapshotUserInfoRetrieved = (user: CurrentUser) => {
  return {
    ...logContext,
    userName: user.getUserName(),
    email: user.getEmail(),
    isLoggedin: user.isLoggedIn()
  }
}
</script>

<template>
  <h1 id="currentTitle">Login in ...</h1>
</template>
