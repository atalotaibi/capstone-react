import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import Qcards from "./Qcards";

class Qlist extends Component {
  // state = {
  //   query: ""
  // };
  // updateQuery = e => {
  //   this.setState({ query: e.target.value });
  // };

  componentDidMount() {
    this.props.fetchQ();
  }

  //Use state to copy the questions from the central state
  //Filter on the internal state

  render() {
    // let filteredQuestions = this.props.questions;

    // if (this.state.query) {
    //   filteredQuestions = this.props.questions.filter(question =>
    //     question.q_text.toLowerCase().includes(this.state.query.toLowerCase())
    //   );
    // }

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
    fetchQ: () => dispatch(actionCreators.fetchQ())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Qlist);
