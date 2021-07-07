import React from 'react';
import './Header.css';

import ImageThumbnail from './ImageThumbnail';
import HeaderContent from './HeaderContent';

const HeaderContainer = () => {
  return (
    <div style = { container }>
      <ImageThumbnail />
      <HeaderContent />
    </div>
  );
}

const container = {
  display: 'flex',
  justifyContent: 'space-between'
}

export default HeaderContainer;