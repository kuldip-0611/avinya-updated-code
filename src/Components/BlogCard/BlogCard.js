import React from "react";
import { Link } from "react-router-dom";
import "./blogcard.css";

const BlogCard = ({ post }) => {
  return (
    <div key={post.id} className="col-md-6 col-lg-4">
      <div className="card h-100 border-0 shadow-sm blog-card">
        <img
          src={post.image}
          className="card-img-top"
          alt={post.title}
          style={{ height: "200px", objectFit: "cover" }}
        />
        <div className="card-body">
          <h5 className="card-title">{post.title}</h5>
          <p className="card-text text-muted">{post.excerpt?.slice(0, 80)}</p>

          <div className="d-flex align-items-center mt-3">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="author-avatar me-2"
            />
            <div>
              <p className="mb-0 fw-bold">{post.author.name}</p>
              <small className="text-muted">{post.author.role}</small>
            </div>
          </div>
        </div>
        <div className="card-footer bg-white border-0">
          <div className="d-flex justify-content-between align-items-center">
            <small className="text-muted">
              {post.date} · {post.readTime}
            </small>
            <Link to={`/post/${post.id}`} className="blog-read-more">
              <p className="text-white px-2 rounded-1">Read More</p>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
