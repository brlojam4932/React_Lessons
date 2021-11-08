import React from 'react';

function Header({title} ) {
  return (
    <header>
      <h1>{title}</h1>
      <a href="https://youtu.be/XyIXMQ9SZmI">Link to video</a>
    </header>
  )
}

// default props
Header.default = {
  title: "Default Title"
}

export default Header;
