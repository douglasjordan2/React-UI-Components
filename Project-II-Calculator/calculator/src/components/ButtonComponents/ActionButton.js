import React from 'react';
import './Button.css';

const ActionButton = props => {
  return (
    <div style = { actionContainer }>
      { renderBtns(props) }
    </div>
  );
}

const renderBtns = props => {
  return (
    props.actButtons.map(btn => (
      <div style = { btnStyle }>
        { btn.act }
      </div>
    ))
  );
}

const actionContainer = {
  width: '25%',
  fontSize: '1.5rem',
  color: 'white'
}

const btnStyle = {
  background: '#A0001F',
  height: '60px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  border: '1px solid gray'
}

export default ActionButton;