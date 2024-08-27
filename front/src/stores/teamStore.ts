import Team from '@/services/models/Team'
import { defineStore } from 'pinia'
import type { ITeams } from '@/stores/contractTeamStore'

export const useTeamRoster = defineStore('team-roster', {
  state: () => ({
    team: [] as Team[]
  }),
  getters: {
    allTeams: (state) => state.team.map((team: Team) => team.asJson())
  },
  actions: {
    initialize(teamCollection: ITeams) {
      this.team.splice(0)

      const teams = teamCollection.all()

      teams.forEach((element) => {
        this.team.push(element)
      })
    }
  }
})
