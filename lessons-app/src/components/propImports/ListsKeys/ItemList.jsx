import React from 'react';
import LineItem from './LineItem';

// prop drilling, two levels down from parent
function ItemList({ items, handleCheck, handleDelete }) {
  return (
    <ul>
      {items.map((item) => (
        <LineItem
          key={item.id}
          item={item}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

      ))}
    </ul>
  )
}

export default ItemList;
