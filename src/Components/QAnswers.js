import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
// Components
import Answer from "./Answer";
import AnswerForm from "./AnswerForm";
import { Link } from "react-router-dom";

class QAnswers extends Component {
  componentDidMount() {
    const questionID = this.props.id;
    console.log("qid in qanswers component: ", questionID);
    this.props.fetchAnswers(questionID);
  }

  getView = () => {
    let answer = "";

    // if (this.props.question) {
    answer = this.props.answers.map(answer => (
      <Answer key={answer.id} answer={answer} />
    ));
    // }

    return <tbody>{answer}</tbody>;
  };
  render() {
    // const questionID = this.props.match.params.questionID;
    // const questionID = 1;
    return (
      <div>
        <div className="MessageContainer text-break">
          <div className="MessagesList">
            <table className="msg ml-3">{this.getView()}</table>
          </div>
          <div style={{ float: "left", clear: "both" }} />
        </div>
        <div className="footer1">
          {/* <AnswerForm questionID={questionID} /> */}
          <Link to="/Qlist" />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    answers: state.questions.answers
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchAnswers: questionID =>
      dispatch(actionCreators.fetchAnswers(questionID))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QAnswers);
