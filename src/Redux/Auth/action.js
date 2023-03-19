import * as types from "./actionTypes";
import axios from "axios";
// const url = "https://attractive-teal-cap.cyclic.app";
const url = "http://localhost:8000";
// register

const registerRequest = () => {
  return {
    type: types.REGISTER_REQUEST,
  };
};
const registerSuccess = (payload) => {
  return {
    type: types.REGISTER_SUCCESS,
    payload,
  };
};
const registerFailure = () => {
  return {
    type: types.REGISTER_FAILURE,
  };
};

const loginRequest = () => {
  return {
    type: types.LOGIN_REQUEST,
  };
};
const loginSuccess = (payload) => {
  return {
    type: types.LOGIN_SUCCESS,
    payload,
  };
};
const loginFailure = () => {
  return {
    type: types.LOGIN_FAILURE,
  };
};

export const register = (payload) => (dispatch) => {
  dispatch(registerRequest());
  return axios
    .post(`${url}/register`, payload)
    .then((res) => {
      dispatch(registerSuccess());
    })
    .catch((err) => {
      dispatch(registerFailure());
    });
};

export const login = (payload) => (dispatch) => {
  dispatch(loginRequest());
  return axios
    .post(`${url}/login`, payload)
    .then((res) => {
      dispatch(loginSuccess());
    })
    .catch((err) => {
      dispatch(loginFailure());
    });
};
