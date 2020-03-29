import React, { Component } from 'react';

// Counter Component
class Counter extends Component {

    render() {
      const { id, value, onIncrement, onDecrement } = this.props;
      return (
        <div className="counter">
          <b>{value}</b>
          <div className="counter-controls">
            <button className="button is-danger is-small" onClick={() => onDecrement(id, value)}>-</button>
            <button className="button is-success is-small" onClick={() => onIncrement(id,value)}>+</button>
          </div>
        </div>
      );
    }
  }

export default Counter
