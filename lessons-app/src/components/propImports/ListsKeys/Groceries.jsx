import React from 'react';
import Content from "./Content";


function Groceries() {

  const today = new Date();


  return (

    <div className="Groceries">
          <header>
            <h1>Groceries List</h1>
        </header>

        <Content />

        <footer>
            <p>Copyright &copy; {today.getFullYear()}</p>
        </footer>
      
      
    </div>
  )
}

export default Groceries
