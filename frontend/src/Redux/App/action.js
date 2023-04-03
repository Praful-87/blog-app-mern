import { url } from "../../url";
import * as types from "./actionTypes";
import axios from "axios";

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

const addDataRequest = () => {
  return {
    type: types.ADD_DATA_REQUEST,
  };
};
const addDataSuccess = () => {
  return {
    type: types.ADD_DATA_SUCCESS,
  };
};
const addDataFailure = () => {
  return {
    type: types.ADD_DATA_FAILURE,
  };
};

const deleteDataRequest = () => {
  return {
    type: types.DELETE_DATA_REQUEST,
  };
};
const deleteDataSuccess = () => {
  return {
    type: types.DELETE_DATA_SUCCESS,
  };
};
const deleteDataFailure = () => {
  return {
    type: types.DELETE_DATA_FAILURE,
  };
};

const updateDataRequest = () => {
  return {
    type: types.UPDATE_DATA_REQUEST,
  };
};
const updateDataSuccess = () => {
  return {
    type: types.UPDATE_DATA_SUCCESS,
  };
};
const updateDataFailure = () => {
  return {
    type: types.UPDATE_DATA_FAILURE,
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

export const getComments = (id) => {
  return axios
    .get(`${url}/comment/${id}`)
    .then((res) => {
      // console.log(res);
      return res.data;
    })
    .catch((err) => {
      console.log(err.message);
      return [];
    });
};

export const deleteData = (id) => (dispatch) => {
  dispatch(deleteDataRequest());
  return axios
    .delete(`${url}/blog/delete/${id}`)
    .then((res) => {
      // console.log(res);
      dispatch(deleteDataSuccess());
      dispatch(getData);
      return true;
    })
    .catch((err) => {
      console.log(err.message);
      dispatch(deleteDataFailure());
      return false;
    });
};

export const addData = (formData) => async (dispatch) => {
  dispatch(addDataRequest());
  try {
    let res = axios.post(`${url}/blog/create`, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    dispatch(addDataSuccess());
    dispatch(getData);
    return res;
  } catch (error) {
    // console.log(error.message);
    dispatch(addDataFailure());
    if (error.response.status === 500) return false;
    return error;
  }
};

export const updateData = (formData, id) => (dispatch) => {
  dispatch(updateDataRequest());
  return axios
    .patch(`${url}/blog/update/${id}`, formData)
    .then((res) => {
      // console.log(res);
      dispatch(updateDataSuccess());
      dispatch(getData);
    })
    .catch((err) => {
      dispatch(updateDataFailure());
    });
};
