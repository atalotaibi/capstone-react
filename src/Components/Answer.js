import React, { Component } from "react";
class Answer extends Component {
  render() {
    const answer = this.props.answer;

    return (
      <div>
        <h4>{answer.a_text}</h4>
      </div>
    );
  }
}

export default Answer;
