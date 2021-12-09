import React from "react";
import "./GithubProfileInfo.css";

type GithubProfileInfoProps = {
  name: string;
  thumbnail: string;
  bio: string;
  blog: string;
  url: string;
  followers: number;
};

function GithubProfileInfo({
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
      <div className='name'>{name}</div>
      <p>{bio}</p>
      <div className='remainder'>
        <div>
          {blog !== "" && (
            <a className='blog' href={blog}>
              블로그
            </a>
          )}
        </div>
        <a href={url}>Github URL</a>
        <div>Followers : {followers}</div>
      </div>
    </div>
  );
}

export default GithubProfileInfo;
