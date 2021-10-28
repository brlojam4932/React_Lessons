//import { bool } from "prop-types";
import React, { useState } from "react";
// simple react snippets: sfc - A stateless funcitonal component


const RenderChildren = () => {
  const conditionalRenderLink = 'https://youtu.be/fAUkKh-WfLM';


  const jDavischildren = ["Barbara", "Jason", "Rose"];
  // const benChildren = [];

  const [isChildren, setChildren] = useState(false);

  return (
    <>
    <a href={conditionalRenderLink} >Conditional Rendering Video</a>
    <div onClick={() => setChildren(!isChildren)}>
      {isChildren ? "No Children" : "Yes, you have children"}

      {!isChildren && jDavischildren.length > 0 && (
        <div>
          <h1>Children List:</h1>
          {jDavischildren.map((jDavischildren) => (
            <li> {jDavischildren}</li>
          ))}
        </div>
      )}
      {isChildren ? (
        <h1>Sorry, you don't have children</h1>
      ) : (
        <div className="alert alert-dismissible alert-success">
          <button type="button" className="btn-close" data-bs-dismiss="alert"></button>
          <strong>Well done!</strong> You have {jDavischildren.length} childern.
        </div>

      )}

    </div>
    </>

    
  );
};

export default RenderChildren;