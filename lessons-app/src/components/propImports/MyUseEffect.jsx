import React, { useState, useEffect } from 'react';

// rfce - react functional export component

function MyUseEffect() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  
  useEffect(() => {
    fetch( `https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
  }, [resourceType]);
  

  const handleResize = (() => {
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    }
  }, [] );
  
  return (
    <>
      <div>
        <h1>******USE EFFECTS*******</h1>
        <button type="button" className="btn btn-primary" onClick={() => setResourceType('posts')} >Posts</button>
        <button type="button" className="btn btn-primary" onClick={() => setResourceType('users')} >Users</button>
        <button type="button" className="btn btn-primary" onClick={() => setResourceType('comments')} >Comments</button>
      </div>
      <h1> {resourceType} </h1>
      {items.slice(0, 10).map(item => {
        return <pre>{JSON.stringify(item)} </pre>
      })}
      
  
      <h1>Window Event Listerner {windowWidth}</h1>

     
    </>

  )
}

export default MyUseEffect
