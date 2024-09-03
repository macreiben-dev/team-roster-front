import { mount } from '@vue/test-utils'
// import { createTestingPinia } from '@pinia/testing'
import { describe, expect, it, vi, beforeEach } from 'vitest'

import LoginIn from '@/components/LoginIn.vue'
import { redirectoToAuthenticationPage } from '@/repositories/TenantRepository'
import { createCookieRepository } from '@/repositories/cookieRepository'
import { getUserInformation } from '@/repositories/UserLocalRepository'
import { createTeamsRepository } from '@/repositories/TeamsRepository'

import FakeCookieRepository from './FakeCookieRepository'
import { CurrentUser } from '@/services/connectedUser/ConnectedUser'
import { createPinia } from 'pinia'
import { useTeamRoster } from '@/stores/teamStore'
import { FakeTeams } from '../fakes/FakeTeams'
import Team from '@/services/models/Team'
import type { ITeams } from '@/stores/contractTeamStore'

vi.mock('@/repositories/TenantRepository')
const mockedredirectoToAuthenticationPage = vi.mocked(redirectoToAuthenticationPage)

vi.mock('@/repositories/cookieRepository')
const mockedCreateCookieRepository = vi.mocked(createCookieRepository)

vi.mock('@/repositories/UserLocalRepository')
const mockedGetUserInformation = vi.mocked(getUserInformation)

const allFakeTeams = [new Team(1, 'Team 1'), new Team(2, 'Team 2'), new Team(3, 'Team 3')]

const currentFakeTeams = new FakeTeams(allFakeTeams)

vi.mock('@/repositories/TeamsRepository', () => ({
  createTeamsRepository: (): ITeams => currentFakeTeams
}))

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

// const fakeTeams = [new Team(1, 'Team 1'), new Team(2, 'Team 2'), new Team(3, 'Team 3')]

// const withOneTeamFromApi = () => {
//   mockedCreateTeamsRepository.mockReturnValue(new FakeTeams(fakeTeams))
// }

describe('LoginIn.vue', () => {
  beforeEach(() => {
    vi.clearAllMocks()
    vi.resetModules()
    vi.resetAllMocks()
  })

  it('should present title', async () => {
    mockedCreateCookieRepository.mockReturnValue(new FakeCookieRepository(''))

    const wrapper = mountLoginInWithPinia()

    const actual = await wrapper.find('#currentTitle').text()

    expect(actual).toBe('Login in ...')
  })

  it('should call redirect when no cookie token', () => {
    withNoCookieToken()

    const _ = mountLoginInWithPinia()

    expect(mockedredirectoToAuthenticationPage).toHaveBeenCalled()
  })

  it('should not redirect when logged in', () => {
    withCookieToken()
    withValidLoggedInUserInformation()

    const _ = mountLoginInWithPinia()

    expect(mockedredirectoToAuthenticationPage).not.toHaveBeenCalled()
  })

  it('should load teams when user logged in', () => {
    withCookieToken()
    withValidLoggedInUserInformation()
    // withOneTeamFromApi()

    const component = mountLoginInWithPinia()

    const _ = component.find('#currentTitle')

    const store = useTeamRoster()

    const actual = store.allTeams
  })
})
// ======================================================

function mountLoginInWithPinia() {
  return mount(LoginIn, {
    global: {
      plugins: [createPinia()]
    }
  })
}
