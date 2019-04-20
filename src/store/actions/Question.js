import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({

  baseURL: "http://127.0.0.1:8000/api/"

});
export const askQ = Q => {
  return async dispatch => {
    try {

      const res = await instance.post("question/create/", Q);

      const newQ = res.data;
      dispatch({
        type: actionTypes.ASK_Q,
        payload: newQ
      });
    } catch (error) {
      console.error(error.response.data);
    }
  };
};

export const fetchQ = () => {
  return async dispatch => {
    try {
      const res = await instance.get("question/list/");
      const questions = res.data;
      dispatch({
        type: actionTypes.FETCH_Q,
        payload: questions
      });
    } catch (err) {
      console.error("ERROR: ", err);
    }
  };
};

export const filterQuestions = query => {
  return {
    type: actionTypes.QUESTION_FILTER,
    payload: query
  };
};
