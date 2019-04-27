import * as actionTypes from "../actions/actionTypes";

const initialState = {
  majors: []
};
//majors.length <- 0
//if(!!majors.length) <- 0 to false 
//assume majors = [A,B]
//majors.length <- 2
// 2 <- true

const majorsReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_MAJORS:
      return {
        ...state,
        majors: action.payload
      };

    default:
      return state;
  }
};

export default majorsReducer;
