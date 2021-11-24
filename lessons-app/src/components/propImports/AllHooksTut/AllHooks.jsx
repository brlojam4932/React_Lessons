import React, {useState} from 'react';


// React Hooks Course - All React Hooks Explained
// https://youtu.be/LlvBzyy-558

function AllHooks() {

  const [counter, setCount] = useState(0);
  const [inputValue, setInputValue] = useState("Ben");

  const [count, setCount2] = useState(0);
  const [showText, setShowText] = useState(true);

  const increment = () => {
    //console.log(counter);
    setCount(counter + 1);
  }

  const handleOnChange = (event) => {
    setInputValue(event.target.value);
  };

  // Pedro's way...
  /*
  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue); // no need ot handleChange in the input div
  }
  */
  

  return (
    <div>
      <h1>All Hooks</h1>

      <h2>State Hooks</h2>

      <div>{counter}</div>
      
      <button onClick={increment}>Increment</button>

      <br/><br/>
      <br/><br/>

      <div>
        <input placeholder="enter something..." onChange={(handleOnChange)} />
        {inputValue}
      </div>

      <br/><br/>
      <br/><br/>

      <h2>useState before Reducer version</h2>
      <div>
        <h1>{count}</h1>
        <button
        onClick={() => {
          setCount2((count + 1));
          setShowText(!showText);
        }}
        >
          Click Here
        </button>

        {showText && <p>This is a text</p>}
      </div>
      
    </div>
  )
}

export default AllHooks;
