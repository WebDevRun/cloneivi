import axios from 'axios'

import { getToken } from '../auth/getToken'

export function crud(url: string, data: any) {
  const api = axios.create({
    baseURL: 'http://localhost:4000',
    headers: {
      'Content-Type': 'application/json',
    },
  })

  api.interceptors.request.use(
    async (config) => {
      const token = await getToken()

      if (token) {
        config.headers.Authorization = `Bearer ${token}`
      }
      return config
    },
    (error) => Promise.reject(error),
  )

  const sendData = async (data: any) => {
    const response = await api.patch(url, data)
    return response.data
  }

  sendData(data)
}
