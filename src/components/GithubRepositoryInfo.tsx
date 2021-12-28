import React from "react";

type GithubRepositoryInfoProps = {
  name: string;
  html_url: string;
};

function GithubRepositoryInfo({ name, html_url }: GithubRepositoryInfoProps) {
  return <ul></ul>;
}

export default GithubRepositoryInfo;
