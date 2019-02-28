import React from 'react';
import './Header.css';

const HeaderTitle = () => {
  return (
    <div style = { container }>
      <h1 style = { h1 }>Lambda School</h1>
      &nbsp;&nbsp;
      <span style = { info }>@LambdaSchool · "DATE"</span>
    </div>
  );
}

const container = {
  display: 'flex',
  alignItems: 'center'
}

const h1 = {
  fontSize: '1rem',
  margin: '0',
  padding: '0'
}

const info = {
  color: 'lightgray',
  fontSize: '0.9rem',
  margin: '0',
  padding: '0'
}

export default HeaderTitle;