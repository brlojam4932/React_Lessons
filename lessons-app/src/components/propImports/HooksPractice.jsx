import React, { useState, useEffect } from 'react';

// simple react snippets: sfc - A stateless funcitonal component

const HooksPractice = () => {
  const videoHooksLink = "https://youtu.be/NIq3qLaHCIs";

  const [count, setCount] = useState(4);
  const [theme, setTheme] = useState("none");

  const [countAgain, setAgainCount] = useState(0);
  const [fruit, setFruit] = useState("banana");
  const [names, setNames] = useState("Ben");
  const [age, setAge] = useState(51);

  function decrementCount() {
    setCount(prevCount => prevCount - 1);
    setTheme('blue');
  }

  function incrementCount() {
    setCount(prevCount => prevCount + 1);
    setTheme('orange');
  }

  const fruitHandle = (fruit, e) => {
    alert("This fruit you chose is: " + fruit, e.target);
    setFruit(fruit);
  }

  const handleClick = (e) => {
    alert("Hello ninjas", e)
  }

  const handleInfo = () => {
    setNames("Frank");
    setAge(25)
    //alert("you have clicked");
  }

  useEffect(() => {
    document.title = `You clicked ${countAgain} times`;
  }, [fruit, countAgain] )

  return (
    <>
      <a href={videoHooksLink}>Link to Hooks YouTube Video</a>
      <h1>Hooks Practice</h1>
      <h3>Increment / Decrement Count</h3>
      <button type="button" className="btn btn-info" onClick={decrementCount} >-</button>
      <span>{count}</span>
      <span>{theme}</span>
      <button type="button" className="btn btn-warning" onClick={incrementCount} >+</button>
      <br />
      <br />
    
     
      <h1>Set Buttons</h1>
      <p>You Clicked {countAgain} times </p>
      <buton type="button" className="btn btn-outline-info" onClick={() => setAgainCount(countAgain + 1)}>Click Count</buton>

      <button type="button" className="btn btn-outline-success" onClick={(e) => fruitHandle("apple", e)} >Set Fruit</button>

      <button type="button" className="btn btn-outline-light" onClick={() => setFruit("Melons")}>Set Fruit</button>

      <button type="button" className="btn btn-outline-secondary" onClick={(e) => handleClick(e)}>Handle Click</button>

      <button type="button" className="btn btn-outline-secondary" onClick={() => handleInfo()} >Info</button>
      
        <p>Switch fruit name to: {fruit} </p>
        <p>Info:</p>
        <p>Name: {names}</p>
        <p>Age: {age} </p>

   
    </>

  );
}

export default HooksPractice;