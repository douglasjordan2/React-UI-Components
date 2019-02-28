import React from 'react';
import './Card.css';

const CardContent = () => {
  return (
    <div style = { container }>
      <h1 style = { h1 }>Get started with React</h1>
      <p style = { content }>React makes it painless to create interactive UIs. Design simple views for each state in your application.</p>
      <a 
        href="http://reactjs.org" 
        style = { link }
      >
        reactjs.org
      </a>
    </div>
  );
}

const container = {
  padding: '10px'
}

const h1 = {
  fontSize: '0.8rem'
}

const content = {
  fontSize: '0.8rem'
}

const link = {
  color: 'gray',
  fontSize: '0.8rem'
}

export default CardContent;