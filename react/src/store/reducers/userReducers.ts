import { createSlice } from '@reduxjs/toolkit'

interface userState {
  isLogin: boolean
}

// 初始值
const initialState: userState = {
  isLogin: false,
}

export const userSlice = createSlice({
  name: 'userInfo',
  initialState,
  reducers: {
    loginIn: (state) => {
      state.isLogin = true
    },
    loginOut: (state) => {
      state.isLogin = false
    },
  },
})

export const { loginIn, loginOut } = userSlice.actions

export default userSlice.reducer
