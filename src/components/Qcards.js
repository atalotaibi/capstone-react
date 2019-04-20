import React, { Component } from "react";

class Qcards extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            <h5 className="card-title">{question.q_text}</h5>
            <p className="card-text">
              With supporting text below as a natural lead-in to additional
              content.
            </p>
            <a className="btn btn-primary">Button</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Qcards;
