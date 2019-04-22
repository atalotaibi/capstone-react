import React, { Component } from "react";
import renderHTML from "react-render-html";
class Answer extends Component {
  render() {
    const answer = this.props.answer;

    return (
      <div>
        <h4>{renderHTML(answer.a_text)}</h4>
      </div>
    );
  }
}

export default Answer;
