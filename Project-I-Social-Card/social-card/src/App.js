import React from 'react';
import './App.css';

import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div style = { container }>
      <HeaderContainer />
      <CardContainer />
    </div>
  );
};

const container = {
  maxWidth: '500px',
}

export default App;
