import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import renderHTML from "react-render-html";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faThumbsUp, faPenFancy } from "@fortawesome/free-solid-svg-icons";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
class Qcards extends Component {
  render() {
    const { question } = this.props;
    return (
      <div>
        <div className="card w-75">
          <div className="card-body">
            <Link to={this.props.user ? `/questions/${question.id}` : "/login"}>
              <h4>{renderHTML(question.q_text)}</h4>
            </Link>
          </div>

          {question.approved ? <FontAwesomeIcon icon={faThumbsUp} /> : <div />}
          {question.answered ? <p>{question.answers.length}</p> : <div />}
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user
  };
};
const mapDispatchToProps = dispatch => {
  return {
    deleteQuestion: questionID =>
      dispatch(actionCreators.deleteQuestion(questionID))
  };
};

export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(Qcards)
);
