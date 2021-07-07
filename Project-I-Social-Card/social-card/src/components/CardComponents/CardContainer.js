import React from 'react';
import './Card.css';

import CardBanner from './CardBanner';
import CardContent from './CardContent';

const CardContainer = () => {
  return (
    <div style = { container }>
      <div style = { placement }>
        <CardBanner />
        <CardContent />
      </div>
    </div>
  );
}

const container = {
  margin: '0',
  padding: '0'
}

const placement = {
  border: '1px solid gray',
  borderRadius: '4px',
  margin: '0 0 0 55px',
  padding: '0'
}

export default CardContainer;