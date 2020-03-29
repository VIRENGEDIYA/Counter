import React, { Component } from "react";
import NewCounter from "./newCounter";
import Total from "./total";

export default class HomeWithoutProps extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    }
  }

  onChange = ( id, value) => {
    let newData = [...this.state.data];
    newData.map(item => item.id === id && (item.value = value) );
    this.setState({
      data : [...newData]
    })
  }


  render() {
    const { data } = this.state;
    let sum = 0;
    data.map(item =>  sum += item.value);
    return (
      <div>
        <h1>Home With only onChange method</h1>
        {data.map(counter => (
          <NewCounter 
            id={counter.id}
            key={counter.id}
            value={counter.value}
            onChange ={(id, value) => this.onChange(id, value)}
          />
        ))}
        <Total sum={sum} />
      </div>
    );
  }
}
