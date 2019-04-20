import React, { Component } from "react";
import "./App.css";
import QForm from "./Components/QForm";
import QAnswers from "./Components/QAnswers";
import AnswerForm from "./Components/AnswerForm";

class App extends Component {
  render() {
    return (
      <div id="app" className="container">
        {/* <QForm /> */}
        <QAnswers />
        <AnswerForm />
      </div>
    );
  }
}

export default App;
