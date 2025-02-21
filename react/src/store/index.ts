import { configureStore } from '@reduxjs/toolkit'
import userReducer from './reducers/userReducers'

const store = configureStore({
  reducer: {
    userInfo: userReducer, //用户相关
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store
