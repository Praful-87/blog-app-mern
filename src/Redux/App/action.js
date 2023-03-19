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
