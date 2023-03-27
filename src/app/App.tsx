import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import List from '../components/List';
import GlobalStyle from '../globalStyle';
import MainLayout from '../layout/MainLayout';
import { store } from '../redux/store';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <GlobalStyle />
        <Routes>
          <Route path="*" element={<MainLayout />}>
            <Route path='' element={<div>Strona główna, wybierz państwo</div>} />
            <Route path="country/:country" element={<List />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
