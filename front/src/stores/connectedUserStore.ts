import { defineStore } from 'pinia'
import { CurrentUser, NotLoggedInUserInstance } from '@/services/connectedUser/ConnectedUser'

export const useConnectedUserStore = defineStore('connectedUser', {
  state: () => ({
    connectedUser: NotLoggedInUserInstance as CurrentUser
  }),
  getters: {
    isLoggedIn: (state) => state.connectedUser.isLoggedIn(),
    currentUserName: (state) => state.connectedUser.getUserName()
  },
  actions: {
    setConnectedUser(user: CurrentUser) {
      this.connectedUser = user
    }
  }
})
