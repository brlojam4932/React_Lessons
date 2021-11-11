import React from 'react';
import Header from "./Header";
import AddItem from './AddItem';
import Content from "./Content";
import Footer from './Footer';
import { useState, useEffect } from "react";
import SearchItem from './SearchItem';
import "./apiRequest";
import apiRequest from './apiRequest';

//===========LAUNCH SERVER=========================
//npx json-server -p 3500 -w data/db.json
// p for 'port', w for 'watch'

function Groceries() {
  const API_URL = 'http://localhost:3500/items';

  const [items, setItems] = useState([]);
  const [newItem, setNewItem] = useState('');
  const [search, setSearch] = useState('');
  const [fetchError, setFetchError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchItems = async () => {
      try {
        // fetch api url -- get requests and return JSON
        // response -> listItems await to convert to json; get list items
        // setItems to listItems
        const response = await fetch(API_URL);
        if (!response.ok) throw Error('Did not receive expected data');
        //==========REMEMBER TO=LAUNCH SERVER=========================
        //npx json-server -p 3500 -w data/db.json
        const listItems = await response.json();
        //console.log(listItems);
        setItems(listItems);
        // if no errors, we setFetchError to null
        setFetchError(null);
      } catch (err) {
        console.log(err.message);
        // if there are errors, we setFetchError equal to err.message
        setFetchError(err.message);
      } finally {
        setIsLoading(false);
      }
    }
    // simulation for time it takes to get a response in the real-world
    setTimeout(() => {
      (async () => await fetchItems())();
    }, 2000);

    // Call async funtion in it's own instantly instantiated async function. Await fetch items + operators
    (async () => await fetchItems())();
  }, []);

  // our api requests are async so we convert our addItem function into an async
  const addItem = async (item) => {
    // trunary statement
    // if there are items in our current state, not 0, we pass the item's length
    // Last item in the list - 1 = quantity
    // we get the id of the last item increment id by 1
    // if item has no length = 0; so we add 1; hence id = 1
    const id = items.length ? items[items.length - 1].id + 1 : 1;
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setItems(listItems);

    const postPotions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(myNewItem)
    }
    const result = await apiRequest(API_URL, postPotions);
    if (result) setFetchError(result);
  }

  const handleCheck = async (id) => {
    //console.log(`key: ${id}`);
    //shallow copy of an array method
    //const ListItem = [...items] - we use map instead
    //but shallow copy is used to copy the array into a new listItems array, if item.id is matched with the clicked item's id.
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);

    const myItem = listItems.filter((item) => item.id === id);
    const updateOptions = {
      method: "PATCH",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({checked: myItem[0].checked})
    };
    // CRUD OPERATIONS
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, updateOptions);
    if (result) setFetchError(result);
  }

  const handleDelete = async (id) => {
    //console.log(id);
    const listItems = items.filter((item) => item.id !== id);
    setItems(listItems);

    // CRUD OPERATIONS
    const deleteOptions = { method: 'DELETE' };
    const reqUrl = `${API_URL}/${id}`;
    const result = await apiRequest(reqUrl, deleteOptions);
    if (result) setFetchError(result);
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
      <Header title='Groceries' />
      <AddItem
        newItem={newItem}
        setNewItem={setNewItem}
        handleSubmit={handleSubmit}
      />
      <SearchItem
        search={search}
        setSearch={setSearch}
      />
      <main>
        {isLoading && <p>Loading Items...</p> }
        {fetchError && <p style={{ color: "#ff1a1a" }}>{`Error: ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content
          items={items.filter(item => ((item.item).toLowerCase()).includes(search.toLowerCase()))}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />
        }
      </main>

      <Footer length={items.length} />

    </div>
  )
}

export default Groceries;
