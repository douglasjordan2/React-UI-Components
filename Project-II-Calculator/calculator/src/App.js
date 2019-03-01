import React, { Component } from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Numbers from './components/ButtonComponents/Numbers';
import ActionButton from './components/ButtonComponents/ActionButton';

class App extends Component {
  state = {
    display: this.calcArr,
    calcArr: []
  }

  updateArr = num => {
    this.setState({ calcArr: [...this.state.calcArr, num] })
    this.setState({ display: this.state.calcArr })
  

  render() {
    return (
      <div style = {{
          width: '300px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <CalculatorDisplay 
          displayVal = { this.state.display }
        />
        <Numbers 
          style = {{
            width: '75%',
            maxHeight: '250px',
            display: 'flex',
            flexFlow: 'row-reverse wrap',
            fontSize: '1.5rem'
          }}
          numButtons = { numButtons }
          updateArr = { this.updateArr }
          displayVal = { this.state.display }
        />
        <ActionButton 
          actButtons = { actButtons }
          calcArr = { this.state.calcArr }
          displayVal = { this.state.display }
        />
      </div>
    );
  }
};

let numButtons = [];
for(let i = 10; i >= 0; i--) {
  if(i !== 10) {
    numButtons.push({
      'num': i
    })
  } else {
    numButtons.push({
      'num': 'clear'
    })
  }
}

const actButtons = [
  {
    'act': '÷'
  },
  {
    'act': 'x'
  },
  {
    'act': '-'
  },
  {
    'act': '+'
  },
  {
    'act': '='
  },
]

export default App;
