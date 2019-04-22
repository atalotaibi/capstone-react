import React, { Component } from "react";
import { Link } from "react-router-dom";
import AnswerForm from "./AnswerForm";

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
            <Link to="/Qlist">
              <AnswerForm />
              <button type="submit">post</button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Qcards;
