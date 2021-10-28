import React from 'react'
import Component from "./Component";

// check for renderable: below, node does not exist
// <Component renderable={{ a: 1 }} />
// element does or does not exist
// ex <Component renderable={ <Component /> } />
function PreComponentApp() {
  const link = 'https://youtu.be/cx0S8JyiVxc';
  return (
    <>
       <h1>Component / PropTypes2 </h1>
       <h4>Webdev Simplified: Learn React PropTypes In 13 Minutes - PropTypes</h4>
       <a href={link}>Link to video </a>
    <Component name="Sally" age={15} />
    </>
 
  );
};

export default PreComponentApp;