import React from 'react';
import { useContext } from 'react/cjs/react.development';
import { AppContext } from './ContextTut';

function Login() {
  const { setUsername } = useContext(AppContext);
  return (
    <div>
      <input onChange={(event) => {
        setUsername(event.target.value);
      }} />
      
    </div>
  )
}

export default Login;
