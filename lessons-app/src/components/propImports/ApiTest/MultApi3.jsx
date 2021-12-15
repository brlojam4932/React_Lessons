import axios from 'axios';
import React, { useState, useEffect } from 'react';
import AccountBalance from './AccountBalance';
import CoinList from './CoinList';


//const formatPrice = price => parseFloat(Number(price).toFixed(4));

function MultApi() {

  const [accountBalance, setAccountBalance] = useState(10000);
  const [showBalance, setShowBalance] = useState(false);
  const [coinData, setCoinData] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isBuy, setIsBuy] = useState(false);
  const [isSold, setIsSold] = useState(false);

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
  });

// const ticketUrl = (`https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd&ids=${valueChangeId}`);
  const handleBuy = async (valueChangeId, amountValue) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd&ids=${valueChangeId}`);
    console.log("Response: ", response);
    const newPrice = response.current_price;
    console.log("New Price: ", newPrice);
    const newCoinData = coinData.map((values) => { // copy coinData values into newCoinData, newValues
      let newValues = {...values};

      if(valueChangeId === values.key) {
        let amountOfCoin = parseFloat(amountValue);
        let newAccountBalance = accountBalance - (newPrice * amountOfCoin);

        if(newAccountBalance > 0 && amountValue > 0) {
          setAccountBalance(newAccountBalance);
          newValues.balance += amountOfCoin; // if account bal conditions are met, newValues.balance = newValues.balance + amountOfCoin
        }
        else {
          setIsBuy(true);
        }
      };
      return newValues;
    });
    setCoinData(newCoinData);
  }


/*
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

 */

 

  const handleBrrr = () => {
    setAccountBalance(prevBalance => prevBalance + 1200);
  }

  const handleToggleChange = () => {
    setShowBalance(prevValue => !prevValue);
  }

// in coinlist: {transaction={transaction}}
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
      
        showBalance={showBalance}
        inputValue={inputValue}
        setInputValue={setInputValue}
        set
        isBuy={isBuy}
        isSold={isSold}
        setIsBuy={setIsBuy}
        setIsSold={setIsSold}
        handleBuy={handleBuy}
      />

      <div>
      </div>
    </>

  )
}

export default MultApi;
