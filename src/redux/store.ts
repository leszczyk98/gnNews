import {
  combineReducers,
  configureStore,
  PreloadedState,
} from '@reduxjs/toolkit'
import viewTypeReducer from './slices/viewTypeSlice'
import drawerReducer from './slices/drawerSlice'
import newsReducer from './slices/newsSlice'

const rootReducer = combineReducers({
  viewType: viewTypeReducer,
  drawer: drawerReducer,
  news: newsReducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) =>
  configureStore({
    reducer: rootReducer,
    preloadedState,
  })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
