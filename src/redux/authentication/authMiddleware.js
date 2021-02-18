import Cookies from "js-cookie";
import {
  registerSuccess,
  registerFailure,
  loginSuccess,
  loginFailure,
  logout,
  editProfile,
} from "./authActions";

const API_URL_BASE = "https://thp-strapi-social-network.herokuapp.com";

export const registerFetch = (userData) => {
  return (dispatch) => {
    const registerURL = `${API_URL_BASE}/auth/local/register`;

    fetch(registerURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.jwt) {
        Cookies.set("token", data.jwt);
        dispatch(registerSuccess(data.user, data.jwt));
        console.log("Registration successful, a new user has been created 🔥");
      } else {
        dispatch(registerFailure(data.message[0].messages[0].message));
      }
    });
  };
};

export const loginFetch = (userData) => {
  return (dispatch) => {
    const loginURL = `${API_URL_BASE}/auth/local`;

    fetch(loginURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data.jwt) {
        Cookies.set("token", data.jwt);
        dispatch(loginSuccess(data.user, data.jwt));
        console.log("Login successful, the user is now connected 🔥");
      } else {
        dispatch(loginFailure(data.message[0].messages[0].message));
      }
    });
  };
};

export const fetchEditProfile = (userData) => {
  return (dispatch) => {
    const loginURL = `${API_URL_BASE}/users/me`;

    fetch(loginURL, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
    .then((response) => response.json())
    .then((data) => {
      if (data) {
        dispatch(editProfile(data));
        console.log("The profile edition has been successful 🔥");
      }
    });
  };
};

export const userLogout = () => {
  return (dispatch) => {
    Cookies.remove("token");
    dispatch(logout());
    console.log("The user was successfully logged out, hope we'll catch up soon ❤️");
  };
};