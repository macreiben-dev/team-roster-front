import { createCookieRepository } from '@/repositories/cookieRepository'
import { ConnectedUser } from './ConnectedUser'

const logContext = { module: 'UserService' }

const getUserInformation = async (): ConnectedUser => {
  const apiUrl = import.meta.env.VITE_API_SERVER_URL
  const apiUserMe = import.meta.env.VITE_API_PATH_ME

  const targetUrl = `${apiUrl}${apiUserMe}`

  const currentContext = { ...logContext, method: 'getUserInformation', apiUrl: targetUrl }

  console.info('Querying user information', currentContext)

  const cookieRepo = createCookieRepository()
  const requestConfiguraion = {
    headers: { Authorization: 'Bearer ' + cookieRepo.get('app.at') }
  }

  try {
    const response = await fetch(targetUrl, requestConfiguraion)

    if (!response.ok) {
      throw new Error('Failed to fetch user information')
    }

    const data = await response.json()

    const connectedUser: ConnectedUser = new ConnectedUser(data)

    return connectedUser
  } catch (err) {
    console.error('Failed to fetch user information', { ...currentContext, error: err })
  }

  return new ConnectedUser('not.loggedin@run.local')
}

export { getUserInformation }
