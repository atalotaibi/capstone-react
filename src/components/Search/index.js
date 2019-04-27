import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlusSquare } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import Qlist from "../Qlist";

import * as actionCreators from "../../store/actions";

class Search extends Component {
  render() {
    const { majors } = this.props;
    const majorList = majors.map(major => major.major);
    return (
      <div className="form-group col-lg-6 col-12 mx-auto">
        <br />
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
            value="1"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[0]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="2"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[1]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="3"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[2]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="4"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[3]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="5"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[4]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="6"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[5]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="7"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[6]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="8"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[7]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="9"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[8]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="10"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[9]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="11"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[10]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="12"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[11]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="13"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[12]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="14"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[13]}
          </label>
        </div>
        <div className="form-check form-check-inline">
          <input
            className="form-check-input"
            type="radio"
            name="inlineRadioOptions"
            id="inlineRadio1"
            value="15"
            onChange={event =>
              this.props.filterQuestionsByMajor(event.target.value)
            }
          />
          <label className="form-check-label" for="inlineRadio1">
            {majorList[14]}
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
              <Link className="AAA" to={this.props.user ? "/QForm" : "/login"}>
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
const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    majors: state.questions.majors
  };
};
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
  mapStateToProps,
  mapDispatchToProps
)(Search);
