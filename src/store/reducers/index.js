import { combineReducers } from "redux";

// Reducers

import questions from "./questionsReducer";
import authenticationReducer from "./authentication";
import errorsReducer from "./errorsReducer";
import majorReducer from "./majorReducer";

export default combineReducers({
  questions: questions,
  authenticationReducer: authenticationReducer,
  errors: errorsReducer,
  majorReducer: majorReducer
});
