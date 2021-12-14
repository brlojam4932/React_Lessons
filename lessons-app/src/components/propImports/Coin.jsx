import React from 'react';



function Coin({id, image, ticker, price, marketCap, tickerId, transaction, }) {


  const handleBuyClick = (event) => {
    event.preventDefault();
    transaction(true, tickerId);
  }
  

  return (
    <div>

      <li key={id}>
        <img src={image} alt='image-art' />
        <h4>{id}</h4>
        <h4>{ticker}</h4>
        <h4>{price}</h4>
        <h4>{marketCap}</h4>
        <form action='#' method='POST'>
          <button onClick={handleBuyClick}>buy</button>
        </form>
      </li>

    </div>
  )
}



export default Coin;
