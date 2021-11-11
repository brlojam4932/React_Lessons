import React, { useState, useEffect } from 'react';
//import styled from 'styled-components';

// hooks / custom hooks | could not complete it; failed with errors
 function ReactConf() {

  //const _myName = useFormInput('Janet');
  //const _surName = useFormInput('Lopez');
  //useDocumentTitle(_myName.value + ' ' + _surName.value);
  const [myName, setMyName] = useState("marry");
  const [surName, setSurName] = useState('poppins');
  const width = useWindowWidth();
  useDocumentTitle(myName + ' ' + surName);
 

  // ...runs after initial render and after every update
  useEffect(() => {
    document.title = myName + ' ' + surName;
  });

  
  // they are too similar so they can be extracted
  function handleNameChange(e) {
    setMyName(e.target.value);
  };

  function handleSurNameChange(e) {
    setSurName(e.target.value);
  };


  return (
    <>
      <section>
      <h1>React Conference 2018</h1>
      <h4>hooks / custom hooks</h4>
    
      <a href='https://youtu.be/dpw9EHDh2bM?t=2743'>link to video</a>
      <br/>
      <br/>
      <row label="Name">
        <input
          value={myName}
          onChange={handleNameChange}
        />
      </row>
      <row label="SurName">
        <input
          value={surName}
          onChange={handleSurNameChange}
        />
      </row>
      <p>{myName}</p>
      <p>{surName}</p>
      <br/>
      <h2>Width {width}</h2>
    </section>
      {/* 
      
      <section>
        <h1>React Conference 2018</h1>
        <rows label="Name">
          <input {..._myName}/>
        </rows>
        <rows label="SurName">
          <input {..._surName}/>
        </rows>
        <p>Name {_myName}</p>
        <p>Surname {_surName}</p>
        <br />
        <h2>Width {width}</h2>
      </section>
    
    */}

    </>

  );

}

function useDocumentTitle(title) {
  useEffect(() => {
    document.title = title;
  });
}

function useWindowWidth() {
  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    //clean up
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  });
  return width;

}

export default ReactConf;
/*

//Extracting a function; "Custom Hook"

function useFormInput(initialValue) {
  const [value, setValue] = useState(initialValue);

  function handleChange(e) {
    setValue(e.target.value);
  }

  return {
    value,
    onChange: handleChange
  };
}

*/
