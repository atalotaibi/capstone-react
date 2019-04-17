import React, { Component } from "react";
import "./App.css";
import QForm from "./Components/QForm";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        <QForm />
      </div>
    );
  }
}

export default App;
