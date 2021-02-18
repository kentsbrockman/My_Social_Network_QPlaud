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

const API_URL_BASE = "https://thp-strapi-social-network.herokuapp.com"

export const addPost = (postData) => {
  console.log(postData);
  return (dispatch) => {
    const addURL = `${API_URL_BASE}/posts`;
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
    fetch(`${API_URL_BASE}/posts/${postID}`, {
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
    fetch(`${API_URL_BASE}/posts/${postID}`, {
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

export const fetchPosts = (userSlug) => {
  return (dispatch) => {
    let postsURL =
      `${API_URL_BASE}/posts?_sort=created_at:DESC`;
    let countURL =
      `${API_URL_BASE}/posts/count?_sort=created_at:DESC`;
    if (userSlug) {
      postsURL = `${API_URL_BASE}/posts?_sort=created_at:DESC&user.slug=${userSlug}`;
      countURL = `${API_URL_BASE}/posts/count?_sort=created_at:DESC&user.slug=${userSlug}`;
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
