import React, { Component } from 'react';
import PropTypes from 'prop-types';
import NumberButton from './NumberButton';
import './Button.css';

class Numbers extends Component {
  state = {
    calcArr: this.props.calcArr
  }

  render() {
    console.log(this.props.numButtons)
    return (
      <div style = { numContainer }> 
        { 
          this.props.numButtons.map(btn => (
            <NumberButton 
              key = { this.num }
              btn = { btn }
            /> 
          ))
        }
      </div>
    );
  }
}

const numContainer = {
  width: '75%',
  maxHeight: '250px',
  display: 'flex',
  flexFlow: 'row-reverse wrap',
  fontSize: '1.5rem'
}

export default Numbers;