import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../store/actions";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

class AnswerForm extends Component {
  state = { a_text: "" };

  submitAnswer = e => {
    e.preventDefault();
    const questionID = this.props.id;
    this.props.sendAnswer(this.state, questionID, this.resetForm);
  };

  resetForm = (a_text = "") => this.setState({ a_text });

  render() {
    const { a_text } = this.state;
    const questionID = this.props.id;

    return (
      <div>
        <form className="col-11 mx-auto" onSubmit={this.submitAnswer}>
          <ReactQuill
            modules={AnswerForm.modules}
            formats={AnswerForm.formats}
            value={a_text}
            rows="4"
            placeholder="Body"
            onChange={e => this.setState({ a_text: e })}
            onKeyUp={e => {
              if (!e.shiftKey && e.key === "Enter") this.submitAnswer(e);
            }}
          />
          {/* <textarea
                className="form-control"
                rows="4"
                placeholder="Type your answer here"
                value={a_text}
                onChange={e => this.setState({ a_text: e.target.value })}
                onKeyUp={e => {
                  if (!e.shiftKey && e.key === "Enter") this.submitAnswer(e);
                }}
              /> */}

          <button className="btn btn-primary">Post</button>
        </form>
      </div>
    );
  }
}

AnswerForm.modules = {
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

AnswerForm.formats = [
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

const mapDispatchToProps = dispatch => {
  return {
    sendAnswer: (a_text, questionID, reset) =>
      dispatch(actionCreators.sendAnswer(a_text, questionID, reset))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(AnswerForm);
