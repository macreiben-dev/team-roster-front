import { createCookieRepository, type ICookieRepository } from '@/repositories/cookieRepository'
import { CurrentUser, NotLoggedInUserInstance } from './ConnectedUser'
const logContext = { module: 'UserService' }

const getUserInformation = async (parentLogContext?: any): Promise<CurrentUser> => {
  const apiUrl = import.meta.env.VITE_API_SERVER_URL
  const apiUserMe = import.meta.env.VITE_API_PATH_ME

  const targetUrl = `${apiUrl}${apiUserMe}`

  const currentContext = {
    ...parentLogContext,
    ...logContext,
    method: 'getUserInformation',
    apiUrl: targetUrl
  }

  console.info('Querying user information', currentContext)

  const cookieRepo = createCookieRepository()

  const requestConfiguraion = createAuthorizationHeader(cookieRepo)

  try {
    const response = await fetch(targetUrl, requestConfiguraion)

    if (!response.ok) {
      const notOkResponseMessage = 'Failed to fetch user information, API response not OK.'
      console.error(notOkResponseMessage, { ...currentContext, responseStatus: response.status })
      throw new Error(notOkResponseMessage)
    }

    const data = await response.json()

    const connectedUser = new CurrentUser(data)

    return connectedUser
  } catch (err) {
    console.error('Failed to fetch user information', { ...currentContext, error: err })
  }

  return NotLoggedInUserInstance
}

function createAuthorizationHeader(cookieRepo: ICookieRepository) {
  return {
    headers: { Authorization: 'Bearer ' + cookieRepo.get('app.at') }
  }
}

export { getUserInformation }
