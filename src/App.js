import React from "react";
import "./App.css";
import Router from "./router/router";
class App extends React.Component {
  render() {
    return (
      <div>
        <h1> E-Commerce</h1>
        <hr />
        <Router></Router>
      </div>
    );
  }
}

export default App;
