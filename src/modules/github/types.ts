import { ActionType } from "typesafe-actions";
import { GithubProfile, GithubRepository } from "../../api/github";
import * as actions from "./actions";

export type GithubAction = ActionType<typeof actions>;
export type GitHubState = {
  userProfile: {
    loading: boolean;
    data: GithubProfile | null;
    error: Error | null;
  };
  userRepository: {
    loading: boolean;
    data: GithubRepository | null;
    error: Error | null;
  };
};
