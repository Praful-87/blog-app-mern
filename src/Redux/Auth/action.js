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

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    let res = await axios.post(`${url}/user/login`, payload);
    dispatch(
      loginSuccess({
        token: res.data.token,
        user_details: res.data.user_details,
      })
    );
    // localStorage.setItem("userId", res.data.user_id);
    // console.log(res.data.token);
    return { res: true, msg: res.data.msg };
  } catch (err) {
    dispatch(loginFailure());
    // console.log(err.response.data.msg);
    return { res: false, msg: err.response.data.msg };
  }
  // console.log(payload)
};
