import * as actionTypes from "./actionTypes";

import axios from "axios";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});
export const fetchMajors = () => {
  console.log("action works");
  return async dispatch => {
    try {
      const res = await instance.get("major/list/");

      const majors = res.data;
      dispatch({
        type: actionTypes.FETCH_MAJORS,
        payload: majors
      });
    } catch (error) {
      console.error(error.response);
    }
  };
};
