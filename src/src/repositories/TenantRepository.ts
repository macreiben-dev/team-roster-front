import { apiLoginUrl } from './confiogurationRepository'

const redirectoToAuthenticationPage = (parentLogContext?: any) => {
  const authenticationPageUrl = apiLoginUrl()

  const currentLogContext = { ...parentLogContext, apiLoginUrl: authenticationPageUrl }

  console.info('redirecting to authentication page', currentLogContext)

  window.location.href = authenticationPageUrl
}

export { redirectoToAuthenticationPage }
