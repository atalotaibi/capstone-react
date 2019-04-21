import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";

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
