import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";

export default function PostCard({ post }) {
  return (
    <div className="card shadow">
      <div className="card-body">
       <div className="card-label">Title:</div>
        <h5 className="card-title" style={{ fontSize: "1.2rem", fontWeight: "bold" }}>{post.title}</h5>
        <div className="card-label">Description:</div>
        <p className="card-text">{post.description}</p>
        <a href={post.link} className="card-link">
          <FontAwesomeIcon icon={faLink} className="mr-2" />
          {post.link}
        </a>
        <div className="card-label">Author:</div>
        <p className="card-text">{post.email}</p>
        <p className="card-text">
          <small className="text-muted">
            Tags: {post.tags.join(", ")}
          </small>
        </p>
       
      </div>
    </div>
  );
}
