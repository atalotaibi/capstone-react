import * as actionTypes from "../actions/actionTypes";

const initialState = {
  user: null,
  userLoading: true,
  profile: null
};

const profileReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_PROFILE_DETAIL:
      console.log("[FETCH_PROFILE_DETAIL] => ", action.payload);
      return {
        ...state,
        profile: action.payload
      };
    case actionTypes.PROFILE_UPDATE:
      return {
        ...state,
        profile: action.payload
      };

    default:
      return state;
  }
};

export default profileReducer;
