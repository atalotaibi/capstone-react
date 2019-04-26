import React, { Component } from "react";
import * as actionCreators from "../store/actions";
import { connect } from "react-redux";
import { Qlist } from "./Qlist";
import { Link } from "react-router-dom";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Major from "./Major";

class QForm extends Component {
  state = {
    q_text: "",
    major: ""
  };

  componentDidMount() {
    this.props.fetchMajors();
  }
  textChangeHandler = e => this.setState({ q_text: e });

  majorChangeHandler = e => this.setState({ [e.target.name]: e.target.value });

  handleSubmit = event => {
    event.preventDefault();
    this.props.askQ(this.state, this.props.history);
    console.log(this.state);
    this.setState({
      q_text: ""
    });
  };
  // majors.length <- 0
  // if(!!majors.length) <- 0 to false
  // assume majors = [A,B]
  // majors.length <- 2
  // 2 <- true

  getView = () => {
    let major = "";

    // if (this.props.question) {
    major = this.props.majors.map(major => (
      <Major key={major.id.name} major={major} />
    ));
    // }

    return (
      <select
        type="select"
        name="major"
        onChange={this.majorChangeHandler}
        className="form-control"
      >
        {major}
      </select>
    );
  };

  render() {
    console.log(this.props.majors);
    return (
      <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          {/* <input
            className="orm-control"
            type="select"
            placeholder="select"
            name="major"
            onChange={this.textChangeHandler}
          /> */}

          <option selected="selected">Select The Major</option>
          {/* {this.getView()} */}
          {/* <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option> */}
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
          <div>
            {/* <Link to="/Qlist"> */}
            <button type="submit" onClick={() => this.handleSubmit}>
              post
            </button>
            {/* </Link> */}
          </div>
          {/* <button type="submit">post</button> */}
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
    majors: state.majorReducer.majors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    askQ: (question, history) =>
      dispatch(actionCreators.askQ(question, history)),
    fetchMajors: majors => dispatch(actionCreators.fetchMajors(majors))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(QForm);
