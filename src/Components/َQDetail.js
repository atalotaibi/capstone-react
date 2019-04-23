import React, { Component } from "react";
import QAnswers from "./QAnswers";
import AnswerForm from "./AnswerForm";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import renderHTML from "react-render-html";
import loading from "./Loading";

class QDetail extends Component {
  componentDidMount() {
    console.log("qid is: ", this.props.match.params.questionID);
    this.props.fetchQDetail(this.props.match.params.questionID);
  }
  componentDidUpdate(prevProps) {
    if (
      this.props.match.params.questoinID !== prevProps.match.params.questoiinID
    ) {
      this.props.reset();

      this.props.fetchQDetail(this.props.match.params.questionID);
    }
  }
  render() {
    const { question } = this.props;
    const questoinID = this.props.match.params.questionID;
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            {/* <h4>{question.q_text}</h4> */}
            <h4>{renderHTML(question.q_text || "")}</h4>
            {/* <h5 className="card-title" /> */}
            <p className="card-text" />
            {/* <a className="btn btn-primary">Button</a> */}
            <p className="card-text" />{" "}
            {/* <Link to="/Search">
              <AnswerForm />
              <button type="submit">post</button>{" "}
            </Link> */}
          </div>

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
    question: state.questions.question
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: (questionID, history) =>
      dispatch(actionCreators.deleteQuestion(questionID, history)),
    fetchQDetail: questionID =>
      dispatch(actionCreators.fetchQDetail(questionID)),
    reset: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QDetail);
