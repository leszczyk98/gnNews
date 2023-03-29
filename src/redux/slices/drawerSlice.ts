import { createSlice } from '@reduxjs/toolkit'

interface ViewTypeState {
  open: boolean
}

const initialState: ViewTypeState = {
  open: false,
}

export const drawerSlice = createSlice({
  name: 'drawer',
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.open = !state.open
    },
    closeDrawer: (state) => {
      state.open = false
    },
  },
})

export const { toggleDrawer, closeDrawer } = drawerSlice.actions

export default drawerSlice.reducer
