import React, { useState, useEffect } from 'react';

// rfce - react functional export component

function MyUseEffect() {
  const [resourceType, setResourceType] = useState('posts');
  const [items, setItems] = useState([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);


  const linkUseEffect = 'https://youtu.be/0ZJgIjIuY7U';

  
  useEffect(() => {
    console.log('resource changed');
    fetch( `https://jsonplaceholder.typicode.com/${resourceType}`)
      .then(response => response.json())
      .then(json => setItems(json))
      console.log('return from resource change');
  }, [resourceType] );
  
  const handleResize = (() => {
    setWindowWidth(window.innerWidth);
  });

  useEffect(() => {
    console.log('resource changed');
    window.addEventListener('resize', handleResize);

    return () => {
      console.log('return from resource change')
      window.removeEventListener('resize', handleResize);
    }
  }, [] );

  //let currentPage = indexStart + indexEnd;

  let indexStart = minVal;
  let indexEnd = maxVal;
  
  return (
    <>
      <div>
        <h1>Use Effects and Cleanup</h1>
        <a href={linkUseEffect} >Use Effect video link</a>
        <br/>
        <a href='https://jsonplaceholder.typicode.com/'>Link To JSON Placeholder </a>
        <br/>
        <br/>
        <button type="button" className="btn btn-primary" onClick={() => setResourceType('posts')} >Posts</button>
        <button type="button" className="btn btn-primary" onClick={() => setResourceType('users')} >Users</button>
        <button type="button" className="btn btn-primary" onClick={() => setResourceType('comments')} >Comments</button>

      
        <p>Min: {minVal}</p>
        <input type='number' value={minVal} onChange={(e) => setMinVal(e.target.value)} ></input>
        <p>Max: {maxVal}</p>
        <input type="number" value={maxVal} onChange={(e) => setMaxVal(e.target.value)} ></input>
      </div>
      
      <h1> {resourceType} {resourceType.length} </h1>

      {items.slice(indexStart, indexEnd).map(item => {
        return  <pre key={item.id} >{JSON.stringify(item)}</pre>
      })}

  
      <h1>Window Event Listerner {windowWidth}</h1>

     
    </>

  )
}

export default MyUseEffect
