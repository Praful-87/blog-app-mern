import * as types from "./actionTypes";
import axios from "axios";
// const url = "https://attractive-teal-cap.cyclic.app";
const url = "http://localhost:8000";
// register
const getDataRequest = () => {
  return {
    type: types.GET_DATA_REQUEST,
  };
};
const getDataSuccess = (payload) => {
  return {
    type: types.GET_DATA_SUCCESS,
    payload,
  };
};
const getDataFailure = () => {
  return {
    type: types.GET_DATA_FAILURE,
  };
};
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
export const getData = (dispatch) => {
  dispatch(getDataRequest());
  return axios
    .get(`${url}/blog`)
    .then((res) => {
      // console.log(res);
      dispatch(getDataSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getDataFailure());
    });
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
