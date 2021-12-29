import React from "react";
import "./GithubProfileInfo.css";

type GithubProfileInfoProps = {
  login: string;
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
  url: string;
  followers: number;
};

function GithubProfileInfo({
  login,
  name,
  thumbnail,
  bio,
  blog,
  url,
  followers,
}: GithubProfileInfoProps) {
  return (
    <div className='GithubProfileInfo'>
      <div className='profile-head'>
        <img src={thumbnail} alt='user thumbnail'></img>
      </div>
      <div className='name'>{login}</div>
      <div className='title'>Name</div>
      <div>{name}</div>
      <div className='title'>Bio</div>
      <div>{bio}</div>
      <div>{blog !== "" && <div className='title'>Blog</div>}</div>
      <div>
        <a href={blog}>{blog}</a>
      </div>
      <div className='title'>Github url</div>
      <div>
        <a href={url}>{url}</a>
      </div>
      <div className='title'>Followers</div>
      <div>{followers}</div>
      <div className='title'>Repositories</div>
    </div>
  );
}

export default GithubProfileInfo;
