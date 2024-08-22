import { mount } from '@vue/test-utils'
import { createTestingPinia } from '@pinia/testing'
import { describe, expect, it, vi } from 'vitest'

import { redirectoToAuthenticationPage } from '@/repositories/TenantRepository'
import { CurrentUser } from '@/services/connectedUser/ConnectedUser'
import { beforeEach } from 'node:test'

describe('LoginIn.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
  })
  it('should present title', async () => {
    vi.doMock('@/repositories/TenantRepository', () => ({
      redirectoToAuthenticationPage: vi.fn()
    }))

    vi.doMock('@/repositories/cookieRepository', () => ({
      createCookieRepository: () => ({
        getToken: vi.fn().mockReturnValue(null)
      })
    }))

    const wrapper = await createWrappedComponent()

    const actual = wrapper.find('#currentTitle').text()

    expect(actual).toBe('Login in ...')
  })

  describe('when not logged in', async () => {
    it('should call redirect if not logged in', async () => {
      const mockedRedirectToAuthentication = vi.fn()

      vi.doMock('@/repositories/TenantRepository', () => ({
        redirectoToAuthenticationPage: mockedRedirectToAuthentication
      }))

      vi.doMock('@/repositories/cookieRepository', () => ({
        createCookieRepository: () => ({
          getToken: vi.fn().mockReturnValue(null)
        })
      }))

      const _ = await createWrappedComponent()

      expect(mockedRedirectToAuthentication).toHaveBeenCalled()
    })
    // -----------------------------------------------------------
  })
  // ======================================================
  describe('when logged in', async () => {
    it('should not redirect', async () => {
      const mockedRedirectToAuthentication = vi.fn()

      vi.doMock('@/repositories/TenantRepository', () => ({
        redirectoToAuthenticationPage: mockedRedirectToAuthentication
      }))

      vi.doMock('@/repositories/cookieRepository', () => ({
        createCookieRepository: () => ({
          getToken: vi.fn().mockReturnValue('some_token')
        })
      }))

      vi.doMock('@/repositories/UserLocalRepository', () => ({
        getUserInformation: vi.fn().mockReturnValue(
          new CurrentUser({
            userName: 'Testing Username',
            email: 'testing.username@unittest.local'
          })
        )
      }))

      const _ = await createWrappedComponent()

      expect(mockedRedirectToAuthentication).not.toHaveBeenCalled()
    })
    // -----------------------------------------------------------
  })
  // ======================================================
})

async function createWrappedComponent() {
  const { default: LoginIn } = await import('@/components/LoginIn.vue')
  return mount(LoginIn, {
    global: {
      plugins: [
        createTestingPinia({
          createSpy: vi.fn
        })
      ]
    }
  })
}
