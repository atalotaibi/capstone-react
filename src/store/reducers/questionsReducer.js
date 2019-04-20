import * as actionTypes from "../actions/actionTypes";

const initialState = {
  questions: [],
  answers: [],
  filteredQuestions: [],
  loading: true
};

const questionsReducer = (state = initialState, action) => {


  switch (action.type) {
    case actionTypes.ASK_Q:
      return {
        ...state,
        questions: state.questions.concat(action.payload)
      };

    case actionTypes.FETCH_Q:
      return {
        ...state,

        questions: state.questions.concat(action.payload),
        filteredQuestions: [...action.payload],
        loading: false
      };

    case actionTypes.FETCH_ANSWERS:
      return {
        ...state,
        answers: action.payload


      };
    case actionTypes.QUESTION_FILTER:
      return {
        ...state,
        filteredQuestions: state.questions.filter(question => {
          return `${question.q_text}`.toLowerCase().includes(action.payload);
        })

      };

    default:
      return state;
  }
};


export default questionsReducer;

