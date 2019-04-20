import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  userLoading: true
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        userLoading: false
      };

    default:
      return state;
  }
};

export default authenticationReducer;
