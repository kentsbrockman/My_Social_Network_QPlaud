import Cookies from "js-cookie";
import {
  registerFailure,
  registerSuccess,
  loginFailure,
  loginSuccess,
  logout,
  editProfile,
  retrieveUser,
} from "./authActions";

export const registerFetch = (userData) => {
  return (dispatch) => {
    const registerURL = "http://localhost:1337/auth/local/register";

    fetch(registerURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.jwt) {
          Cookies.set("token", response.jwt);
          dispatch(registerSuccess(response.user, response.jwt));
          console.log("Registration successful, a new user has been created 🔥");
        } else {
          dispatch(registerFailure(response.message[0].messages[0].message));
        }
      });
  };
};

export const loginFetch = (userData) => {
  return (dispatch) => {
    const loginURL = "http://localhost:1337/auth/local";

    fetch(loginURL, {
      method: "post",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.jwt) {
          Cookies.set("token", response.jwt);
          dispatch(loginSuccess(response.user, response.jwt));
          console.log("Login successful, the user is now connected 🔥");
        } else {
          dispatch(loginFailure(response.message[0].messages[0].message));
        }
      });
  };
};

export const fetchEditProfile = (userData) => {
  return (dispatch) => {
    const loginURL = "http://localhost:1337/users/me";

    fetch(loginURL, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(userData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          dispatch(editProfile(response));
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

export const fetchRetrieveUser = (userID) => {
  return (dispatch) => {
    fetch(`http://localhost:1337/users/${userID}`, {
      method: "get",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          dispatch(retrieveUser(response, Cookies.get("token")));
        }
      });
  };
};