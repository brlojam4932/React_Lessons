import React from 'react';
import ListItem from "./ListItem";

//this List component is replaced by the Table component

function List({ items }) {
  return (
    <ul>
     {items.slice(0, 50).map((item) => (
       <ListItem key={item.id} item={item} />
     ))}

    </ul>
    
  )
}

export default List;
