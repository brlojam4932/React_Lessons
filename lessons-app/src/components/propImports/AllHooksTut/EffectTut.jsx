import React, { useEffect} from 'react';
import axios from "axios";
import { useState } from 'react/cjs/react.development';

// https://youtu.be/LlvBzyy-558?t=1665

function EffectTut() {
  const [data, setData] = useState("");
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/comments")
    .then((response) => {
      setData(response.data[0].email)
      //console.log("EffectTut: ", response.data);
      console.log("api was called");
    });
  }, [count]); // this array can stop repeated calls to the api or they can be selectivley triggered.


  return (
    <div>
      <h1>Use Effect Tut {data}</h1>

      <div>
        <h1>{count}</h1>
        <button onClick={() => {setCount(count + 1)}}>Click Counter</button>
      </div>

      
    </div>
  )
}

export default EffectTut;
