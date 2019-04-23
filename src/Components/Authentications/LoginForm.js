import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "../../store/actions";
import { Link } from "react-router-dom";
import { Search } from "../Search";
class LoginForm extends Component {
  state = {
    username: "",
    password: ""
  };
  componentDidMount() {
    if (this.props.user) {
      this.props.history.push("/Search");
    }
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = (e, type) => {
    e.preventDefault();
    if (type === "login") {
      this.props.login(this.state, this.props.history);
    }
  };

  render() {
    const error = this.props.errors;
    const type = this.props.match.url.substring(1);
    return (
      <div className="card col-6 mx-auto p-0 mt-5">
        <div className="card-body">
          <h5 className="card-title mb-4" />
          <form onSubmit={event => this.submitHandler(event, type)}>
            <div className="form-group">
              <input
                className=" form-control "
                type="text"
                placeholder="Username"
                name="username"
                onChange={this.changeHandler}
              />
              {/* <div className="invalid-feedback">{error.username}</div> */}
            </div>
            <div className="form-group">
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                name="password"
                onChange={this.changeHandler}
              />
            </div>

            <input
              className="btn btn-danger btn-block"
              style={{ color: "#FFF", backgroundColor: "#fe687b" }}
              type="submit"
              value={type.replace(/^\w/, c => c.toUpperCase())}
            />
          </form>
        </div>
        <div className="card-footer text-center">
          <Link
            to={type === "login" ? "/signup" : "/login"}
            className="btn btn-small btn-link"
          >
            {type === "login"
              ? "Register an account"
              : "Login with an existing account"}
          </Link>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  login: (userData, history) =>
    dispatch(actionCreators.login(userData, history))
});

const mapStateToProps = state => ({
  user: state.authenticationReducer.user,
  error: state.errors
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginForm);
