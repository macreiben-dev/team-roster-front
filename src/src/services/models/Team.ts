class Team {
  validate() {
    if (this.name === '') return false
    return true
  }
  name: string
  id: number
  constructor(id: number, name: string) {
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
