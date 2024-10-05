class Team {
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
}

export default Team
