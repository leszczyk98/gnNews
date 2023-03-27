import { configureStore } from "@reduxjs/toolkit";
import viewTypeReducer from "./slices/viewTypSlice";
import drawerReducer from "./slices/drawerSlice";
import newsReducer from "./slices/newsSlice";

export const store = configureStore({reducer: {
    viewType: viewTypeReducer,
    drawer: drawerReducer,
    news: newsReducer
}})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
