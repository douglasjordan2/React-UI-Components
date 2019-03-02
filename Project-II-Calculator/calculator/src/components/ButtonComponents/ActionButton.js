import React, { Component } from 'react';
import PropTypes from 'prop-types';

class ActionButton extends Component {
  render(props) {
    const { id } = this.props
    return (
      <div
        onClick = { () => this.props.setOperator(id) }
        style = { btnStyle }
      >
        { this.props.btn.act }
      </div>
    );
  }
}

ActionButton.propTypes = {
  btn: PropTypes.object.isRequired
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