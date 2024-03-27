import React from "react";
import Link from 'next/link'
const fetchPost = async (postId) => {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`);

  const data = await response.json();

  return data;
};

const BlogShow = async ({ params }) => {
  const { data: post } = await fetchPost(params._id);

  return (
    <div class="container">
      <Link href="/blogs" className="back-button">Back</Link>
      <header class="blog-header">
        <h1 class="blog-title-show">{ post.title }</h1>
        <div class="blog-meta">{ post.description }</div>
        <div class="blog-meta">Published on January 1, 2024 by John Doe</div>
      </header>
      <article class="blog-content">
        { post.content }
      </article>
    </div>
  );
};

export default BlogShow;
