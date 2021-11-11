import React from 'react'

function SearchItem({ search, setSearch }) {
  return (
    <form className="searchFrom" onSubmit={(e) => e.preventDevault()} >
      <label htmlFor="search"></label>
      <input
      id="search"
      type='text'
      role="searchbox"
      placeholder='Search Items'
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      />
    </form>
  )
}

export default SearchItem;
