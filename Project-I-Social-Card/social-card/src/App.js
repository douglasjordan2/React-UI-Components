import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';
import Footer from './components/FooterComponents/Footer';

const App = () => {
  return (
    <div style = { container }>
      <HeaderContainer />
      <CardContainer />
      <Footer />
    </div>
  );
};

const container = {
  maxWidth: '520px',
  padding: '10px 5px'
}

export default App;
