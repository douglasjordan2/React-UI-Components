import React from 'react';
import './Display.css';

const CalculatorDisplay = props => {
  return (
    <div style = {{
      height: '75px',
      width: '100%',
      backgroundColor: 'black',
      color: 'white',
      display: 'flex',
      justifyContent: 'flex-end',
      alignItems: 'flex-end',
      padding: '10px',
      fontSize: '3rem'
    }}>
      { props.displayVal }
    </div>
  );
}

export default CalculatorDisplay;