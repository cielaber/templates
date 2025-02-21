import React from 'react'
import { useAppDispatch, useAppSelector } from '@/store/app/hooks'
import { loginIn, loginOut } from '@/store/reducers/userReducers'
import { Button } from 'antd'
import { useNavigate } from 'react-router-dom'

const Login: React.FC = () => {
  const { isLogin } = useAppSelector((state) => state.userInfo)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const handleLoginIn = () => {
    dispatch(loginIn())
    navigate('/home')
  }
  return (
    <div>
      {isLogin ? <p>已登录</p> : <p>未登录</p>}
      <Button onClick={handleLoginIn}>登录</Button>
      <Button onClick={() => dispatch(loginOut())}>退出</Button>
    </div>
  )
}

export default Login
