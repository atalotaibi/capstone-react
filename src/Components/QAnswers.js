import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
// Components
import Answer from "./Answer";
import AnswerForm from "./AnswerForm";

class QAnswers extends Component {
  componentDidMount() {
    // this.props.fetchAnswers(this.props.match.params.questoinID);
    let questionID = "1";
    this.props.fetchAnswers(questionID);
    console.log("answers: ", this.props.answers);
  }

  //   componentDidUpdate(prevProps, prevState) {
  //     let questoin = this.props.questoin;
  //     if (
  //       this.props.match.params.questoinID !== prevProps.match.params.questoinID
  //     ) {
  //       this.props.reset();
  //       this.props.fetchAnswers(this.props.match.params.questoinID);
  //     }
  //   }

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
