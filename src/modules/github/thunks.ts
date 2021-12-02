import { Dispatch } from "redux";
import { getUserProfile } from "../../api/github";
import { getUserProfileAsync } from "./actions";

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
