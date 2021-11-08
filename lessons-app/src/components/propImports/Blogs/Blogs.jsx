import React from 'react';
import { useState, useEffect } from 'react';
import Form from './Form';
//import List from './List';
import Table from "./Table";
import "../../css/Blogs.css";

export default function Blogs() {
  const API_URL = 'https://jsonplaceholder.typicode.com/';
  const [reqType, setReqType] = useState('posts');
  const [items, setItems] = useState([]);


  //console.log('render');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        const response = await fetch(`${API_URL}${reqType}`);
        const data = await response.json();
        //console.log('blogs ', data);
        setItems(data);
      } catch (err) {
        console.log(err);
      }
    }
    fetchItems();

  }, [reqType]);


  return (
    <div className="App">
      <h1>Practice Blogs and Fetch</h1>
      <h1>{items.length} {reqType}</h1>
        <Form reqType={reqType} setReqType={setReqType}/>
        <Table items={items}/>
       
    </div>
  )
}
