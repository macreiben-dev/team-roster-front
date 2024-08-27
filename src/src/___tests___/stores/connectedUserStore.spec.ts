import { describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { useConnectedUserStore } from '@/stores/connectedUserStore'
import { CurrentUser } from '@/services/connectedUser/ConnectedUser'

function createStore() {
  setActivePinia(createPinia())
  const store = useConnectedUserStore()
  return store
}

describe('connectedUserStore', () => {
  describe('on initialization', () => {
    it('should not be loggedin', () => {
      const store = createStore()
      expect(store.isLoggedIn).toBe(false)
    })

    it('should have a default username', () => {
      const store = createStore()
      expect(store.currentUserName).toBe('NotLoggedIn')
    })
  })
  describe('on setConnected user', () => {
    it('should set the user as connected', () => {
      const store = createStore()

      store.setConnectedUser(
        new CurrentUser({ userName: 'test', email: 'john.test@unittest.local' })
      )

      expect(store.isLoggedIn).toBe(true)
      expect(store.currentUserName).toBe('test')
    })
  })
})
