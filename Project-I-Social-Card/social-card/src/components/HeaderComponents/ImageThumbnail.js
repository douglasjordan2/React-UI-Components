import React from 'react';
import './Header.css';

const ImageThumbnail = () => {
  return (
    <img 
      src = { require('./views/lambdacrest.png') } 
      alt = "lambda crest"
      style = {{
        width: 'auto',
        height: '50px'
      }}
    />
  );
}

export default ImageThumbnail