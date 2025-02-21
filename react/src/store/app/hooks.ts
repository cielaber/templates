import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'
import type { RootState, AppDispatch } from '../index'

// Use throughout your app instead of plain `useDispatch` and `useSelector`
// 主要用于设置TS类型，使用useSelector和useDispatch时不用在每个文件写TS类型
export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
