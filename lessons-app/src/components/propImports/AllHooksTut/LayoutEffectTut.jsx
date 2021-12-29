import React, { useLayoutEffect, useEffect, useRef} from 'react';

// it renders the layoutEffect first, then useEffect second

// https://youtu.be/LlvBzyy-558?t=2854

function LayoutEffectTut() {
  const inputRef = useRef(null);

  useLayoutEffect(() => {
    console.log(inputRef.current.value);
  }, []);

  useEffect(() => {
    inputRef.current.value = "Hello";
  }, [])

  return (
    <>
    <h1>Layout Effect Tutorial</h1>
    <input ref={inputRef} value="Ben" style={{ width: 400, height: 25}}/>
    </>
  )
}

export default LayoutEffectTut;
