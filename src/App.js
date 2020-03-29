import React, { Component } from "react";
import Home from "./home";
import HomeWithoutProps from './HomeWithoutProps';

export default class App extends Component {
  render() {
    return (
      <div>
        <Home />
        <HomeWithoutProps />
      </div>
    );
  }
}
