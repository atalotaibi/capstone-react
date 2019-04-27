import { combineReducers } from "redux";

// Reducers

import questions from "./questionsReducer";
import authenticationReducer from "./authentication";
import errorsReducer from "./errorsReducer";

import majorReducer from "./majorReducer";

import profileReducer from "./profileReducer";


export default combineReducers({
  questions: questions,
  authenticationReducer: authenticationReducer,
  errors: errorsReducer,

  majorReducer: majorReducer

  profileReducer: profileReducer

});
