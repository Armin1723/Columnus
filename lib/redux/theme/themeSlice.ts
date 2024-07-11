import { RootState } from '@/app/store'
import { createSlice } from '@reduxjs/toolkit'

// Define a type for the slice state
export interface themeState {
    value: string
  }

// Define the initial state using that type
const initialState = {
    value: 'dark'
  } as themeState

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    toggle: ( (state) => {
      state.value = state.value === 'light' ? 'dark' : 'light'
    }),
  }
})

// Action creators are generated for each case reducer function
export const { toggle } = themeSlice.actions

// Other code such as selectors can use the imported `RootState` type
export const selectTheme = (state: RootState) => state.theme.value

export default themeSlice.reducer