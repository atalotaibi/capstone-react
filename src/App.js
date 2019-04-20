import React, { Component } from "react";
import "./App.css";
import Qlist from "./components/Qlist";

import Search from "./components/Search";

import QForm from "./Components/QForm";

import {
  Switch,
  Route,
  Redirect,
  withRouter,
  BrowserRouter
} from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";


// Actions
import * as actionCreators from "./store/actions";
import { connect } from "react-redux";
//componetnts
// import Authentications from "./Components/Authentications";
// import Navbar from "./Components/Navbar";
import RegistrationForm from "./Components/Authentications/RegistrationForm";
import LoginForm from "./Components/Authentications/LoginForm";
class App extends Component {
  componentDidMount = async () => {
    await this.props.checkForExpiredToken();
  };

  render() {
    return (

      <div>
        
        <div className="container-fluid my-4">
          <BrowserRouter>
            <Route exact path="/signup" component={RegistrationForm} />
            <Route exact path="/login" component={LoginForm} />
          </BrowserRouter>
        </div>
      </div>


      <div className="App">
        <Search />
        {/* <SearchBar /> */}
        <Qlist />

      <div id="app" className="container">
        <QForm />


      </div>
       </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    userLoading: state.authenticationReducer.userLoading
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
