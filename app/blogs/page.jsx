import React from 'react'

const fetchPosts = async () => {
  const response = await fetch('http://localhost:3000/api/posts')

  const data = await response.json()

  return data
}

const BlogList = async () => {
  const posts = (await fetchPosts()) || [];

  return (
    <div>Blog List</div>
  )
}

export default BlogList