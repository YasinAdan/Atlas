import React, { useState, useEffect, useContext } from "react";
import Share from "./../Share/Share";
import Post from "./../Post/Post";
import Axios from "axios";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import "./Feed.scss";

const Feed = ({ username }) => {
  const [Posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = username
        ? await axios.get("/posts/profile/" + username)
        : await axios.get("posts/timeline/" + user._id);
      setPosts(res.data);
    };
    fetchPosts();
  }, [username, user._id]);
  return (
    <div className="feed">
      <div className="feed-wrapper">
        <Share />
        {Posts.map((post) => {
          return <Post post={post} key={post._id} />;
        })}
      </div>
    </div>
  );
};

export default Feed;
