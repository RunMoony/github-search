import React from "react";
import { useDispatch, useSelector } from "react-redux";
import GithubProfileInfo from "../components/GithubProfileInfo";
import GithubRepositoryInfo from "../components/GithubRepositoryInfo";
import GithubUsernameForm from "../components/GithubUsernameForm";
import { RootState } from "../modules";
import { getUserProfileThunk, getUserRepositoryThunk } from "../modules/github";

function GithubProfileLoader() {
  const { data, loading, error } = useSelector(
    (state: RootState) => state.github.userProfile
  );
  const { data2, loading2, error2 } = useSelector(
    (state: RootState) => state.github.userRepository
  );
  const dispatch = useDispatch();

  const onSubmitUsername = (username: string) => {
    dispatch(getUserProfileThunk(username));
    dispatch(getUserRepositoryThunk(username));
  };

  return (
    <>
      <GithubUsernameForm onSubmitUsername={onSubmitUsername} />
      {loading && <p style={{ textAlign: "center" }}>로딩중...</p>}
      {error && <p style={{ textAlign: "center" }}>에러 발생!...</p>}
      {data && (
        <GithubProfileInfo
          bio={data.bio}
          blog={data.blog}
          name={data.name}
          thumbnail={data.avatar_url}
          url={data.html_url}
          followers={data.followers}
        />
      )}
      {loading2 && <p style={{ textAlign: "center" }}>로딩중...</p>}
      {error2 && <p style={{ textAlign: "center" }}>에러 발생!...</p>}
      {data2 && (
        <GithubRepositoryInfo name={data2.name} html_url={data2.html_url} />
      )}
    </>
  );
}

export default GithubProfileLoader;
