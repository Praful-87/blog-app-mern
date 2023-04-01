import * as types from "./actionTypes";
import axios from "axios";
// const url = "https://attractive-teal-cap.cyclic.app";
const url = "http://localhost:8000";
// const url = "https://creepy-calf-top-coat.cyclic.app";
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

const updateRequest = () => {
  return {
    type: types.UPDATE_PROFILE_REQUEST,
  };
};
const updateSuccess = () => {
  return {
    type: types.UPDATE_PROFILE_SUCCESS,
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
    // console.log(res);
    return { res: true, msg: res.data.msg };
  } catch (err) {
    dispatch(registerFailure());
    // console.log(err.response.data.msg);
    return { res: false, msg: err.response.data.msg };
  }
};

export const updateProfile = (formData, id) => async (dispatch) => {
  dispatch(updateRequest());
  return axios
    .patch(`${url}/user/update/${id}`, formData)
    .then((res) => {
      dispatch(updateSuccess());
    })
    .catch((err) => {
      dispatch(updateFailure());
    });
  console.log(formData);
};

export const login = (payload) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    let res = await axios.post(`${url}/user/login`, payload);
    dispatch(loginSuccess(res.data.token));
    localStorage.setItem(
      "authenticaton",
      JSON.stringify({
        user: res.data.userData[0],
        token: res.data.token,
      })
    );
    // console.log(res.data.userData[0],res.data.token);
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
