import React from 'react';

const Footer = () => {
  return (
    <div style = { container }>
      <div style = { placement }>
        <i 
          style = { msgIcon }
          class="far fa-comment"
        ></i>
        <i
          style = { icon }
          class="fas fa-sync-alt"
        > 4</i>
        <i 
          style = { icon }
          class="far fa-heart"
        > 4</i>
        <i 
          style = { icon }
          class="far fa-envelope"></i>
      </div>
    </div>
  );
}

const container = {
  margin: '18px 0 0 0',
  padding:'0'
}

const placement = {
  margin: '0 0 0 55px'
}

const msgIcon = {
  transform: 'scaleX(-1)'
}

const icon = {
  paddingLeft: '50px'
}

export default Footer;