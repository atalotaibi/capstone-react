import { combineReducers } from "redux";

// Reducers
import questions from "./QReducer";

export default combineReducers({
  questions: questions
});
