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
    this.props.askQ(this.state);
    this.setState({
      q_text: "",
      major: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <input
            className="orm-control"
            type="select"
            placeholder="select"
            name="major"
            onChange={this.textChangeHandler}
          />
          <select
            type="select"
            placeholder="select"
            name="major"
            onChange={this.majorChangeHandler}
            className="form-control"
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>
        </div>
        <div className="form-group">
          <ReactQuill
            modules={QForm.modules}
            formats={QForm.formats}
            name="q_text"
            placeholder="Body"
            onChange={this.textChangeHandler}
          />
          {/* <input
            className="form-control"
            type="text"
            placeholder="Ask"
            name="q_text"
            onChange={this.textChangeHandler}
          /> */}

          <button type="submit">post</button>

          {/* <Link to="/Qlist">
            <button type="submit">post</button>
          </Link> */}
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

const mapDispatchToProps = dispatch => {
  return {
    askQ: question => dispatch(actionCreators.askQ(question))
  };
};

export default connect(
  null,
  mapDispatchToProps
)(QForm);
