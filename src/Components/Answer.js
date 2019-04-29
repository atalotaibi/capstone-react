import React, { Component } from "react";
import renderHTML from "react-render-html";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck } from "@fortawesome/free-solid-svg-icons";

class Answer extends Component {
  state = {
    checked: false
  };
  componentDidMount = () => {
    if (this.props.answer.approved) {
      console.log(this.props.answer.approved);
      this.setState({ checked: !this.state.checked });
      this.props.incrementCounter(true);
    }
  };
  handleClick = async () => {
    await this.setState({ checked: !this.state.checked });
    this.props.approveAnswer(this.props.answer.id, this.state.checked);
  };
  changeApproved = async () => {
    await this.setState({ checked: !this.state.checked });
    this.props.approveAnswer(this.props.answer.id, this.state.checked);
  };
  render() {
    const answer = this.props.answer;
    const { profile } = this.props;
    return (
      <div className="row">
        <div className="col-2">
          {profile && profile.is_expert ? (
            <div>
              {answer.approved ? (
                <div className="form-check form-check-inline">
                  <input
                    defaultChecked
                    className="form-check-input"
                    type="checkbox"
                    name="inlineCheckbox"
                    onChange={this.changeApproved}
                  />
                </div>
              ) : (
                <div className="form-check form-check-inline">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    name="inlineCheckbox"
                    onChange={this.handleClick}
                  />
                </div>
              )}
            </div>
          ) : (
            <div>
              {answer.approved ? <FontAwesomeIcon icon={faCheck} /> : <div />}
            </div>
          )}
        </div>
        <div className="col-10">
          <h4>{renderHTML(answer.a_text)}</h4>
        </div>{" "}
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    profile: state.authenticationReducer.profile
  };
};
const mapDispatchToProps = dispatch => {
  return {
    approveAnswer: (answerID, status) =>
      dispatch(actionCreators.approveAnswer(answerID, status)),
    incrementCounter: status =>
      dispatch(actionCreators.incrementCounter(status))
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Answer);
