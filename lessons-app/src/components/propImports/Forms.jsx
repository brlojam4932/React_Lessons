import React, { useState } from 'react';

const Forms = () => {
  const formsVideoLink = "https://youtu.be/xHVm5qhaXWk";

const [userName, setUserName] = useState("");
const [password, setPassword] = useState("");
const [showPassword, setShowPassword] = useState(false);

//https://youtu.be/xHVm5qhaXWk

  return (
    <div>
      <br />
      <br />
      <a href={formsVideoLink}>Forms YouTube Link</a>
      <h1>Forms: Simple</h1>
      <input
      type="text"
      placeholder='Enter username'
      value={userName}
      onChange={(e) => setUserName(e.target.value)} >   
      </input>

      <input
      type={showPassword ? 'text' : "password" }
      placeholder='Enter password'
      value={password}
      onChange={(e) => setPassword(e.target.value)} >   
      </input>

      <h2>{userName}</h2>

      {/* if showPassword is true, display SHOW else NOT SHOW */}
      {/* 
        if the show password is true, display password
        else show * sign as many times as there are letters in the password
      */}
      <h3>{showPassword ? password : "*".repeat(password.length) } </h3>
      <button onClick={() => setShowPassword(!showPassword)} >Show/Hide password</button>
    </div>

 

  );
}

export default Forms;