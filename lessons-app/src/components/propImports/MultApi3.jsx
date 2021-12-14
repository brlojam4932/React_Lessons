import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccountBalance from './AccountBalance';
import CoinList from './CoinList';


//const formatPrice = price => parseFloat(Number(price).toFixed(4));

function MultApi() {

  const [accountBalance, setAccountBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);

  //const [loading, setLoading] = useState(false);

  const componentDidMount = async () => {
    const response = await axios.get('https://api.coingecko.com/api/v3/coins/markets', {
      params: {
        vs_currency: 'usd',
        ids: ''
      }
    });
    const coinData = response.data.slice(0, 10).map((coin) => {
      return {
        key: coin.id,
        image: coin.image,
        name: coin.name,
        ticker: coin.symbol,
        balance: 0,
        price: coin.current_price,
        marketCap: coin.market_cap
      }
    });
    setCoinData(coinData);
  }


  useEffect(() => {
    if (coinData.length === 0) {
      componentDidMount();
    }
  })



  const transaction = (isBuy, valueChangeId) => {
    // if buy, add 1 : if not subtract -1 // need amount and id
    // from accountBalance (usd account)
    // add coin to coinData balance (how many coins in one's account)
    let balanceChange = isBuy ? 1 : -1;
    const newCoinData = coinData.map((values) => {
      let newValues = { ...values };
      if (valueChangeId === values.key) {
        if (accountBalance > newValues.price) {
          newValues.balance += balanceChange;
          setAccountBalance(prevBalance => prevBalance - balanceChange * newValues.price);
        } else if (!isBuy) {
          newValues.balance += balanceChange;
          setAccountBalance(prevBalance => prevBalance + balanceChange * newValues.price);
        }
      }
      return newValues;
    });
    setCoinData(newCoinData)
  };

  const handleBrrr = () => {
    setAccountBalance(prevBalance => prevBalance + 1200);
  }

  const handleToggleChange = () => {
    setShowBalance(prevValue => !prevValue);
  }


  return (
    <>
      <h1>Mult API 3</h1>

      <AccountBalance
        amount={accountBalance}
        showBalance={showBalance}
        handleBrrr={handleBrrr}
        handleToggleChange={handleToggleChange}
      />

      <CoinList
        coinData={coinData}
        transaction={transaction}
        showBalance={showBalance}
        
      />

      <div>
      </div>
    </>

  )
}

export default MultApi;
