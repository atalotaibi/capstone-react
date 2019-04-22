import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const fetchProfileDetail = () => {
  return async dispatch => {
    try {
      const res = await instance.get("profile/detail/");

      const userprofile = res.data;
      dispatch({
        type: actionTypes.FETCH_PROFILE_DETAIL,
        payload: userprofile
      });
    } catch (error) {
      console.error(error);
    }
  };
};

export const ProfileUpdate = userID => {
  return async dispatch => {
    try {
      const res = await instance.put(`user/update/${userID}/`);
      const profile = res.data;
      dispatch({
        type: actionTypes.PROFILE_UPDATE,
        payload: profile
      });
    } catch (error) {
      console.error(error);
    }
  };
};
