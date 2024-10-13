function apiLoginUrl() {
  return import.meta.env.VITE_API_LOGIN_API
}

function apiUserMe() {
  return import.meta.env.VITE_API_PATH_ME
}

function apiServerUrl() {
  return import.meta.env.VITE_API_SERVER_URL
}

export { apiLoginUrl, apiUserMe, apiServerUrl }
