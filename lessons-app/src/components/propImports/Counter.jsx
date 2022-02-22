import { func } from 'prop-types';
import React, {useState, useEffect} from 'react';

export default function Counter() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const someProp = "some property";

  const tick = () => {
    setCount(count + 1)
  };

  // here we can use the prev function and not have to include it as a dependancy in our useEffect function
  const tick2 = () => {
    setCount2(prevCount2 => prevCount2 + 1);
  }

  useEffect(() => {
    const interval = setInterval(tick, 1000);
    return () => {
      clearInterval(interval);
    };
    // dependancy array is NOT! a way to decide when you want to run your effect
    // instead, the dependancy array, lets React know about everything useEffect must watch...for changes.

    // an empty array tells useEffect to IGNORE any changes
    // adding "count", useEffect updates the counter (listens for changes)
  }, [count]);


  // no need to include count2 as dependancy with tick2
  useEffect(() => {
    const interval = setInterval(tick2, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);


  useEffect(() => {
    function doSomething() {
      console.log(someProp);
    }

    doSomething()
  }, [someProp]);

  return (

    <div>
      <a href='https://youtu.be/SP-NrbQHFww'>Link to video</a>
      <h3>React Hooks Tutorial - 11 - useEffect with incorrect dependency</h3>
      {count}

      <div>
        <h3>Counter 2</h3>
        {count2}
        {" "}
        {someProp}
      </div>
    </div>


  );
 
}
