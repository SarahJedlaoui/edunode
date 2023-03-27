import React, { Component } from 'react'
import "./card.css";
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import AddCommentIcon from '@mui/icons-material/AddComment';
import ShareIcon from '@mui/icons-material/Share';
import InfoIcon from '@mui/icons-material/Info';
import { useState } from "react";

const Card = ({ post, socket, user }) => {
  const [liked, setLiked] = useState(false);

  const handleNotification = (type) => {
    type === 1 && setLiked(true);
    socket.emit("sendNotification", {
      senderName: user,
      receiverName: post.username,
      type,
    });
  };

  return (
    <div className="card">
      <div className="info">
        {/* <img src={post.userImg} alt="" className="userImg" /> */}
        {/* <span>{post.fullname}</span> */}
      </div>
      {/* <img src={post.postImg} alt="" className="postImg" /> */}
      <div className="interaction">
        {liked ? (
          <img src={<FavoriteIcon />} alt="" className="cardIcon" />
        ) : (
          <img
            src={<FavoriteBorderIcon />}
            alt=""
            className="cardIcon"
            onClick={() => handleNotification(1)}
          />
        )}
        <img
          src={<AddCommentIcon />}
          alt=""
          className="cardIcon"
          onClick={() => handleNotification(2)}
        />
        <img
          src={<ShareIcon />}
          alt=""
          className="cardIcon"
          onClick={() => handleNotification(3)}
        />
        <img src={InfoIcon} alt="" className="cardIcon infoIcon" />
      </div>
    </div>
  );
};

export default Card;