import {
  ADD_POST_REQUEST,
  ADD_POST_SUCCESS,
  ADD_POST_ERROR,
  EDIT_POST,
  DELETE_POST,
  FETCH_POSTS_REQUEST,
  FETCH_POSTS_SUCCESS,
  FETCH_POSTS_ERROR,
  SET_POSTS_COUNT,
} from "./postsTypes";

export const addPostRequest = () => {
  return {
    type: ADD_POST_REQUEST,
  };
};

export const addPostSuccess = (post) => {
  return {
    type: ADD_POST_SUCCESS,
    post,
  };
};

export const addPostError = (error) => {
  return {
    type: ADD_POST_ERROR,
    error,
  };
};

export const editPost = (post) => {
  return {
    type: EDIT_POST,
    post,
  };
};

export const deletePost = (post) => {
  return {
    type: DELETE_POST,
    post,
  };
};

export const fetchPostsRequest = () => {
  return {
    type: FETCH_POSTS_REQUEST,
  };
};

export const fetchPostsSuccess = (currentPosts) => {
  return {
    type: FETCH_POSTS_SUCCESS,
    currentPosts,
  };
};

export const fetchPostsError = (error) => {
  return {
    type: FETCH_POSTS_ERROR,
    error,
  };
};

export const setPostsCount = (count) => {
  return {
    type: SET_POSTS_COUNT,
    count,
  };
};
