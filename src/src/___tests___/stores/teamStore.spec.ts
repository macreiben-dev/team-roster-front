import { createPinia, setActivePinia } from 'pinia'
import { describe, test, expect, vi } from 'vitest'
import { useTeamRoster } from '@/stores/teamStore'
import Team from '@/services/models/Team'
import { FakeTeams } from '../fakes/FakeTeams'
import type { ITeams } from '@/stores/contractTeamStore'

const allFakeTeams = [new Team(1, 'Team 1'), new Team(2, 'Team 2'), new Team(3, 'Team 3')]

const currentFakeTeams = new FakeTeams(allFakeTeams)

vi.mock('@/repositories/TeamsRepository', () => ({
  createTeamsRepository: (): ITeams => currentFakeTeams
}))

const pinia = createPinia()

function createStore() {
  setActivePinia(pinia)
  const store = useTeamRoster(pinia)
  store.clear()
  return store
}
describe('teamStore', () => {
  describe('when not initialized', () => {
    test('state should be empty', () => {
      const store = createStore()

      expect(store.allTeams).toHaveLength(0)
    })

    test('should initialize the store', () => {
      // ACT
      const store = createStore()

      store.initialize()

      // ASSERT
      expect(store.allTeams).toHaveLength(3)
    })
  })
  describe('when created', () => {
    test('should add a team to the store', () => {
      // ARRANGE
      const store = createStore()

      // ACT
      store.createTeam('Team 4', 'Team 4 description')

      const actual = store.allTeams[0]

      // ASSERT
      expect(actual.name).toBe('Team 4')
    })
  })
})
