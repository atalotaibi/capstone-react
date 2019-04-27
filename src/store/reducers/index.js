import { combineReducers } from "redux";

// Reducers

import questions from "./questionsReducer";
import authenticationReducer from "./authentication";
import errorsReducer from "./errorsReducer";
import profileReducer from "./profileReducer";

export default combineReducers({
  questions: questions,
  authenticationReducer: authenticationReducer,
  errors: errorsReducer,
  profileReducer: profileReducer
});
