import * as actionTypes from "../actions/actionTypes";

const initialState = {
  questions: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ASK_Q:
      return {
        ...state,
        channels: state.questions.concat(action.payload)
      };
    default:
      return state;
  }
};

export default reducer;
