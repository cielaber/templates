import axios, { AxiosInstance } from 'axios'
import { BASE_API_URL } from '@/config'

// 请求头
const getHeaders = () => {
  return {
    'content-type': 'application/json',
  }
}

// 请求拦截器
const requestInterceptors = (instance: AxiosInstance): void => {
  console.log(instance)
}

// 响应拦截器
const responseInterceptors = (instance: AxiosInstance): void => {
  instance.interceptors.response.use((res) => {
    if (res.data.code === 200) {
      return res.data
    }
    // TODO：请求失败处理
    return Promise.reject(res)
  })
}

/**
 *
 * @param baseURL 请求URL
 * @returns
 */
export function createAxiosInstance(baseURL = ''): AxiosInstance {
  const instance = axios.create({
    baseURL,
    headers: getHeaders(),
    timeout: 6000,
    responseType: 'json',
  })

  //  请求拦截器
  requestInterceptors(instance)
  // 响应拦截器
  responseInterceptors(instance)

  return instance
}

// 创建请求实例
export const request = createAxiosInstance(BASE_API_URL)
