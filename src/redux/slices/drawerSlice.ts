import { createSlice } from "@reduxjs/toolkit";

interface ViewTypeState {
  value: boolean;
}

const initialState: ViewTypeState = {
  value: false,
};

export const drawerSlice = createSlice({
  name: "drawer",
  initialState,
  reducers: {
    toggleDrawer: (state) => {
      state.value = !state.value
    },
    closeDrawer: (state) => {
      state.value = false
    }
  },
});

export const { toggleDrawer, closeDrawer } = drawerSlice.actions;

export default drawerSlice.reducer;
