import * as types from "./actionTypes";
const initialState = {
  data: [],
  isLoading: false,
  isError: false,
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_DATA_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.GET_DATA_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        data: payload,
      };
    case types.GET_DATA_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};
