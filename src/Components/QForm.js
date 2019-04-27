import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import { Qlist } from "./Qlist";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class QForm extends Component {
  state = {
    q_text: "",
    major: ""
  };
  textChangeHandler = e => this.setState({ q_text: e });

  majorChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
    console.log("[QForm.js handlsubmit]");
    this.props.askQ(this.state, this.props.history);
    this.setState({
      q_text: "",
      major: ""
    });
  };

  render() {
    const { majors } = this.props;
    const majorList = majors.map(major => major.major);

    return (
      <form onSubmit={this.handleSubmit}>
        <br /> <br /> <br /> <br />
        <div className="row">
          <div className="col-3">
            <div className="form-group">
              <select
                type="select"
                name="major"
                onChange={this.majorChangeHandler}
                className="form-control"
              >
                <option selected="selected">Select The Major</option>
                <option value="1">{majorList[0]}</option>
                <option value="2">{majorList[1]}</option>
                <option value="3">{majorList[2]}</option>
                <option value="4">{majorList[3]}</option>
                <option value="5">{majorList[4]}</option>
                <option value="6">{majorList[5]}</option>
                <option value="7">{majorList[6]}</option>
                <option value="8">{majorList[7]}</option>
                <option value="9">{majorList[8]}</option>
                <option value="10">{majorList[9]}</option>
                <option value="11">{majorList[10]}</option>
                <option value="12">{majorList[11]}</option>
                <option value="13">{majorList[12]}</option>
                <option value="14">{majorList[13]}</option>
                <option value="15">{majorList[14]}</option>
              </select>
            </div>
          </div>
          <div className="col-7">
            <div className="form-group">
              <ReactQuill
                modules={QForm.modules}
                formats={QForm.formats}
                name="q_text"
                placeholder="Body"
                onChange={this.textChangeHandler}
              />

              <div>
                <button type="submit" onClick={() => this.handleSubmit}>
                  post
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    );
  }
}

QForm.modules = {
  toolbar: [
    [{ header: "1" }, { header: "2" }, { font: [] }],
    [{ size: [] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [{ list: "ordered" }, { list: "bullet" }],
    ["link", "image", "video"],
    ["clean"],
    ["code-block"]
  ]
};

QForm.formats = [
  "header",
  "font",
  "size",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "link",
  "image",
  "video",
  "code-block"
];

const mapStateToProps = state => {
  return {
    majors: state.questions.majors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    askQ: (question, history) =>
      dispatch(actionCreators.askQ(question, history))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QForm);
