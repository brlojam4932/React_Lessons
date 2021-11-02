import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import axios from "axios";
import Posts from './Posts';
import PrePagination from './PrePagination';

// rfce
// https://youtu.be/IYCa1F-OWmk

function Pagination() {

  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(10);

  useEffect(() => {
    // must create a new function when using synca await
    const fetchPosts = async () => {
      setLoading(true);
      const res = await axios.get('https://jsonplaceholder.typicode.com/posts');
      setPosts(res.data);
      setLoading(false);
    }
    fetchPosts();
  }, []); // the loop now stops here (dependancies go in array) - like component did mount cycle method
  console.log(posts);

  // Get current posts

  // We get the index of the last post by mult the current page by the posts per page.

  // To get the index of the first post, we take the index of last post and subtract the posts per page.

  // To get current page, we get the state and use slice(0, 10) method;
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Change Page
  // number (from PrePagination) is passed as an argument here
  const paginate = pageNumber => setCurrentPage(pageNumber);


  // using bootstrap for styling
  // Posts takes in posts as a prop and loading
  return (
    <div className='constainer mt-5'>
      <h1 className='text-primary mb-3' >Pagination</h1>
      <br/>
      <a href='https://youtu.be/IYCa1F-OWmk'>link to pagination video</a>
     
      <Posts posts={currentPosts} loading={loading} />
      <PrePagination 
      postsPerPage={postsPerPage}
      totalPosts={posts.length}
      paginate={paginate}
      />

    </div>
  )
}

export default Pagination;
