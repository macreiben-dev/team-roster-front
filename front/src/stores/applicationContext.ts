import { ref, computed } from 'vue'
import { defineStore } from 'pinia'
import { CurrentUser, NotLoggedInUserInstance } from '@/services/connectedUser/ConnectedUser'

export const useConnectedUserStore = defineStore('connectedUser', () => {
  const connectedUser = ref(NotLoggedInUserInstance)
  const isLoggedIn = computed(() => connectedUser.value.isLoggedIn)
  function setConnectedUser(user: CurrentUser) {
    connectedUser.value = user
  }

  return { connectedUser, isLoggedIn, setConnected: setConnectedUser }
})
