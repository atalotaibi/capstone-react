import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:8000/api/"
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
      const res = await instance.get("questions/");
      const questions = res.data;
      dispatch({
        type: actionTypes.FETCH_Q,
        payload: questions
      });
    } catch (err) {
      console.error(err);
    }
  };
};

export const fetchAnswers = questionID => async dispatch => {
  console.log("question.js fetch answer");
  try {
    const res = await instance.get(`${questionID}/`);
    const question = res.data;
    console.log(res.data);

    dispatch({
      type: actionTypes.FETCH_ANSWERS,
      payload: question
    });
  } catch (error) {
    console.error(error);
  }
};

export const sendAnswer = (answer, questionID, reset = () => {}) => {
  answer = {
    ...answer
  };

  return async dispatch => {
    try {
      reset();
      await instance.post(`${questionID}/send`, answer);
    } catch (error) {
      reset(answer.answer);
      console.error(error);
      if (error.response) console.error(error.response.data);
    }
  };
};
