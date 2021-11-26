import React from "react";
import "./Online.scss";

const Online = ({ user }) => {

  const PF = process.env.REACT_APP_PUBLIC_FOLDER;

  return (
    <li className="rightbar-friend">
      <div className="rightbar-profile-img-container">
        <img
          className="rightbar-profile-img"
          src={PF+user.profilePicture}
          alt=""
        />
        <span className="rightbar-online-badge"></span>
      </div>
      <span className="rightbar-username">{user.username}</span>
    </li>
  );
};

export default Online;
