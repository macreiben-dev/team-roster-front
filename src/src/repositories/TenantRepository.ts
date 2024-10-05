const redirectoToAuthenticationPage = (parentLogContext?: any) => {
  const authenticationPageUrl = import.meta.env.VITE_API_LOGIN_API

  const currentLogContext = { ...parentLogContext, apiLoginUrl: authenticationPageUrl }

  console.info('redirecting to authentication page', currentLogContext)

  window.location.href = authenticationPageUrl
}

export { redirectoToAuthenticationPage }
