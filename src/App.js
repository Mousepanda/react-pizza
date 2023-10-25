import React from 'react';
import { Routes, Route } from 'react-router-dom';

import './scss/app.scss';

import Header from './componets/Header';

import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Cart from './pages/Cart';

export const AppContex = React.createContext('');

function App() {
  const [searchValue, setSearchValue] = React.useState('');

  return (
    <div className="wrapper">
      <AppContex.Provider value={{ searchValue, setSearchValue }}>
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="*" element={<NotFound />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </AppContex.Provider>
    </div>
  );
}

export default App;
