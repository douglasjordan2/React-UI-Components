import React, { Component } from 'react';
import './App.css';

import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import Numbers from './components/ButtonComponents/Numbers';
import Actions from './components/ButtonComponents/Actions';

class App extends Component {
  state = {
    nums: numButtons,
    acts: actButtons,
    displayVal: 0,
    operator: '',
    acc: '',
    operand1: 0,
    operand2: 0
  }

  update = id => {
    this.setState({ acc: this.state.acc += id })

    if(this.state.operand1 == 0) {
      this.setState({ displayVal: this.state.displayVal == 0 ? this.state.displayVal = parseInt(id) : parseInt(this.state.displayVal += id) })
      this.setState({ operand1: this.state.operand1 = this.state.acc })
    } else {
      this.setState({ displayVal: this.state.displayVal == 0 ? this.state.displayVal = parseInt(id) : parseInt(this.state.displayVal += id) })
      this.setState({ operand2: this.state.operand2 = this.state.displayVal })
    }
  }

  setOperator = id => {
    console.log(this.state.operand1, this.state.operand2)

    let calc;

    if(id !== '=') {
      this.setState({ operator: this.state.operator = id })
    } else {
      if(this.state.operand1 !== 0) {
        let operand1 = this.state.operand1;
        let operand2 = this.state.operand2
        switch(this.state.operator) {
          case '÷':
            calc = operand1 / operand2;
            break;
          case 'x':
            calc = operand1 * operand2;
            break;
          case '-':
            calc = operand1 - operand2;
            break;
          case '+':
            calc = operand1 + operand2;
            break;
        }
      }
    }

    this.setState({ operator: this.state.operator = id !== '=' ? id : '' });
    this.setState({ displayVal: this.state.displayVal = id == '=' ? calc : 0 })
  }

  render() {
    return (
      <div style = {{
          width: '300px',
          display: 'flex',
          flexWrap: 'wrap'
        }}
      >
        <CalculatorDisplay 
          displayVal = { this.state.displayVal }
        />
        <div
          style = {{
            width: '75%',
            maxHeight: '250px',
            display: 'flex',
            flexFlow: 'row-reverse wrap',
            fontSize: '1.5rem'
          }}
        >
          <Numbers 
            numButtons = { this.state.nums }
            update = { this.update }
          />
        </div>
        <div
          style = {{
            width: '25%',
            fontSize: '1.5rem',
            color: 'white'
          }}
        >
          <Actions 
            actButtons = { this.state.acts }
            setOperator = { this.setOperator }
          />
        </div>
      </div>
    );
  }
};

let numButtons = [];
for(let i = 10; i >= 0; i--) {
  if(i !== 10) {
    numButtons.push({
      'num': `${i}`
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
