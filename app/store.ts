import { configureStore } from '@reduxjs/toolkit'
import themeReducer from '../lib/redux/theme/themeSlice'

export const store = configureStore({
  reducer: {
    theme : themeReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

