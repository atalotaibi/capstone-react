import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const askQ = Q => {
  console.log("action works");
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

export const fetchAnswers = questionID => async dispatch => {
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

export const filterQuestions = query => {
  return {
    type: actionTypes.QUESTION_FILTER,
    payload: query
  };
};

export const deleteQuestion = questionID => {
  return async dispatch => {
    try {
      const res = await instance.delete(`question/${questionID}/delete/`);
      const deleteItem = res.data;
      dispatch(fetchQ());
      dispatch({
        type: actionTypes.DELETE_QUESTION,
        payload: questionID
      });
    } catch (err) {
      console.error("Error while deleteing the cart item", err);
    }
  };
};

export const filterQuestionsByMajor = major => {
  console.log("reducer", major);
  return {
    type: actionTypes.FILTER_QUESTION_BY_Major,
    payload: major
  };
};
