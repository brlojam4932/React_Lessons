import React from 'react';
import ItemList from './ItemList';


// prop drilling, one level down from parent
function Content({ items, handleCheck, handleDelete }) {

  // if list has 0 items; your list is empty
  // this will need to be astracted into it's own component

  // now ItemList is abtracted and it's props are imported

  return (

    <main>
      {items.length ? (
        <ItemList
          items={items}
          handleCheck={handleCheck}
          handleDelete={handleDelete}
        />

      ) : (
        <p style={{ marginTop: '2rem' }}>Your list is empty.</p>
      )}
    </main>
  )
}

export default Content;
