import React, { useState } from 'react';
// simple react snippets: sfc - A stateless funcitonal component

const Home = () => {
  // dynamic values
  const title = "Welcome to the new blog";
  const likes = 50;
  const person = { name: "Benjamin", age: 51 };
  const link = "http://www.google.com";
  const linkReact = 'https://reactjs.org/';
  const randGen = Math.random() * 10;

  const [randNum, setRandNum] = useState(5);

  const handleRandNum = () => {
    setRandNum(randGen);
  }

  return (
    <div className="home">
      <div className="list-group">
        <h1> {title}</h1>
        <p>Liked {likes} times </p>
        <p> {person.name} {person.age} </p>
        <p>{10}</p>
        <p>{"hello, ninjas"} </p>
        <p> {[1, 2, 3, 4, 5]} </p>
        <h1>{Math.random() * 10} </h1>
        <a href={link}>Google Site</a>
        <a href={linkReact} >Link to React.org</a>
      </div>
      <a href="https://reactjs.org/docs/hooks-rules.html" class="list-group-item list-group-item-action flex-column align-items-start active">
        <div className="d-flex w-100 justify-content-between">
          <h5 className="mb-1">List group item heading</h5>
          <small>3 days ago</small>
        </div>
        <p className="mb-1">Donec id elit non mi porta gravida at eget metus. Maecenas sed diam eget risus varius blandit.</p>
        <small>Donec id elit non mi porta.</small>
      </a>
      <br />

      <div className="list-group">
        <a href={link} className="list-group-item list-group-item-action active">{"Hello, Ninjas: click me to Google"}</a>
        <a href="https://bootswatch.com/flatly/" className="list-group-item list-group-item-action">Liked {likes} times</a>
        <p className="list-group-item list-group-item-action disabled">Random Number Generator: {randNum}</p>
        <button className="btn btn-lg btn-primary" type="button" onClick={handleRandNum}>Randomize</button>
      </div>
      <br />

      <ul className="list-group">
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Member ID: {[1, 2, 3, 4, 5]}
          <span className="badge bg-primary rounded-pill">14</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Member: {person.name}, Age: {person.age}
          <span className="badge bg-primary rounded-pill">2</span>
        </li>
        <li className="list-group-item d-flex justify-content-between align-items-center">
          Member has {likes} likes.
          <span className="badge bg-primary rounded-pill">1</span>
        </li>
      </ul>

    </div>

  );
}

export default Home;