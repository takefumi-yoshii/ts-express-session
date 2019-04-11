import axios from 'axios'
import { APP_HOST, APP_PORT } from '../constants'

export const axiosInstance = axios.create({
  baseURL: `http://${APP_HOST}:${APP_PORT}`,
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json'
})
