import React, { useState } from 'react';
import Accordion from './Accordion';
// simple react snippets: sfc - A stateless funcitonal component


function Employees() {

  const [LoggedIn, setLoggedIn] = useState(false);
  const employees = ["Anthony", "Benjamin"];
  const [show, setShow] = useState(true);
  //const firstEmployee = [0];
  //const isUserLoggedIn = false;

  return (
    <>
    <div className='employees'>
      {employees.length > 0 && (
        <div>
          <h1>Employee List</h1>
          <p>Can be found in Employees jsx file</p>
          {employees.map((employee) => (
            <li>{employee} </li>
          ))}
        </div>
      )}
      <h1>Welcome to my app</h1>
      <p>Can be found in Employees jsx file</p>
      <buttton type="button" className="btn btn-primary" onClick={() => setLoggedIn(!LoggedIn)}>
        {LoggedIn ? "Log out" : "Log in"}
      </buttton>
      {LoggedIn ? (
        <h1>Hello Ben, you are logged in!</h1>
      ) : (
        <div>
          <h2>Please log in</h2>
        </div>
      )}
      <br />
      {show ? <h1>Hide me if you can</h1> : null}
      <p>Can be found in Employees jsx file</p>
      <button onClick={() => setShow(true)} type="button" className="btn btn-success">Show</button>
      <button onClick={() => setShow(false)} type="button" className="btn btn-danger">Hide</button>
    </div>
    <br />
    <br />
    <Accordion />
    </>
    
  );


}

export default Employees;