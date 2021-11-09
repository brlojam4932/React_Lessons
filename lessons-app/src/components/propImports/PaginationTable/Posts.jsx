import React, { useState } from 'react';
import axios from "axios";
import "../../css/PostsEx.css";
import { useEffect } from 'react/cjs/react.development';
//import { Link } from 'react-router-dom';
import _ from "lodash";

function Posts() {

  const [posts, setPosts] = useState();
  const [paginatedPosts, setPaginatedPosts] = useState();
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/todos')
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
        setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());
      });
  }, []);

  const pageCount = posts ? Math.ceil(posts.length / pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination=(pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPost);
  };


  return (
    <div>  
       {
      !paginatedPosts ? ("No data found") : (
        <table className="table table-hover">
          <thead>
            <tr className="table-primary">
              <th >ID</th>
              <th>User ID</th>
              <th>Tile</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {
              paginatedPosts.map((post) => (
                <tr key={post.id}>
              
                  <td>{post.userId}</td>
                  <td>{post.title}</td>
                  <td>
                    <p className={
                      post.completed ? 'btn btn-success' : 'btn btn-danger'
                    }>
                      {post.completed ? "Completed" : "Pending"}

                    </p>
                  </td>
                </tr>
              ))
            };
          </tbody>
        </table>
      )}
      <nav className='d-flex justify-content-center'>
        <ul className='pagination'>
          {
            pages.map((page) => (
              <li key={page.toString()} className={
                page === currentPage ? "page-item active" : "page-item"}>
                <p className='page-link' 
                onClick={() => pagination(page)}
                >{page}</p>
              </li>
            ))
          }
        </ul>
      </nav>

    </div>
  )
};

export default Posts;
