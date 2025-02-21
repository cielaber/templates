import { request } from './base'

// =================== 权限登录接口 =====================
// 用户登录
export const apiUserLogin = (data: any) => request.post('/user/login', data)
