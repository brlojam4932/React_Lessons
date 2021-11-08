import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

// prop drilling, two leves down from parent
function ItemList({items, handleCheck, handleDelete}) {
  return (
    <ul>
      {items.map((item) => (
        <li className="item" key={item.id}>
          <input
            type="checkBox"
            onChange={() => handleCheck(item.id)}
            checked={item.checked}>
          </input>
          <label
            style={(item.checked) ? { textDecoration: 'line-through' } : null}
            onDoubleClick={() => handleCheck(item.id)}
          >{item.item}
          </label>

          <FaTrashAlt
            onClick={() => handleDelete(item.id)}
            role="button"
            tabIndex="0"
          />
        </li>
      ))}
    </ul>
  )
}

export default ItemList;
