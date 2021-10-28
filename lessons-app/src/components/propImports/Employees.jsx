import React, { useState } from 'react';
// simple react snippets: sfc - A stateless funcitonal component


function Employees() {

  const [LoggedIn, setLoggedIn] = useState(false);
  const employees = ["Anthony", "Benjamin"];
  const [show, setShow] = useState(true);
  //const firstEmployee = [0];
  //const isUserLoggedIn = false;

  return (
    <div className='employees'>
      {employees.length > 0 && (
        <div>
          <h1>Employee List</h1>
          {employees.map((employee) => (
            <li>{employee} </li>
          ))}
        </div>
      )}
      <h1>Welcome to my app</h1>
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
      {
        show ? <h1>Hide me if you can</h1> : null
      }
      <button onClick={() => setShow(true)} type="button" className="btn btn-success">Show</button>
      <button onClick={() => setShow(false)} type="button" className="btn btn-danger">Hide</button>
    </div>
  );
}

export default Employees;