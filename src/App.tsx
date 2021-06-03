import React from 'react';

import Cart from './components/Cart';
import Header from './components/Header';
import Filters from './components/Filters';
import Products from './components/Products';
import MainContainer from './containers/Main';
import CartProvider from './context/Cart/provider';

const App: React.FC = () => (
  <CartProvider>
    <MainContainer>
      <Header />
      <Filters />
      <Products />
      <Cart />
    </MainContainer>
  </CartProvider>
);

export default App;