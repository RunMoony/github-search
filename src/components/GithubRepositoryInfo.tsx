import React from "react";

type GithubRepositoryInfoProps = {
  name: string;
  html_url: string;
};

function GithubRepositoryInfo({ name, html_url }: GithubRepositoryInfoProps) {
  return (
    <div>
      <a href={html_url}>{name}</a>
    </div>
  );
}

export default GithubRepositoryInfo;
