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
    loading2: false,
    error2: null,
    data2: null,
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
      loading2: true,
      error2: null,
      data2: null,
    },
  }),
  [GET_USER_REPOSITORY_SUCCESS]: (state, action) => ({
    ...state,
    userRepository: {
      loading2: false,
      error2: null,
      data2: action.payload,
    },
  }),
  [GET_USER_REPOSITORY_ERROR]: (state, action) => ({
    ...state,
    userRepository: {
      loading2: false,
      error2: action.payload,
      data2: null,
    },
  }),
});

export default github;
