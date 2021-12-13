import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react/cjs/react.development';
import Accordion from './Accordion';

import PrePopUp from './prePopUp';

// rfce
// https://youtu.be/i8fAO_zyFAM

function PopUps() {

  const [buttonPopup, setButtonPopup] = useState(false);
  const [timedPopup, setIimedPopup] = useState(false);

  const PopupLink = "https://youtu.be/i8fAO_zyFAM";

  /*
  // step 1, then add to useEffect
  setTimeout(() => {
    setIimedPopup(true);
  }, 3000);
*/
  useEffect(() => {
    setTimeout(() => {
      setIimedPopup(true);
    }, 3000);   
  }, []);

  return (
    <div className='PopUp'>
      <main>
        <a href={PopupLink}>Build a POPUP component in React JS ~ A Beginner Tutorial with React Hooks!</a>
        <h1>React Popups</h1>
        <br/><br/>
        <button className='open-btn' onClick={() => setButtonPopup(true)} >Open Popup</button>
      </main>
      <PrePopUp trigger={buttonPopup} setTrigger={setButtonPopup} >
        <h3>My PopUP</h3>
        <p>This is my button triggered popup</p>
      </PrePopUp>

      <PrePopUp trigger={timedPopup} setTrigger={setIimedPopup} >
        <h3>My popup</h3>
        <p>This is my timedPopup triggered popup</p>
      </PrePopUp>

      <Accordion/>
    </div>

    );
}
 
export default PopUps;