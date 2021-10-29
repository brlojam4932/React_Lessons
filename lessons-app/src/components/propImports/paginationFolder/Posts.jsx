import React from 'react'
// rfc
const Posts = ({ posts, loading }) => {

  if (loading) {
    // try adding a spinner animation
    return <h2>Loading...</h2>

  }

  // bootstrap
  return (
    <ul className='list-group mb-4'>
      {posts.map(post => (
        <li key={post.id} className='list-group-item'>
          {post.id} {post.title} {post.body}
        </li>
      ))}

    </ul>
  )
};

export default Posts;
