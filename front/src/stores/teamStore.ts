import Team from '@/services/models/Team'
import { defineStore } from 'pinia'

defineStore('team-roster', () => {
  /**
   * Idea: use a typescript type for store that could be a root aggregate.
   */
  const state = {
    team: [] as Team[]
  }
  const getters = {
    allTeams(state: any) {
      return state.team.map((team: Team) => team.asJson())
    }
  }
  const actions = {
    initialize(state: any) {
      state.team = [new Team(1, 'Team 1'), new Team(2, 'Team 2'), new Team(3, 'Team 3')]
    }
  }
  return { state, getters, actions }
})
