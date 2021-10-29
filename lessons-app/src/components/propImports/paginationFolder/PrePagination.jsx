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
  // ex. href="!#" (click event)
  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className='page-tiem'>
            <a onClick={() => paginate(number)} className='page-link'></a>
            {number}
          </li>
        ))}

      </ul>

    </nav>
  )
}


// rfc (react functional components)