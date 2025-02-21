import { lazy } from 'react'
import { createBrowserRouter } from 'react-router-dom'
import { useAppSelector } from '@/store/app/hooks'
import { Navigate } from 'react-router-dom'

const Login = lazy(() => import('../pages/login'))
const Home = lazy(() => import('../pages/home'))

const PrivateRoute = ({ children }: any) => {
  const { isLogin } = useAppSelector((state) => state.userInfo)
  return isLogin ? children : <Navigate to="/login" />
}

export const routers = createBrowserRouter([
  {
    path: '/login',
    element: <Login />,
  },
  {
    path: '/',
    children: [
      {
        path: '/',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      },
      {
        path: '/home',
        element: (
          <PrivateRoute>
            <Home />
          </PrivateRoute>
        ),
      }
    ],
  },
])
