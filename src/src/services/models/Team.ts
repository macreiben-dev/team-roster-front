const MINIMUM_TEAMNAME_LENGTH = 3
class Team {
  errorMessage(properyName: string): string {
    if (this.isNameEmpty()) {
      return 'Team name is required'
    }
    if (this.isLengthValid()) {
      return 'Team name minimum length is 3'
    }
    return 'Team name is required'
  }

  validate() {
    if (this.isNameEmpty()) return false
    if (this.isLengthValid()) return false
    return true
  }
  name: string
  id: number
  constructor(id: number, name: string) {
    /**
     * idea: id exists only for team retrieved from database.
     * so it's not used when team are created from UI.
     */
    this.id = id
    this.name = name
  }

  public asJson(): any {
    return {
      id: this.id,
      name: this.name
    }
  }
  private isLengthValid() {
    return this.name.length < MINIMUM_TEAMNAME_LENGTH
  }

  private isNameEmpty() {
    return this.name === ''
  }
}

export default Team
