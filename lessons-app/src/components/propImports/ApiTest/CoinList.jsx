import React, {useState} from 'react';
import Coin from "./Coin";

function CoinList({ transaction, coinData, inputValue, setInputValue, handleBuy, handleSell }) {

  const [search, setSearch] = useState("");

  const filteredCoins = coinData.filter(coin => (
    coin.name.toLowerCase().includes(search.toLowerCase())
  ));
    

  const handleCoinsChange = (e) => {
    setSearch(e.target.value);
  }

  return (

   <>
    <form>
      <input
      type="text"
      placeholder='search'
      onChange={handleCoinsChange}
       />
    </form>


     <div className='coins'>
        {filteredCoins.map(({ key, name, image, ticker, price, balance }) =>
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
   </>
  
  )
}

export default CoinList;
