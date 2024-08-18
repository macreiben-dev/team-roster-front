class ConnectedUser {
  private _email: string
  private _username: string

  public constructor(data: any) {
    this._email = data.email as string
    this._username = data.userName as string
  }

  public getEmail(): string {
    return this._email
  }

  public getUsername(): string {
    return this._username
  }
}

export { ConnectedUser }
