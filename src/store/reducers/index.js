import { combineReducers } from "redux";

// Reducers
import questions from "./QReducer";
import authenticationReducer from "./authentication";
import errorsReducer from "./errorsReducer";
export default combineReducers({
  questions: questions,
  authenticationReducer: authenticationReducer,
  errors: errorsReducer
});
