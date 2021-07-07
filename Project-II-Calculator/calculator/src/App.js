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
    acc: '',
    operand1: '',
    operator: '',
    operand2: '',
    track: false,
    operatorHold: ''
  }

  update = id => {
    console.log(this.state)
    if(this.state.operator !== '') {
      this.setState({ track: this.state.track = true })
    }
    this.setState({ acc: this.state.acc == '' ? this.state.acc = id : this.state.acc += id })
    this.setState({ displayVal: this.state.displayVal = this.state.acc })
  }

  clear = () => {
    console.log(this.state)
    this.setState({ displayVal: this.state.displayVal = 0 })
    this.setState({ acc: this.state.acc = '' })
    this.setState({ operand1: this.state.operand1 = '' })
    this.setState({ operator: this.state.operator = '' })
    this.setState({ operand2: this.state.operand2 = '' })
  }

  setOperator = id => {
    console.log(this.state)
    if(this.state.track) {
      this.setState({ operatorHold: this.state.operatorHold = id });
      this.calculate();
    } else {
      this.setState({ operand1: this.state.operand1 = this.state.acc == '' ? parseInt(this.state.operand1) : parseInt(this.state.acc) })
      this.setState({ acc: this.state.acc = '' })
      this.setState({ operator: this.state.operator = id })
    }
  }

  calculate = () => {
    console.log(this.state)
    if(this.state.operatorHold == '') {
      this.setState({ track: this.state.track = false })
    }
    this.setState({ track: this.state.track = false })
    this.setState({ operand2: this.state.operand2 = parseInt(this.state.acc) })
    let calc;
    switch(this.state.operator) {
      case actButtons[0].act:
        calc = this.state.operand1 / this.state.operand2;
        break;
      case actButtons[1].act:
        calc = this.state.operand1 * this.state.operand2;
        break;
      case actButtons[2].act:
        calc = this.state.operand1 - this.state.operand2;
        break;
      case actButtons[3].act:
        calc = this.state.operand1 + this.state.operand2;
        break;
    }

    this.setState({ displayVal: this.state.displayVal = calc })
    this.setState({ operand1: this.state.operand1 = calc })
    this.setState({ acc: this.state.acc = '' })
    this.setState({ operator: this.state.operator = this.state.operatorHold })
    this.setState({ operatorHold: this.state.operatorHold = '' })
    this.setState({ operand2: this.state.operand2 = '' })
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
            clear = { this.clear }
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
            calculate = { this.calculate }
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
