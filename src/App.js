import React, { Component } from "react";
import "./App.css";
import Qlist from "./Components/Qlist";
import QDetail from "./Components/َQDetail";

import Search from "./Components/Search";
import Home from "./Components/Home";
import QForm from "./Components/QForm";
import QAnswers from "./Components/QAnswers";
import AnswerForm from "./Components/AnswerForm";
import Profile from "./Components/Profile/ProfileDetail";
// import Profile from "./Components/Profile/ProfileUpdate";
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
import questions from "./store/reducers/questionsReducer";

import ProfileDetail from "./Components/Profile";

import home from "./Components/Home/home";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


class App extends Component {
  componentDidMount = async () => {
    await this.props.checkForExpiredToken();
    this.props.fetchMajors();
  };

  render() {
    return (
      <div>

        <div className="content-container">
          <Switch>
            <BrowserRouter>
              <Header />
              <Route exact path="/Home" component={home} />
              <Route exact path="/signup" component={RegistrationForm} />
              <Route exact path="/login" component={LoginForm} />
              <Route exact path="/AnswerForm" component={AnswerForm} />
              <Route exact path="/Search" component={Search} />
              <Route exact path="/Qlist" component={Qlist} />

              <Route path="/questions/:questionID" component={QDetail} />
              <Route exact path="/QForm" component={QForm} />
              <Route exact path="/QAnswers" component={QAnswers} />
              <Route exact path="/Profile" component={ProfileDetail} />
              <Footer />
            </BrowserRouter>
          </Switch>
        </div>
        
      </div>
    );
  }
}
const mapStateToProps = state => {
  return {
    user: state.authenticationReducer.user,
    userLoading: state.authenticationReducer.userLoading,
    questions: state.questions.filteredQuestions,
    majors: state.questions.majors
  };
};

const mapDispatchToProps = dispatch => {
  return {
    checkForExpiredToken: () => dispatch(actionCreators.checkForExpiredToken()),
    fetchAnswers: () => dispatch(actionCreators.fetchAnswers()),
    fetchQ: () => dispatch(actionCreators.fetchQ()),
    fetchMajors: () => dispatch(actionCreators.fetchMajors())
  };
};



export default withRouter(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(App)
);
