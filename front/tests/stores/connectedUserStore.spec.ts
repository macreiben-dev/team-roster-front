import { describe, expect, it } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'

import { useConnectedUserStore } from '../../src/stores/connectedUserStore'

function createStore() {
  setActivePinia(createPinia())
  const store = useConnectedUserStore()
  return store
}

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
