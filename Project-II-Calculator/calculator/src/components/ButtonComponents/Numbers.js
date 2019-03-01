import React, { Component } from 'react';
import NumberButton from './NumberButton';
import './Button.css';

class Numbers extends Component {

  render() {
    return (
      this.props.numButtons.map(btn => (
        <NumberButton 
          key = { this.num }
          btn = { btn }
          updateArr = { this.props.updateArr }
        /> 
      ))
    );
  }
}

export default Numbers;