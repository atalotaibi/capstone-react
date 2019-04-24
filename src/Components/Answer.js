import React, { Component } from "react";
import renderHTML from "react-render-html";
class Answer extends Component {
  render() {
    const answer = this.props.answer;
    return (
      <div>
        <div className="form-group col-lg-12 col-12 mx-auto">
          <div className="card w-100">
            <div className="card-body">
              <h4>{renderHTML(answer.a_text)}</h4>
            </div>{" "}
          </div>
        </div>
      </div>
    );
  }
}

export default Answer;
