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

const initialState = {
  loading: false,
  currentPosts: [],
  error: "",
  count: 0,
};

const postsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POST_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case ADD_POST_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPosts: [...state.currentPosts, action.post],
      };
    case ADD_POST_ERROR:
      return {
        ...state,
        error: action.error,
      };
    case EDIT_POST:
      return {
        ...state,
        currentPosts: state.currentPosts.map((post) =>
          post.id === action.post.id ? action.post : post
        ),
      };
    case DELETE_POST:
      return {
        ...state,
        currentPosts: state.currentPosts.filter(
          (post) => post.id !== action.post.id
        ),
      };
    case FETCH_POSTS_REQUEST:
      return {
        ...state,
        loading: true,
      };
    case FETCH_POSTS_SUCCESS:
      return {
        ...state,
        loading: false,
        currentPosts: action.currentPosts,
      };
    case FETCH_POSTS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.error,
      };
    case SET_POSTS_COUNT:
      return {
        ...state,
        count: action.count,
      };

    default:
      return state;
  }
};

export default postsReducer;
