import React, { Component } from "react";
import QAnswers from "./QAnswers";
import AnswerForm from "./AnswerForm";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import renderHTML from "react-render-html";

class QDetail extends Component {
  state = {
    boolean: false,
    counter: this.props.counter
  };
  componentDidMount() {
    console.log("from componentdidmount", this.props.match.params.questionID);
    this.props.fetchQDetail(this.props.match.params.questionID);
  }
  componentDidUpdate(prevProps) {
    if (prevProps.counter !== this.props.counter) {
      this.setState({ counter: this.props.counter });
    }
    if (
      this.props.match.params.questionID !== prevProps.match.params.questionID
    ) {
      this.props.resetCounter();
      this.props.reset();
      this.props.fetchQDetail(this.props.match.params.questionID);
    }
  }
  render() {
    console.log("Counter", this.state.counter);
    const { question } = this.props;
    console.log(question);
    const questoinID = this.props.match.params.questionID;
    const { profile } = this.props;
    console.log(profile);
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            <h4>{renderHTML(question.q_text || "")}</h4>
            <p className="card-text" />
            <p className="card-text" />{" "}
          </div>
          <div>
            {(profile && profile.is_expert) || "" ? (
              <div>
                <div className="col-md-2">
                  <button
                    onClick={() =>
                      this.props.deleteQuestion(questoinID, this.props.history)
                    }
                    className="btn btn-danger"
                  >
                    Remove
                  </button>
                </div>
                <div className="col-md-2">
                  <button
                    onClick={async () => {
                      await this.setState({
                        boolean: this.state.counter > 0 ? true : false
                      });
                      this.props.approveQuestion(
                        questoinID,
                        this.state.boolean,
                        this.props.history
                      );
                      await this.props.resetCounter();
                    }}
                    className="btn btn-danger"
                  >
                    Done
                  </button>
                </div>
              </div>
            ) : (
              <div> </div>
            )}
          </div>
        </div>
        <div>
          <QAnswers id={questoinID} />
        </div>

        <div>
          <AnswerForm id={questoinID} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    question: state.questions.question,
    counter: state.questions.counter,
    profile: state.authenticationReducer.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: (questionID, history) =>
      dispatch(actionCreators.deleteQuestion(questionID, history)),
    fetchQDetail: questionID =>
      dispatch(actionCreators.fetchQDetail(questionID)),
    reset: () => dispatch({ type: "RESET" }),
    resetCounter: () => dispatch({ type: "RESET_COUNTER" }),
    approveQuestion: (questionID, status, history) =>
      dispatch(actionCreators.approveQuestion(questionID, status, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QDetail);
