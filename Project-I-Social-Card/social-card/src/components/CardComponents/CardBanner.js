import React from 'react';
import './Card.css';

const CardBanner = () => {
  return (
      <img 
        style = {{
          width: '100%',
          height: 'auto',
          padding: '0',
          margin: '0'
        }}
        src = { require('./views/reactbackground.png') } 
        alt="react logo"
      />
  );
}

export default CardBanner;