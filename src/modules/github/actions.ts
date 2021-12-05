import { AxiosError } from "axios";
import { createAsyncAction } from "typesafe-actions";
import { GithubProfile, GithubRepository } from "../../api/github";

export const GET_USER_PROFILE = "github/GET_USER_PROFILE";
export const GET_USER_PROFILE_SUCCESS = "github/GET_USER_PROFILE_SUCCESS";
export const GET_USER_PROFILE_ERROR = "github/GET_USER_PROFILE_ERROR";

export const GET_USER_REPOSITORY = "github/GET_USER_REPOSITORY";
export const GET_USER_REPOSITORY_SUCCESS = "github/GET_USER_REPOSITORY_SUCCESS";
export const GET_USER_REPOSITORY_ERROR = "github/GET_USER_REPOSITORY_ERROR";

export const getUserProfileAsync = createAsyncAction(
  GET_USER_PROFILE,
  GET_USER_PROFILE_SUCCESS,
  GET_USER_PROFILE_ERROR
)<undefined, GithubProfile, AxiosError>();

export const getUserRepositoryAsync = createAsyncAction(
  GET_USER_REPOSITORY,
  GET_USER_REPOSITORY_SUCCESS,
  GET_USER_REPOSITORY_ERROR
)<undefined, GithubRepository, AxiosError>();
