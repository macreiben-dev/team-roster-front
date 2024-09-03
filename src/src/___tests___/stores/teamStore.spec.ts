import { createPinia, setActivePinia } from 'pinia'
import { describe, test, expect, vi } from 'vitest'
import { useTeamRoster } from '@/stores/teamStore'
import Team from '@/services/models/Team'
import { FakeTeams } from '../fakes/FakeTeams'
import { createTeamsRepository } from '@/repositories/TeamsRepository'
// import type { ITeams } from '@/stores/contractTeamStore'

// vi.mock('@/repositories/TeamsRepository')
// const mockedCreateTeamsRepository = vi.mocked(createTeamsRepository)

const allFakeTeams = [new Team(1, 'Team 1'), new Team(2, 'Team 2'), new Team(3, 'Team 3')]

const currentFakeTeams = new FakeTeams(allFakeTeams)

vi.mock('@/repositories/TeamsRepository', () => ({
  createTeamsRepository: () => currentFakeTeams
}))

const pinia = createPinia()

function createStore() {
  setActivePinia(pinia)
  const store = useTeamRoster(pinia)
  return store
}
describe('teamStore', () => {
  describe('when not initialized', () => {
    test('state should be empty', () => {
      const store = createStore()

      expect(store.allTeams).toHaveLength(0)
    })

    test('should initialize the store', () => {
      // mockedCreateTeamsRepository.mockImplementation(() => fakeTeams)

      const temp = createTeamsRepository()

      console.info('temp all', temp.all())

      // ACT
      const store = createStore()

      store.initialize()

      // ASSERT
      expect(store.allTeams).toHaveLength(3)
    })
  })
})
