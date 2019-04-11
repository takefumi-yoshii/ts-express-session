import { axiosInstance } from './api'
import { Health } from '../types/api'

document.getElementById('ping')!.addEventListener('click', () => {
  axiosInstance.get<Health>('/ping').then(({ data }) => {
    const counter = document.getElementById('count')!
    counter.innerHTML = `${data.count}`
  })
})

// webpack-hot-middleware の HMR を有効にする
if (module.hot) {
  module.hot.accept()
}
