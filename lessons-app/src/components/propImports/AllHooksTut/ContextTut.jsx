import React, { useState, createContext } from 'react';
import User from './User';
import Login from './Login';

// check out Context api in Pedro's channel for more in
// depth explanation

// instead of passong props, we can use Context

export const AppContext = createContext(null);

function ContextTut() {
  const [username, setUsername] = useState("");

  return (
    <AppContext.Provider value={{username, setUsername}}>
      <h1>Context Tutorial</h1>
      <Login  />
      <User />
    </AppContext.Provider>
  );
};

export default ContextTut;
