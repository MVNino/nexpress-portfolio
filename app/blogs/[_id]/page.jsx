import React from "react";

const fetchPost = async (postId) => {
  const response = await fetch(`http://localhost:3000/api/posts/${postId}`);

  const data = await response.json();

  return data;
};

const BlogShow = async ({ params }) => {
  const { data: post } = await fetchPost(params._id)

  return <div>Blog Content: {post.title}</div>;
};

export default BlogShow;
