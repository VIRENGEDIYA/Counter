import React, { Component } from "react";
import Counter from "./counter";
import Total from "./total";

export default class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      data : [{ id: 1, value: 0 }, { id: 2, value: 0 }, { id: 3, value: 0 }]
    }
  }

  onIncrement = ( id, value) => {
    let newData = [...this.state.data];
    newData.map(item => item.id === id && (item.value = (value+1)) );
    this.setState({
      data : [...newData]
    })
  }

  onDecrement = (id, value) => {
    let newData = [...this.state.data];
    newData.map(item => item.id === id && (item.value = (value-1) ));
    this.setState({
      data : [...newData]
    })
  }


  render() {
    const { data } = this.state;
    let sum = 0;
    data.map(item => sum += item.value)
    return (
      <div>
        <h1>Home With only onChange method</h1>   
        {data.map(counter => (
          <Counter 
            id={counter.id}
            key={counter.id}
            value={counter.value}
            onIncrement={( id, value) => this.onIncrement( id, value)}
            onDecrement={(id, value) => this.onDecrement(id, value)}
          />
        ))}
        <Total sum={sum} />
      </div>
    );
  }
}
