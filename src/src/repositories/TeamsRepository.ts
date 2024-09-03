import type Team from '@/services/models/Team'
import type { ITeams } from '@/stores/contractTeamStore'

class TeamsApiRepository implements ITeams {
  public all(): Team[] {
    return []
  }
}

function createTeamsRepository(): ITeams {
  return new TeamsApiRepository()
}

export { createTeamsRepository }
