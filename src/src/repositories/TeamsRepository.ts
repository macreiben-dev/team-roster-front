import type Team from '@/services/models/Team'
import type { ITeams } from '@/stores/contractTeamStore'

class TeamsApiRepository implements ITeams {
  public all(): Team[] {
    return []
  }
}

function createTeamsRepository(): any {
  return new TeamsApiRepository()
}

export { createTeamsRepository }
