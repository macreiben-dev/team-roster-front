import Cookies from 'universal-cookie'

interface ICookieRepository {
  get(query: string): string
}

class CookieRepository implements ICookieRepository {
  public get(query: string): string {
    const cookies = new Cookies(null, { path: '/' })

    return cookies.get(query)
  }
}

const createCookieRepository = (): ICookieRepository => {
  return new CookieRepository()
}

export { createCookieRepository, CookieRepository }
export type { ICookieRepository }
