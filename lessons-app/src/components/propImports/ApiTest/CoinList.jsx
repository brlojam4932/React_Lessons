import React from 'react';
import Coin from "./Coin";

function CoinList({ transaction, coinData, inputValue, setInputValue, handleBuy, handleSell }) {
  return (

   
    <div className='coins'>
        {coinData.map(({ key, name, image, ticker, price, balance }) =>
          <Coin key={key}
            name={name}
            image={image}
            ticker={ticker}
            price={price}
            balance={balance}
            tickerId={key}
            transaction={transaction}
            inputValue={inputValue}
            setInputValue={setInputValue}
            handleBuy={handleBuy}
            handleSell={handleSell}
          />
        )}

      </div>
  )
}

export default CoinList;
