import React from "react";
import { useParams } from "react-router-dom";

const blogPosts = {
  1: {
    title: "The Hidden Life of Forest Ecosystems",
    content: `
      <p>Deep within the heart of our planet's forests lies a complex web of life that often goes unnoticed by the casual observer. Trees, far from being solitary beings, are connected through an intricate network of fungal threads, often referred to as the "Wood Wide Web."</p>

      <p>This underground network allows trees to share resources, communicate about threats, and even support younger saplings. Through this system, older "mother" trees can recognize and nurture their offspring, sharing nutrients and carbon to help them survive and thrive.</p>

      <h2>The Fungal Network</h2>
      <p>Mycorrhizal fungi form symbiotic relationships with tree roots, creating a vast underground network that connects different species of trees and other plants. This network facilitates the exchange of nutrients and chemical signals between plants, demonstrating that forests are not just collections of individual trees, but complex, interconnected communities.</p>

      <h2>Wildlife Interactions</h2>
      <p>The forest ecosystem supports an incredible diversity of wildlife, from the smallest insects to large mammals. Each species plays a crucial role in maintaining the health and balance of the forest. Birds and small mammals help disperse seeds, while insects aid in decomposition and pollination.</p>

      <p>Understanding these complex relationships is crucial for forest conservation efforts and maintaining the health of our planet's ecosystems.</p>
    `,
    image:
      "https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80&w=1200",
    author: {
      name: "Emma Wilson",
      avatar:
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80&w=200",
      role: "Environmental Scientist",
    },
    date: "Mar 15, 2024",
    readTime: "5 min read",
  },
};

function BlogDetail() {
  const { id } = useParams();
  const post = blogPosts[Number(id)];

  if (!post) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning">Post not found</div>
      </div>
    );
  }

  return (
    <article>
      <div
        className="blog-header d-flex align-items-center justify-content-center text-white mb-5"
        style={{
          background: `linear-gradient(rgba(70, 102, 69, 0.9), rgba(70, 102, 69, 0.7)),
                      url(${post.image}) center/cover`,
          height: 500,
        }}
      >
        <div className="container text-center">
          <h1 className="display-4 fw-bold">{post.title}</h1>
          <div className="d-flex align-items-center justify-content-center mt-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="author-avatar me-2"
            />
            <div className="text-start">
              <p className="mb-0 fw-bold">{post.author.name}</p>
              <small>{post.author.role}</small>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8">
            <div className="d-flex justify-content-between align-items-center text-muted mb-4">
              <span>{post.date}</span>
              <span>{post.readTime}</span>
            </div>

            <div
              className="blog-content"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <hr className="my-5" />

            {/* <div className="d-flex align-items-center">
              <img
                src={post.author.avatar}
                alt={post.author.name}
                className="author-avatar me-3"
              />
              <div>
                <h5 className="mb-1">Written by {post.author.name}</h5>
                <p className="text-muted mb-0">{post.author.role}</p>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </article>
  );
}

export default BlogDetail;
