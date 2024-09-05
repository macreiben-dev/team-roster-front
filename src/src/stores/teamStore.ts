import Team from '@/services/models/Team'
import { defineStore } from 'pinia'
import { createTeamsRepository } from '@/repositories/TeamsRepository'

export const useTeamRoster = defineStore('team-roster', {
  state: () => ({
    team: [] as Team[]
  }),
  getters: {
    allTeams: (state) => state.team.map((team: Team) => team.asJson())
  },
  actions: {
    initialize() {
      clear(this.team as [])

      const teamCollection = createTeamsRepository()

      console.info('teamCollection test2', teamCollection)

      const teams = teamCollection.all()

      for (const element of teams) {
        this.team.push(element)
      }
    },
    createTeam(name: string, description: string) {
      const currentLoggingContext = {
        name: name,
        description: description
      }

      console.info('Adding team to store', currentLoggingContext)

      this.team.push(new Team(0, name))
    }
  }
})

const clear = (source: []) => {
  source.splice(0)
}
