import React, { Component } from "react";


import Qlist from "./components/Qlist";

import "./App.css";
import QForm from "./Components/QForm";


class App extends Component {
  render() {
    return (

      <div className="App">
        <Qlist />

      <div id="app" className="container">
        <QForm />

      </div>
       </div>
    );
  }
}

export default App;
