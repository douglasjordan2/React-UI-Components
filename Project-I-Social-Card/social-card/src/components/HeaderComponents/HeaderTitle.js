import React from 'react';
import './Header.css';
import moment from 'moment';

const HeaderTitle = () => {
  return (
    <div style = { container }>
      <h1 style = { h1 }>Lambda School</h1>
      &nbsp;&nbsp;
      <span style = { info }>@LambdaSchool · { moment().format('DD MMM').toLowerCase() }</span>
    </div>
  );
}

const container = {
  display: 'flex',
  alignItems: 'center',
  marginBottom: '3px'
}

const h1 = {
  fontSize: '0.8rem',
  letterSpacing: '0.5px',
  fontWeight: 'bold',
  margin: '0',
  padding: '0'
}

const info = {
  color: 'gray',
  fontSize: '0.7rem',
  margin: '0',
  padding: '0'
}

export default HeaderTitle;