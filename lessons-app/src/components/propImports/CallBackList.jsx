import React, { useEffect, useState } from 'react';

function CallBackList({ getItems }) {
  const [items, setItems] = useState([]);

  useEffect(() => {
    setItems(getItems())
    console.log('updating items')
  }, [getItems])

  return items.map(item => <div key={item}>{item}</div>)
}

export default CallBackList;
