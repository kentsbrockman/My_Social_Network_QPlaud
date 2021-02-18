import {
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  EDIT_PROFILE,
} from "./authTypes";

export const registerSuccess = (user, token) => {
  return {
    type: REGISTER_SUCCESS,
    user,
    token,
  };
};

export const registerFailure = (error) => {
  return {
    type: REGISTER_FAILURE,
    error,
  };
};

export const loginSuccess = (user, token) => {
  return {
    type: LOGIN_SUCCESS,
    user,
    token,
  };
};

export const loginFailure = (error) => {
  return {
    type: LOGIN_FAILURE,
    error,
  };
};

export const logout = () => {
  return {
    type: LOGOUT,
  };
};

export const editProfile = (user) => {
  return {
    type: EDIT_PROFILE,
    user,
  };
};