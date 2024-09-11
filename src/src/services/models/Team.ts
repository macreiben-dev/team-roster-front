class Team {
  errorMessage(properyName: string): string {
    if (this.isNameEmpty()) {
      return 'Team name is required'
    }
    if (this.name.length < 3) {
      return 'Team name minimum length is 3'
    }
    return 'Team name is required'
  }
  validate() {
    if (this.isNameEmpty()) return false
    if (this.name.length < 3) return false
    return true
  }
  name: string
  id: number
  constructor(id: number, name: string) {
    this.id = id
    this.name = name
  }
  private isNameEmpty() {
    return this.name === ''
  }

  public asJson(): any {
    return {
      id: this.id,
      name: this.name
    }
  }
}

export default Team
