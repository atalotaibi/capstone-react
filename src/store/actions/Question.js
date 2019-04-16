import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://localhost:3000/"
});
export const askQ = Q => {
  return async dispatch => {
    try {
      const res = await instance.post("/ask/", Q);
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
