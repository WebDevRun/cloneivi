import axios, { AxiosRequestConfig } from 'axios'

const $instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

const $authInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
})

// const authInterceptor = async (config: AxiosRequestConfig) => {
//   config.headers.Authorization = `Bearer ${( localStorage.getItem('token')}`
  // return config
// }

// $authInstance.interceptors.request.use(authInterceptor)

export {
  $instance,
  $authInstance,
}