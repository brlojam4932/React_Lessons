import React from 'react';



function Coin({ id, image, ticker, price, marketCap, tickerId, transaction, balance }) {


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
        <img src={image} alt='coin-art' />
        <h4>{id}</h4>
        <h4>{ticker}</h4>
        <h4>{price}</h4>
        <h4>{marketCap}</h4>
        <div class="form-group has-success">
          <label class="form-label mt-4" for="inputValid">Valid input</label>
          <input type="text" 
          value="correct value" 
          class="form-control is-valid" id="inputValid" />
          <div class="valid-feedback">Success! You've done it.</div>
        </div>
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
