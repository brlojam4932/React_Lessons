import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form';
//import List from './List';
import Table from "./Table";
import "../../css/Blogs.css";

//'https://jsonplaceholder.typicode.com/'
export default function Blogs() {

  const API_URL = 'https://jsonplaceholder.typicode.com/';

  const [reqType, setReqType] = useState('users');
  //data we get back
  const [items, setItems] = useState([]);


  // our login
  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        console.log(data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }

    fetchItems();
    // here is our side effect, it runs when the rquest type changes
  }, [reqType])


  return (
    <div className="Blogs">
      <a href="https://youtu.be/lf_uNOKVSnM">Link to video</a>
      <p>React Beginners Challenge - Fetch API Data | React JS Beginners Project</p>
      <h1>Number of {reqType} {items.length}</h1>
      <h3>Improvement: Recursion can "flatten-out" objects</h3>
      <Form 
      reqType={reqType}
      setReqType={setReqType}
      />
      { /* <List items={items}/>  <=simple output */ }
      <Table 
      items={items}
      />
    </div>
  )
}
