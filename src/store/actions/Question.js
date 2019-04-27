import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const askQ = (Q, history) => {
  return async dispatch => {
    try {
      const res = await instance.post("question/create/", Q);

      const newQ = res.data;
      dispatch({
        type: actionTypes.ASK_Q,
        payload: newQ
      });
      history.push("/Search");
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
export const fetchMajors = () => {
  return async dispatch => {
    try {
      const res = await instance.get("major/list/");
      const majors = res.data;
      dispatch({
        type: actionTypes.FETCH_MAJORS,
        payload: majors
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
      const res = await instance.post(`${questionID}/send`, answer);
      const answer_ = res.data;

      dispatch({
        type: actionTypes.SEND_ANSWERS,
        payload: answer_
      });
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

export const deleteQuestion = (questionID, history) => {
  return async dispatch => {
    try {
      const res = await instance.delete(`question/${questionID}/delete/`);
      const deleteItem = res.data;
      dispatch(fetchQ());
      dispatch({
        type: actionTypes.DELETE_QUESTION,
        payload: questionID
      });
      history.push("/Search");
    } catch (err) {
      console.error("Error while deleteing the cart item", err);
    }
  };
};

export const filterQuestionsByMajor = major => {
  return {
    type: actionTypes.FILTER_QUESTION_BY_Major,
    payload: major
  };
};
export const filterQuestionsByAnswer = status => {
  return {
    type: actionTypes.FILTER_QUESTION_BY_ANSWER,
    payload: status
  };
};
export const filterQuestionsByApprove = status => {
  return {
    type: actionTypes.FILTER_QUESTION_BY_APPROVE,
    payload: status
  };
};
export const fetchQDetail = questionID => {
  return async dispatch => {
    try {
      const res = await instance.get(`question/${questionID}`);
      const question = res.data;
      dispatch({
        type: actionTypes.FETCH_QUESTION_DETAIL,
        payload: question
      });
    } catch (error) {}
  };
};
export const approveAnswer = (answerID, status) => {
  return async dispatch => {
    try {
      const res = await instance.put(`${answerID}/status/`, {
        approved: status
      });

      const status_ = res.data;

      dispatch({
        type: actionTypes.APPROVE_ANSWER,
        payload: status_
      });
    } catch (err) {
      console.error("ERROR: ", err);
    }
  };
};
export const approveQuestion = (questionID, status, history) => {
  return async dispatch => {
    try {
      await instance.put(`${questionID}/qstatus`, { approved: status });
      history.push("/Search");
    } catch (err) {
      console.error("ERROR: ", err);
    }
  };
};
export const incrementCounter = status => {
  return {
    type: actionTypes.INCREMENT_COUNTER,
    payload: status
  };
};
