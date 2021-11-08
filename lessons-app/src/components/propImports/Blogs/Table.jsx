import React from 'react';
import Row from './Row';

const Table = ({items}) => {
  return ( 
    <div className="table-container">
      <table>
        <tbody>
          {items.slice(0, 20).map(item => (
            <Row key={item.id} item={item}/>
          ))}
        </tbody>
      </table>

    </div>
   );
}
 
export default Table;