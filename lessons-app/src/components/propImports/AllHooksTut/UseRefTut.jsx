import React, { useRef } from 'react';

function UseRefTut() {

  // Useful for manipulating the DOM

  const inputRef = useRef(null);

  const handleOnClick = () => {
    //console.log(inputRef.current.value);
    //inputRef.current.focus(); // adds focus to your input
    inputRef.current.value = ""; // clear out an input field
    
  }

  return (
    <div>
      <h1>Ben </h1>
      <input type="text" placeholder='Ex...' ref={inputRef} />
      <button onClick={handleOnClick}>Change Name</button>
    </div>
  )
}

export default UseRefTut;
