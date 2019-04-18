import { combineReducers } from "redux";

// Reducers
import questions from "./questionsReducer";

export default combineReducers({
  questions: questions
});
