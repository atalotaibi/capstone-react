import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";

import Qcards from "./Qcards";

class Qlist extends Component {
  componentDidMount() {
    this.props.reset();
    this.props.fetchQ();
  }

  render() {
    const Qlist = this.props.filteredQuestions.map(question => (
      <Qcards question={question} key={question.q_text} />
    ));

    return <div>{Qlist}</div>;
  }
}
const mapStateToProps = state => {
  return {
    filteredQuestions: state.questions.filteredQuestions
  };
};

const mapDispatchToProps = dispatch => {
  return {
    fetchQ: () => dispatch(actionCreators.fetchQ()),
    reset: () => dispatch({ type: "RESET" })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Qlist);
