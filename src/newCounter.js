import React, { Component } from 'react';

// Counter Component
class NewCounter extends Component {

    render() {
      const { id, value, onChange } = this.props;
      return (
        <div className="counter">
          <b>{value}</b>
          <div className="counter-controls">
            <button className="button is-danger is-small" onClick={() => onChange(id, value-1)}>-</button>
            <button className="button is-success is-small" onClick={() => onChange(id, value+1)}>+</button>
          </div>
        </div>
      );
    }
  }

export default NewCounter
