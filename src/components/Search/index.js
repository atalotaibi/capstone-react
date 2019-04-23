import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch, faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Qlist from "../Qlist";

import * as actionCreators from "../../store/actions";

class Search extends Component {
  // state = {
  //   major: ""
  // };
  // textChangeHandler = e => {
  //   this.setState({ [e.target.name]: e.target.value });
  //   this.props.filterQuestionsByMajor(this.state);
  // };
  // handleChange = e => {
  //   this.setState({ query: e.target.value });
  // };
  // componentDidUpdate() {
  //   this.props.fetchQ();
  // }

  render() {
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        {/* <div className="form-group">
          <select
            type="select"
            placeholder="select"
            name="major"
            onChange={event =>
              event.target.value
                ? this.props.filterQuestionsByMajor(event.target.value)
                : this.props.reset() && this.props.fetchQ()
            }
            multiple="multiple"
            className="form-control"
          >
            <option value="greeting">greeting</option>
            <option value="math">math</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div> */}
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="all"
            onChange={() => {
              this.props.reset();
              this.props.fetchQ();
            }}
          />
          <label className="form-check-label" for="inlineRadio1">
            all
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="greeting"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            greeting
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="math"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            math
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="true"
            onChange={event =>
              this.props.filterQuestionsByAnswer(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            answered
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="false"
            onChange={event =>
              this.props.filterQuestionsByAnswer(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            unanswered
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="true"
            onChange={event =>
              this.props.filterQuestionsByApprove(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            approved
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="false"
            onChange={event =>
              this.props.filterQuestionsByApprove(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            unapproved
          </label>
        </div>

        <div className="input-group my-3">
          <input
            className="form-control"
            type="text"
            placeholder="Enter your search"
            onChange={event => {
              this.props.filterQuestions(event.target.value);
            }}
          />

          <div className="AAB ">
            <span className="AAC">
              <Link className="AAA" to="/QForm">
                <FontAwesomeIcon icon={faPlusSquare} />
              </Link>
            </span>
          </div>
        </div>
        <div>
          <Qlist />
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => {
  return {
    filterQuestions: query => dispatch(actionCreators.filterQuestions(query)),
    filterQuestionsByMajor: major =>
      dispatch(actionCreators.filterQuestionsByMajor(major)),
    filterQuestionsByAnswer: status =>
      dispatch(actionCreators.filterQuestionsByAnswer(status)),
    filterQuestionsByApprove: status =>
      dispatch(actionCreators.filterQuestionsByApprove(status)),
    fetchQ: () => dispatch(actionCreators.fetchQ()),
    reset: () => dispatch({ type: "RESET" })
  };
};
export default connect(
  null,
  mapDispatchToProps
)(Search);
