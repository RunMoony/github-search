import { ActionType } from "typesafe-actions";
import { GithubProfile } from "../../api/github";
import * as actions from "./actions";

export type GithubAction = ActionType<typeof actions>;
export type GitHubState = {
  userProfile: {
    loading: boolean;
    data: GithubProfile | null;
    error: Error | null;
  };
};
