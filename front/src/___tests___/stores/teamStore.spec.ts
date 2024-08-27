import { createPinia, setActivePinia } from 'pinia'
import { describe, test, expect } from 'vitest'
import { useTeamRoster } from '@/stores/teamStore'
import Team from '@/services/models/Team'
import { FakeTeams } from '../fakes/FakeTeams'

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
      const original = [new Team(1, 'Team 1'), new Team(2, 'Team 2'), new Team(3, 'Team 3')]

      const fakeTeams = new FakeTeams(original)

      // ACT
      const store = createStore()

      store.initialize(fakeTeams)

      // ASSERT
      expect(store.allTeams).toHaveLength(3)
    })
  })
})
