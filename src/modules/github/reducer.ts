import { createReducer } from "typesafe-actions";
import {
  GET_USER_PROFILE,
  GET_USER_PROFILE_ERROR,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_REPOSITORY,
  GET_USER_REPOSITORY_SUCCESS,
  GET_USER_REPOSITORY_ERROR,
} from "./actions";
import { GithubAction, GitHubState } from "./types";

const initialState: GitHubState = {
  userProfile: {
    loading: false,
    error: null,
    data: null,
  },
  userRepository: {
    loading: false,
    error: null,
    data: null,
  },
};

const github = createReducer<GitHubState, GithubAction>(initialState, {
  [GET_USER_PROFILE]: (state) => ({
    ...state,
    userProfile: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_PROFILE_SUCCESS]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USER_PROFILE_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
  [GET_USER_REPOSITORY]: (state) => ({
    ...state,
    userRepository: {
      loading: true,
      error: null,
      data: null,
    },
  }),
  [GET_USER_REPOSITORY_SUCCESS]: (state, action) => ({
    ...state,
    userRepository: {
      loading: false,
      error: null,
      data: action.payload,
    },
  }),
  [GET_USER_REPOSITORY_ERROR]: (state, action) => ({
    ...state,
    userProfile: {
      loading: false,
      error: action.payload,
      data: null,
    },
  }),
});

export default github;
