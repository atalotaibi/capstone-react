import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import { Link } from "react-router-dom";

class AnswerForm extends Component {
  state = { a_text: "" };

  submitAnswer = e => {
    e.preventDefault();
    // if (this.state.a_text):
    let questionID = "1";
    //   sendAnswer(this.state, this.props.question.id, this.resetForm);
    this.props.sendAnswer(this.state, questionID, this.resetForm);
  };

  resetForm = (a_text = "") => this.setState({ a_text });

  render() {
    const { a_text } = this.state;
    return (
      <div>
        <form className="col-11 mx-auto" onSubmit={this.submitAnswer}>
          <Link to="/Answer">
            <button>
              <textarea
                className="form-control"
                rows="4"
                placeholder="Type your answer here"
                value={a_text}
                onChange={e => this.setState({ a_text: e.target.value })}
                onKeyUp={e => {
                  if (!e.shiftKey && e.key === "Enter") this.submitAnswer(e);
                }}
              />
            </button>
          </Link>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    sendAnswer: (a_text, questionID, reset) =>
      dispatch(actionCreators.sendAnswer(a_text, questionID, reset))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AnswerForm);
