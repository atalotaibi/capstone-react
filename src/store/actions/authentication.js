import * as actionTypes from "./actionTypes";
import axios from "axios";
import jwt_decode from "jwt-decode";

const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/"
});

export const checkForExpiredToken = () => {
  return async dispatch => {
    const token = await localStorage.getItem("token");

    if (token) {
      const currentTime = Date.now() / 1000;

      const user = jwt_decode(token);
      if (user.exp >= currentTime) {
        setAuthToken(token);
        dispatch(setCurrentUser(user));
      } else {
        dispatch(logout());
      }
    }
  };
};

const setAuthToken = async token => {
  if (token) {
    await localStorage.setItem("token", token);
    axios.defaults.headers.common.Authorization = `jwt ${token}`;
  } else {
    await localStorage.removeItem("token");
    delete axios.defaults.headers.common.Authorization;
  }
};

const setCurrentUser = user => ({
  type: actionTypes.SET_CURRENT_USER,
  payload: user
});

export const login = (userData, history) => {
  return async dispatch => {
    try {
      const response = await instance.post("login/", userData);
      const token = response.data.token;
      let decodedUser = jwt_decode(token);

      setAuthToken(token);
      dispatch(setCurrentUser(decodedUser));
      history.push("Search");
    } catch (error) {
      console.error(error.response.data);
      dispatch({
        type: actionTypes.SET_ERRORS,
        payload: error.response.data
      });
    }
  };
};

export const signup = (userData, history) => {
  return async dispatch => {
    try {
      // if (userData.is_expert) {
      //   await instance.post("expert/register/", userData);
      //   dispatch(login(userData, history));
      // } else
      // {
      await instance.post("register/", userData);
      dispatch(login(userData, history));
      // }
    } catch (error) {
      console.error(error.response.data);
    }
  };
};
export const logout = () => {
  setAuthToken();
  return setCurrentUser();
};
