import React from 'react';
import Cell from './Cell';

// value is stringified with JSON since they are nested objects from the user resource
const Row = ( {item} ) => {
  return ( 
    <tr>
      {Object.entries(item).map(([key, value]) => {
        return (
         <Cell key={key} cellData={JSON.stringify(value)}/>

        )
      })}
    </tr>

   );
}
 
export default Row;