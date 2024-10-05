import Team from '@/services/models/Team'
import type { ITeams } from '@/stores/contractTeamStore'

export class FakeTeams implements ITeams {
  data: Team[]
  constructor(data: Team[]) {
    this.data = data
  }

  public all(): Team[] {
    return this.data
  }

  public setAll(teams: Team[]): void {
    this.data = teams
  }

  public clear(): void {
    this.data.splice(0)
  }
}
