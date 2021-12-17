import React from 'react';

function Coin({ id, image, ticker, price, marketCap, tickerId, balance, inputValue, setInputValue, handleBuy, handleSell }) {


  const handleBuyClick = (event) => {
    event.preventDefault();
    handleBuy(tickerId, inputValue);
    //console.log("id and amount: ", tickerId + inputValue);
  }

  const handleSellClick = (event) => {
    event.preventDefault();
    handleSell(tickerId, inputValue);
  }


  return (
    <ul>
      <li key={id}>
        <img src={image} alt='coin-art' />
        <h4>{id}</h4>
        <h4>{ticker}</h4>
        <h4>{price}</h4>
        <h4>{marketCap}</h4>
        <div className="form-group has-success">
          <label className="form-label mt-4" for="inputValid">Valid input</label>
          <input type="number"
          required
          placeholder='Amount'
          onChange={(e) => setInputValue(e.target.value)}
          className="form-control is-valid" id="inputValid" />
          <p>Token:&nbsp;{tickerId}&nbsp;Amount:&nbsp;{inputValue}</p>
          <div className="valid-feedback">Success! You've done it.</div>
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
