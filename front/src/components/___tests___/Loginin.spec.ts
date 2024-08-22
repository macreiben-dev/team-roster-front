import { mount } from '@vue/test-utils'
// import { createTestingPinia } from '@pinia/testing'
import { describe, expect, it, vi } from 'vitest'

import { beforeEach } from 'node:test'
import LoginIn from '@/components/LoginIn.vue'
import { redirectoToAuthenticationPage } from '@/repositories/TenantRepository'
import { createCookieRepository } from '@/repositories/cookieRepository'
import { getUserInformation } from '@/repositories/UserLocalRepository'

import FakeCookieRepository from './IFakeCookieRepository'
import { CurrentUser } from '@/services/connectedUser/ConnectedUser'
import { createPinia } from 'pinia'

vi.mock('@/repositories/TenantRepository')
const mockedredirectoToAuthenticationPage = vi.mocked(redirectoToAuthenticationPage)

vi.mock('@/repositories/cookieRepository')
const mockedCreateCookieRepository = vi.mocked(createCookieRepository)

vi.mock('@/repositories/UserLocalRepository')
const mockedGetUserInformation = vi.mocked(getUserInformation)

// ----------------------------------------------------------------------

const withValidLoggedInUserInformation = () => {
  const currentUser = new CurrentUser({ email: 'john.test@mail.test', userName: 'John Test' })

  mockedGetUserInformation.mockResolvedValue(currentUser)
}

const withCookieToken = () => {
  mockedCreateCookieRepository.mockReturnValue(new FakeCookieRepository('some_token_value'))
}

const withNoCookieToken = () => {
  mockedCreateCookieRepository.mockReturnValue(new FakeCookieRepository(null))
}

describe('LoginIn.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
    vi.resetAllMocks()
  })

  it('should present title', async () => {
    mockedCreateCookieRepository.mockReturnValue(new FakeCookieRepository(''))

    const wrapper = createWrappedComponent2()

    const actual = await wrapper.find('#currentTitle').text()

    expect(actual).toBe('Login in ...')
  })

  it('should call redirect when no cookie token', () => {
    mockedredirectoToAuthenticationPage.mockClear()

    withNoCookieToken()

    const _ = createWrappedComponent2()

    expect(mockedredirectoToAuthenticationPage).toHaveBeenCalled()
  })

  it('should not redirect when logged in when logged in', () => {
    mockedredirectoToAuthenticationPage.mockClear()

    withCookieToken()
    withValidLoggedInUserInformation()

    const _ = createWrappedComponent2()

    expect(mockedredirectoToAuthenticationPage).not.toHaveBeenCalled()
  })
})
// ======================================================

function createWrappedComponent2() {
  // const { default: LoginIn } = await import('@/components/LoginIn.vue')
  return mount(LoginIn, {
    global: {
      plugins: [
        createPinia()
        // createTestingPinia({
        //   createSpy: vi.fn
        // })
      ]
    }
  })
}
