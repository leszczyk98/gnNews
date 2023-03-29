import Home from 'components/Home/Home'
import React from 'react'
import { Provider } from 'react-redux'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import List from '../components/List'
import GlobalStyle from '../globalStyle'
import MainLayout from '../layout/MainLayout'
import { setupStore } from '../redux/store'

const App = () => {
  return (
    <Provider store={setupStore()}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<MainLayout />}>
            <Route
              path=""
              element={<Home />}
            />
            <Route path="country/:country" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  )
}

export default App
