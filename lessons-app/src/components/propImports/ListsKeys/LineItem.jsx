import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';

// This is a reusable component
function LineItem({item, handleCheck, handleDelete} ) {
  return (
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
        aria-label={`Delete ${item.item}`}
      />
    </li>
  )
}

export default LineItem;
