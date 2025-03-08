import React from "react";
import { blogPosts } from "../../constants/blog";
import "./blog.css";
import BlogCard from "../BlogCard/BlogCard";
import HeaderInfo from "../common/HeaderInfo";
import aboutUsBg from "../../assets/images/aboutUs.png";

const Blog = () => {
  return (
    <>
      <HeaderInfo
        title={"Blog"}
        description={"Exploring our leather world"}
        bgImage={aboutUsBg}
      />
      <div className="container mt-5">
        <div className="row g-4">
          {blogPosts.map((post) => (
            <BlogCard post={post} />
          ))}
        </div>
      </div>
    </>
  );
};

export default Blog;
