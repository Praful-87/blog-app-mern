import { url } from "../../url";
import * as types from "./actionTypes";
import axios from "axios";
const authenticaton = JSON.parse(localStorage.getItem("authenticaton")) || {};

// console.log(authenticaton);

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

const updateRequest = () => {
  return {
    type: types.UPDATE_PROFILE_REQUEST,
  };
};
const updateSuccess = (payload) => {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
    payload,
  };
};
const updateFailure = () => {
  return {
    type: types.UPDATE_PROFILE_FAILURE,
  };
};

export const register = (formData) => async (dispatch) => {
  dispatch(registerRequest());
  try {
    let res = await axios.post(`${url}/user/register`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(registerSuccess());

    return { res: true, msg: res.data.msg };
  } catch (err) {
    dispatch(registerFailure());
    // console.log(err.response.data.msg);
    if (error.response.status === 500)
      return { res: false, msg: "File NOt supported" };
    // return error;
    return { res: false, msg: err.response.data.msg };
  }
};

export const updateProfile = (formData, id) => async (dispatch) => {
  dispatch(updateRequest());
  // console.log(formData);
  return axios
    .patch(`${url}/user/update/${id}`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    })
    .then((res) => {
      // console.log(res);
      // authenticaton = { ...authenticaton, user: res.data };
      localStorage.setItem(
        "authenticaton",
        JSON.stringify({ ...authenticaton, user: res.data })
      );
      dispatch(updateSuccess(res.data));
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(updateFailure());
      if (err.response.status === 500) return false;
      return false;
    });
  // console.log(formData);
};

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    let res = await axios.post(`${url}/user/login`, payload);
    
    localStorage.setItem(
      "authenticaton",
      JSON.stringify({
        user: res.data.userData[0],
        token: res.data.token,
      })
    );
    dispatch(loginSuccess(res.data.token));
    
    return { res: true, msg: res.data.msg };
  } catch (err) {
    dispatch(loginFailure());
    return { res: false, msg: err.response.data.msg };
  }
  // console.log(payload)
};
