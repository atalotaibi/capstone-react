import * as actionTypes from "../actions/actionTypes";

const initialState = {
  questions: [],
  question: {},
  answers: [],
  filteredQuestions: [],
  loading: true,
  question1: [],
  flag_: false
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
        loading: false,
        flag_: false
      };

    case actionTypes.FETCH_QUESTION_DETAIL:
      return {
        ...state,
        question: action.payload
      };

    case actionTypes.FETCH_ANSWERS:
      return {
        ...state,
        answers: action.payload
      };
    case actionTypes.QUESTION_FILTER:
      return {
        ...state,
        filteredQuestions: state.flag_
          ? state.question1.filter(question => {
              return `${question.q_text}`
                .toLowerCase()
                .includes(action.payload);
            })
          : state.questions.filter(question => {
              return `${question.q_text}`
                .toLowerCase()
                .includes(action.payload);
            })
      };
    case actionTypes.FILTER_QUESTION_BY_Major:
      console.log(state.questions);
      return {
        ...state,
        flag_: true,
        filteredQuestions: state.questions.filter(question => {
          if (question.major.name === action.payload) {
            return `${question.q_text}`.toLowerCase();
          }
        }),
        question1: state.questions.filter(question => {
          if (question.major.name === action.payload) {
            return `${question.q_text}`.toLowerCase();
          }
        })
      };
    case actionTypes.FILTER_QUESTION_BY_ANSWER:
      return {
        ...state,
        flag_: true,
        filteredQuestions: state.questions.filter(question => {
          if (question.answered.toString() === action.payload) {
            return `${question.q_text}`.toLowerCase();
          }
        }),

        question1: state.questions.filter(question => {
          if (question.answered.toString() === action.payload) {
            return `${question.q_text}`.toLowerCase();
          }
        })
      };
    case actionTypes.FILTER_QUESTION_BY_APPROVE:
      return {
        ...state,
        flag_: true,
        filteredQuestions: state.questions.filter(question => {
          if (question.approved.toString() === action.payload) {
            return `${question.q_text}`.toLowerCase();
          }
        }),

        question1: state.questions.filter(question => {
          if (question.approved.toString() === action.payload) {
            return `${question.q_text}`.toLowerCase();
          }
        })
      };
    case actionTypes.DELETE_QUESTION:
      return {
        ...state,
        filteredQuestions: state.questions.filter(
          questionID => questionID !== action.payload
        )
      };
    case actionTypes.SEND_ANSWERS:
      return {
        ...state,
        answers: state.answers.concat(action.payload)
      };
    case actionTypes.RESET:
      console.log("reset reducer");
      return {
        ...state,
        questions: [],
        question: [],
        filteredQuestions: []
      };
    default:
      return state;
  }
};

export default questionsReducer;
