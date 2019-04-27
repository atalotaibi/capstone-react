import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  userLoading: true,
  profile: null
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CURRENT_USER:
      return {
        ...state,
        user: action.payload,
        userLoading: false
      };
    case actionTypes.FETCH_PROFILE_DETAIL:
      return {
        ...state,
        profile: action.payload
      };
    default:
      return state;
  }
};

export default authenticationReducer;
