import {
  addPostRequest,
  addPostSuccess,
  addPostError,
  editPost,
  deletePost,
  fetchPostsRequest,
  fetchPostsSuccess,
  fetchPostsError,
  setPostsCount,
} from "./postsActions";

import Cookies from "js-cookie";

const API_BASE_URL = "https://thp-strapi-social-network.herokuapp.com";

export const addPost = (postData) => {
  console.log(postData);
  return (dispatch) => {
    const addURL = `${API_BASE_URL}/posts`;
    dispatch(addPostRequest());
    fetch(addURL, {
      method: "post",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(postData),
    })
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(addPostSuccess(response));
        } else {
          dispatch(addPostError(response.message[0].messages[0].message));
        }
      });
  };
};

export const fetchEditPost = (text, postID) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/posts/${postID}`, {
      method: "put",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ text: text }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          dispatch(editPost(response));
        }
      });
  };
};

export const fetchDeletePost = (postID) => {
  return (dispatch) => {
    fetch(`${API_BASE_URL}/posts/${postID}`, {
      method: "delete",
      headers: {
        Authorization: `Bearer ${Cookies.get("token")}`,
        "Content-Type": "application/json",
      },
    })
      .then((response) => response.json())
      .then((response) => {
        if (response) {
          dispatch(deletePost(response));
        }
      });
  };
};

export const fetchPosts = (userId) => {
  return (dispatch) => {
    let postsURL =
      `${API_BASE_URL}/posts?_limit=20&_sort=created_at:DESC`;
    let countURL =
      `${API_BASE_URL}/posts/count`;
    if (userId) {
      postsURL = `${API_BASE_URL}/posts?_sort=created_at:DESC&user.id=${userId}`;
      countURL = `${API_BASE_URL}/posts/count?_sort=created_at:DESC&user.id=${userId}`;
    }

    dispatch(fetchPostsRequest());

    fetch(countURL)
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(setPostsCount(response));
        }
      });

    fetch(postsURL)
      .then((response) => response.json())
      .then((response) => {
        if (!response.error) {
          dispatch(fetchPostsSuccess(response));
        } else {
          dispatch(fetchPostsError(response.error));
        }
      });
  };
};