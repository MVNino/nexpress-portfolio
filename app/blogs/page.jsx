import React from "react";
import Image from "next/image";

const fetchPosts = async () => {
  const response = await fetch("http://localhost:3000/api/posts");

  const data = await response.json();

  return data;
};

export const metadata = {
  title: "Marlon Nino - Blogs",
  description: "Listing of my latest blogs",
};

const BlogList = async () => {
  const { data: posts } = (await fetchPosts()) || [];

  const images = ["/blog-1.webp", "/blog-2.webp", "/blog-3.webp"];

  return (
    <section id="blog">
      <div className="blog-heading">
        <span>My Recent Posts</span>
        <h3>My Blog</h3>
      </div>

      <div className="blog-container">
        {posts.length ? (
          <>
            {posts.map((post, index) => (
              <div key={post._id} className="blog-box">
                <div className="blog-img">
                  <Image
                    alt="blog"
                    src={images[index]}
                    height={960}
                    width={640}
                  />
                </div>
                <div className="blog-text">
                  <span>18 July 2021 / Web Design</span>
                  <a href={`/blogs/${post._id}`} className="blog-title">
                    {post.title}
                  </a>
                  <p>{post.description}</p>
                  <a href={`/blogs/${post._id}`}>Read More</a>
                </div>
              </div>
            ))}
          </>
        ) : (
          <p>No posts.</p>
        )}
      </div>
    </section>
  );
};

export default BlogList;
