import * as types from "./actionTypes";
const initialState = {
  user: {},
  token: "",
  isLoading: false,
  isError: false,
  update: false,
  isAuth: false,
};
export const reducer = (oldState = initialState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.REGISTER_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
      };
    case types.REGISTER_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    case types.LOGIN_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };
    case types.LOGIN_SUCCESS:
      return {
        ...oldState,
        isLoading: false,
        isAuth: true,
        token: payload,
        isError: false,
        isAuth: !oldState.isAuth,
      };
    case types.LOGIN_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };
    case types.UPDATE_PROFILE_REQUEST:
      return {
        ...oldState,
        isLoading: true,
      };

    case types.UPDATE_PROFILE_SUCCESS:
      return {
        ...oldState,
        // user: payload,
        isAuth: !oldState.isAuth,
        isLoading: false,
        isError: false,
      };

    case types.UPDATE_PROFILE_FAILURE:
      return {
        ...oldState,
        isLoading: false,
        isError: true,
      };

    default:
      return oldState;
  }
};
