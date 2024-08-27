import type { ICookieRepository } from '@/repositories/CookieRepository'

class FakeCookieRepository implements ICookieRepository {
  private token: string | null = ''
  constructor(token: string | null) {
    this.token = token
  }
  get(query: string): string | null {
    return null
  }
  getToken(): string | null {
    return this.token
  }
}

export default FakeCookieRepository
