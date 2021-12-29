import React, { useState, useCallback } from 'react';
import CallBackList from './CallBackList';

function Callback() {
  const [number, setNumber] = useState(1);
  const [dark, setDark] = useState(false);

  const getItems = useCallback(() => {
    return [number, number + 1, number + 2]
  }, [number]);

  const theme = {
    backgroundColor: dark ? "#333" : "#FFF",
    color: dark ? "#FFF" : "#333"
  }
  return (
    <div style={theme}>
      <h1>Use CaLLback</h1>
      <a href='https://youtu.be/_AyFP5s69N4'></a>
      <input
        type="number"
        value={number}
        onChange={e => setNumber(parseInt(e.target.value))} 
      />
      <button onClick={() => setDark(prevDark => !prevDark)}>Toggle Me</button>
      <CallBackList getItems={getItems} />
    </div>
  )
}

export default Callback;
