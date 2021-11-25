import React, { useRef } from 'react';
import Button from './Button';

function ImpHandleTut() {

  // we reference a component, instead of a Dom element
  const buttonRef = useRef(null);

  return (
    <div>
      <button onClick={() => {buttonRef.current.alterToggle()}}>Button from Parent</button>
      <Button ref={buttonRef}/> 
    </div>
  )
}

export default ImpHandleTut;
