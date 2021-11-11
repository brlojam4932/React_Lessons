import React from 'react';
import Header from "./Header";
import AddItem from './AddItem';
import Content from "./Content";
import Footer from './Footer';
import { useState, useEffect } from "react";
import SearchItem from './SearchItem';

//===========LAUNCH SERVER=========================
//npx json-server -p 3500 -w data/db.json
// p for 'port', w for 'watch'

function Groceries() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // fetch api url -- get requests and return JSON
        // response -> listItems await to convert to json; get list items
        // setItems to listItems
        const response = await fetch(API_URL);
        const listItems = await response.json();
        console.log(listItems);
        setItems(listItems);
      } catch (err) {
        console.log(err.stack)
      }
    }
    // Call async funtion in it's own instantly instantiated async function. Await fetch items + operators
    (async () => await fetchItems())();
  }, []);


  const addItem = (item) => {
    // trunary statement
    // if there are items in our current state, not 0, we pass the item's length
    // Last item in the list - 1 = quantity
    // we get the id of the last item increment id by 1
    // if item has no length = 0; so we add 1; hence id = 1
    const id = items.length ? items[items.length -1].id + 1 : 1;
    const myNewItem = { id, checked: false, item};
    const listItems = [...items, myNewItem];
    setItems(listItems);
  }

  const handleCheck = (id) => {
    //console.log(`key: ${id}`);
    //shallow copy of an array method
    //const ListItem = [...items] - we use map instead
    //but shallow copy is used to copy the array into a new listItems array, if item.id is matched with the clicked item's id.
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);  
  }

  const handleDelete = (id) => {
    //console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    // add item
    addItem(newItem);
    // this allows us to reset the input field
    setNewItem('');
  }

  // ------------THIS IS PROP DRILLING, BELOW------------
  // passing down the props from the parent to the children components
  return (

    <div className="GroceriesApp">
      <Header title='Groceries'/>
      <AddItem
      newItem={newItem}
      setNewItem={setNewItem}
      handleSubmit={handleSubmit}
      />
       <SearchItem
      search={search}
      setSearch={setSearch}
      />
      <Content
        items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
        handleCheck={handleCheck}
        handleDelete={handleDelete}
      />
      <Footer length={items.length}/>

    </div>
  )
}

export default Groceries;
