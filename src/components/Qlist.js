import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";

import Qcards from "./Qcards";

class Qlist extends Component {
  componentDidMount() {
    this.props.fetchQ();
  }

  render() {
    const Qlist = this.props.questions.map(question => (
      <Qcards question={question} key={question.q_text} />
    ));

    return <div>{Qlist}</div>;
  }
}
const mapStateToProps = state => {
  return {
    questions: state.questions.questions
  };
};
const mapDispatchToProps = dispatch => {
  return {
    fetchQ: () => dispatch(actionCreators.fetchQ())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Qlist);
