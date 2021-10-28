import React, { useState } from 'react';

const RandGenApp = () => {
  const randomGenVideoLink = "https://youtu.be/jsLZkOiREJg";
  const [minVal, setMinVal] = useState(0);
  const [maxVal, setMaxVal] = useState(10);
  const [randomNum, setRandomNum] = useState(5);

  const handleRandomNum = () => {
    setRandomNum(Math.floor(Math.random() * ( maxVal - minVal + 1) + minVal));
  };

  return (
    <>
    <a href={randomGenVideoLink}>Link to Random Generator YouTube Video </a>
     <div className='randomNum'> 
       <h1>RANDOMIZER: MIN/MAX NUMBER GENERATOR</h1>
          <p>
            Random number: <span>{randomNum}</span>
          </p>
        </div>
        <div className='numContainer'>
          <div>
            <p>Min: {minVal} </p>
            <input type="number" value={minVal} onChange={(e) => setMinVal(+e.target.value)} ></input>
          </div>
          <div>
            <p>Max: {maxVal} </p>
            <input type="number" value={maxVal} onChange={(e) => setMaxVal(+e.target.value)} ></input>
          </div>
        </div>
        <button onClick={handleRandomNum}>Get random number</button>

    </>

  );
}

export default RandGenApp;