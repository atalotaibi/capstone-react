import React, { Component } from "react";
import renderHTML from "react-render-html";
class Answer extends Component {
  render() {
    const answer = this.props.answer;
    return (
      <div>
        <h1>{renderHTML(answer.a_text)}</h1>
      </div>
    );
  }
}

export default Answer;
