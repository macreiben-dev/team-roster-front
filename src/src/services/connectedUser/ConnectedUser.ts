const NOT_LOGGEDIN_MAIL = 'user.not.loggedin@mail.local'
const NOT_LOGGEDIN_USERNAME = 'NotLoggedIn'

class CurrentUser {
  private _email: string
  private _username: string

  public constructor(data: any) {
    this._email = data.email as string
    this._username = data.userName as string
  }

  public getEmail(): string {
    return this._email
  }

  public getUserName(): string {
    return this._username
  }

  public isLoggedIn(): boolean {
    return this._email !== 'user.not.loggedin@mail.local' && this._username !== 'NotLoggedIn'
  }
}

const NotLoggedInUserInstance = new CurrentUser({
  email: NOT_LOGGEDIN_MAIL,
  userName: NOT_LOGGEDIN_USERNAME
})

export { CurrentUser, NotLoggedInUserInstance }
