import React from 'react';



function Coin({id, image, ticker, price, marketCap, tickerId, transaction, balance }) {


  const handleBuyClick = (event) => {
    event.preventDefault();
    transaction(true, tickerId);
  }

  const handleSellClick = (event) => {
    event.preventDefault();
    transaction(false, tickerId);
  }
  

  return (
    <ul>
      <li key={id}>
        <img src={image} alt='image-art' />
        <h4>{id}</h4>
        <h4>{ticker}</h4>
        <h4>{price}</h4>
        <h4>{marketCap}</h4>
        <form action='#' method='POST'>
          <button onClick={handleBuyClick}>buy</button>
          <button onClick={handleSellClick}>sell</button>
        </form>
        <h4>Balance {balance}</h4>

      </li>
    </ul>
  )
}



export default Coin;
