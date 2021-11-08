import React from 'react';
import { useState } from "react";
import { FaTrashAlt } from 'react-icons/fa';

function Content() {

  const [items, setItems] = useState([
    {
      id: 1,
      item: "Bitcoin has aperiam sed aut tenetur, itaque error nostrum voluptatem consectetur id a quaerat laborum et cupiditate? Alias assumenda nisi animi porro libero tempora eum dolor. Ipsum!",
      author: "Rex",
      checked: false

    },
    {
      id: 2,
      item: "Ethereum will ipsum dolor sit, amet consectetur adipisicing elit. Sit corrupti debsamus eos aliquam. Iste upiditate? Alias assumenda nisi animi porro libero tempora eum dolor. Ipsum!",
      author: "Jill",
      checked: false
    },
    {
      id: 3,
      item: "Third coin has ipsum dolor sit, amet consectetur adipisicing elit. Sit corrupti debitis excemus commodi autem?",
      author: "mario",
      checked: false

    },
    {
      id: 4,
      item: "Fourth Coin ipsum dolor sit, amet consectetur adipisicing elit. Sit m consectetur id a quaerat laborum et cupiditate? Alias assumenda nisi animi porro libero tempora eum dolor. Ipsum!",
      author: "mario",
      checked: false
    },
    {
      id: 5,
      item: "Fith Coin ipsum dolor sit, amet consectetur adipisicing elit. Sit cupiditate? Alias assumenda nisi animi porro libero tempora eum dolor. Ipsum!",
      author: "mario",
      checked: false
    },
    {
      id: 6,
      item: "Sixth Coin ipsum dolor sit, amet consectetur adipisicing elit. Sit corrupti debitis excepturi porro libero tempora eum dolor. Ipsum!",
      author: "mario",
      checked: false
    }
  ]);

  const handleCheck = (id) => {
    //console.log(`key: ${id}`);
    //shallow copy of an array method
    //const ListItem = [...items] - we use map instead
    //but shallow copy is used to copy the array into a new listItems array, if item.id is matched with the clicked item's id.
    const listItems = items.map((item) => item.id === id ? { ...item, checked: !item.checked } : item);
    setItems(listItems);
    localStorage.setItem('shoppiglist', JSON.stringify(listItems));
  }

  return (

    <main>
      <ul>
        {items.map((item) => (
          <li className="item" key={item.id}>
            <input
              type="checkBox"
              onChange={() => handleCheck(item.id)}
              checked={item.checked}>
            </input>
            <label>{item.item}</label>

            <FaTrashAlt
              role="button"
              tabIndex="0"
            />

          </li>

        ))}
      </ul>
    </main>

  )
}

export default Content;
