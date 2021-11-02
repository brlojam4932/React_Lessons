import React from 'react'

// function takes props from Use State components
export default function PrePagination({ postsPerPage, totalPosts, paginate }) {

  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    // set next 10 index if less than or equal to
    // the total posts, devided by posts per page
    pageNumbers.push(i) // push i to pageNumbers array
  }

  // ul.class
  // bootstrap
  // ex. href="!#" (click event) removed - not sure how it works -- href="/hooksPractice"
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className='page-item'>
            <p onClick={() => paginate(number)}  className='page-link'></p>
            {number}
          </li>
        ))}

      </ul>

    </nav>
  )
}


// rfc (react functional components)