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
const registerSuccess = () => {
  return {
    type: types.REGISTER_SUCCESS,
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

export const register = (payload) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    let res = await axios.post(`${url}/user/register`, payload);
    dispatch(registerSuccess());
    // console.log(res);
    return { res: true, msg: res.data.msg };
  } catch (err) {
    dispatch(registerFailure());
    // console.log(err.response.data.msg);
    return { res: false, msg: err.response.data.msg };
  }
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
