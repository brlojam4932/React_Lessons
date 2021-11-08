import React, { useState, useEffect } from 'react';
import axios from "axios";
import "../../css/PostsEx.css";
import AccountBal from './AccountBal/AccountBal.jsx';
import _ from "lodash";
import styled from 'styled-components';
// file paths explained:
//https://youtu.be/hxto_sRZsBg

const Td = styled.td`
  border: 2px solid #cccccc,
  width: 15vw;
`

function PostsExchange() {

  const [posts, setPosts] = useState([]);
  const [paginatedPosts, setPaginatedPosts] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 10;

  const [showBalance] = useState(10000);
  //const [coinData, setCoinData] = useState([])

  useEffect(() => {
    axios.get('https://api.coinpaprika.com/v1/tickers')
      .then(res => {
        console.log(res.data);
        setPosts(res.data);
        setPaginatedPosts(_(res.data).slice(0).take(pageSize).value());
      });
  }, []);

  const totalPages = 50;
  const pageCount = posts ? Math.ceil(totalPages/ pageSize) : 0;
  if (pageCount === 1) return null;
  const pages = _.range(1, pageCount + 1);

  const pagination=(pageNo) => {
    setCurrentPage(pageNo);
    const startIndex = (pageNo - 1) * pageSize;
    const paginatedPost = _(posts).slice(startIndex).take(pageSize).value();
    setPaginatedPosts(paginatedPost);
  };


  
  const handleRefresh = (event) => {
    event.preventDefault();
  }


  // check out uuid plugin to create Key names
  return (
    <div>
      <h1>React table with pagination</h1>
      <a href='https://youtu.be/kEd81ZirrCY'>Link to tutorial</a>
      <br />
      <br />
      <AccountBal amount={showBalance} />
      <br />
      <br />
       {
      !paginatedPosts ? ("No data found") : (
        <table className="table table-hover data">
          <thead>
            <tr className="table-dark">
              <th>Rank</th>
              <th>ID</th>
              <th>Name</th>
              <th>Ticker</th>
              <th>Price</th>
              <th>Status</th>
             
            </tr>
          </thead>
          <tbody>
            {
              paginatedPosts.map((post, index) => (
                <tr key={index}>
                  <Td>{post.rank}</Td>
                  <Td>{post.id}</Td>
                  <Td>{post.name}</Td>
                  <Td>{post.symbol}</Td>
                  <Td>$ {post.quotes.USD.price }</Td>   
                  <Td>
                    <p className={
                      post.completed ? 'btn btn-success' : 'btn btn-danger'
                    }>
                      {post.completed ? "Completed" : "Pending"}

                    </p>
                    <form action="#">
                      <button className='btn btn-outline-info' onClick={handleRefresh}  >Refresh</button>

                    </form>
                  </Td>
                 
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
              <li className={
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

export default PostsExchange;
