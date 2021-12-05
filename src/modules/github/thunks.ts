import { Dispatch } from "redux";
import { getUserProfile, getUserRepository } from "../../api/github";
import { getUserProfileAsync, getUserRepositoryAsync } from "./actions";

export function getUserProfileThunk(username: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUserProfileAsync;
    dispatch(request());
    try {
      const userProfile = await getUserProfile(username);
      dispatch(success(userProfile));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}

export function getUserRepositoryThunk(username: string) {
  return async (dispatch: Dispatch) => {
    const { request, success, failure } = getUserRepositoryAsync;
    dispatch(request());
    try {
      const userRepository = await getUserRepository(username);
      dispatch(success(userRepository));
    } catch (e: any) {
      dispatch(failure(e));
    }
  };
}
