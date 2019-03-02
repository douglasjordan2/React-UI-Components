import React, { Component } from 'react';
import ActionButton from './ActionButton';
import PropTypes from 'prop-types';

class Actions extends Component {
  render() {
    return (
      this.props.actButtons.map(btn => (
        <ActionButton 
          key = { btn.act }
          btn = { btn }
          id = { btn.act }
          setOperator = { this.props.setOperator }
        />
      ))
    );
  }
}

Actions.propTypes = {
  actButtons: PropTypes.array.isRequired,
  setOperator: PropTypes.func.isRequired
}

export default Actions;