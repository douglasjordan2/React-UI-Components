import React, { Component } from 'react';
import PropTypes from 'prop-types';

class NumberButton extends Component {
  btnStyle = () => {
    return ({
      cursor: 'pointer',
      background: 'white',
      border: '1px solid gray',
      height: '60px',
      width: this.props.btn.num === 'clear' || this.props.btn.num == '0' ? '100%' : '33.3%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      fontWeight: this.props.btn.num === 'clear' ? 'none' : 'bold'
    })
  }

  render(props) {
    const { id } = this.props
    return (
      <div 
        style = { this.btnStyle(props) }
        onClick = { id == 'clear' ? () => this.props.clear() : () => this.props.update(id) }
      >
        { this.props.btn.num }
      </div>
    );
  }
}

NumberButton.propTypes = {
  btn: PropTypes.object.isRequired
  
}

export default NumberButton;