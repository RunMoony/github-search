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
              blog 바로가기
            </a>
          )}
        </div>
        <a href={url}>GitHub 바로가기</a>
        <div>Followers : {followers}</div>
      </div>
    </div>
  );
}

export default GithubProfileInfo;
