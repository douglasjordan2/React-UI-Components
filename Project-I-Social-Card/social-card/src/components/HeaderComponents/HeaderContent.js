import React from 'react';
import './Header.css';

import HeaderTitle from './HeaderTitle';

const HeaderContent = () => {
  return (
    <header style = { container }>
      <HeaderTitle />
      <p style = { p }>Let's learn React by building simple interfaces with components. Don't try to overthink it. Just keep it simple and have fun. Once you feel comfortable using components you are well on your way to mastering React!</p>
    </header>
  );
}

const container = {
  marginBottom: '10px'
}

const p = {
  fontSize: '0.8rem'
}

export default HeaderContent