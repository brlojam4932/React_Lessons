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
  //const [insufficientUsdBalMessage, setInsufficientUsdBalMessage] = useState(false);
  //const [insufficientTokenBalMessage, setInsufficientTokenBalMessage] = useState=(false);

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
    //console.log("Response: ", response);
    const newPrice = response?.data?.[0]?.current_price;
    //console.log("New Price: ", newPrice);
    const newCoinData = coinData.map((values) => { // copy coinData values into newCoinData, newValues
      let newValues = { ...values };
      if (valueChangeId === values.key) {
        let amountOfCoin = parseFloat(amountValue);
        let newAccountBalance = accountBalance - (newPrice * amountOfCoin);
        if (newAccountBalance > 0 && amountValue > 0) {
          setAccountBalance(newAccountBalance);
          newValues.balance += amountOfCoin; // if account bal conditions are met, newValues.balance = newValues.balance + amountOfCoin
          //setInsufficientUsdBalMessage(false);
          setIsBuy(true);
        }
        else {
          //setInsufficientUsdBalMessage(true);
          setIsBuy(false);
        }
      };
      return newValues;
    });
    setCoinData(newCoinData);
  }

  const handleSell = async (valueChangeId, amountValue) => {
    const response = await axios.get(`https://api.coingecko.com/api/v3/coins/markets/?vs_currency=usd&ids=${valueChangeId}`);
    const newPrice = response?.data?.[0].current_price; // get current price from api
    const newCoinData = coinData.map((values) => { // newCoinData will equal coinData copied as new values into an Object
      //copy values into newValues using spread operator
      let newValues = { ...values }; // we have our Object: newValues = {id: name, price: current_price}
      // if clicked "id" - matches the values.key, then let amountOfCoin equal; amountValue (amount of coins to sell), parseFloat...converterd from JSON string to integers
      if (valueChangeId === values.key) {
        let amountOfCoin = parseFloat(amountValue); //ex. {id: bitcoin, price: 44000}
        // update newAccountBalance: we are selling so we mult the newPrice * the amount of coins and add that to our newAccountBalance. Then return newValues
        let newAccountBalance = accountBalance + (newPrice * amountOfCoin);
        // but also add a condition: newAccountBalance > 0 and amount to buy cannot be 0; must be also > 0.
        if (newAccountBalance > 0 && amountOfCoin > 0) {
          // update the state: setNewAccountBalance -> to newAccountBalance
          setAccountBalance(newAccountBalance);
          // set the newValues.balance equal newValues.balance - the amount Of Coin sold.
          newValues.balance -= amountOfCoin; // if these conditions met, make the sell: setIsBuy = true and amount of coins will be deducted while value will be added to newAccountBalance
          // also set insufficient amount of usd to true false
          //setInsufficientUsdBalMessage(false);
          setIsBuy(true);
        } else {
          // if not true: set to false and setInsuffientUsd to true
          //setInsufficientUsdBalMessage(true);
          setIsBuy(false);
        }
      };
      return newValues; // newValues returned
    }); // finally, setCoinData to newCoinData. (newCoinData is the current price from the api)
    setCoinData(newCoinData);
  }


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
        showBalance={showBalance}
        inputValue={inputValue}
        setInputValue={setInputValue}
        set
        isBuy={isBuy}
        isSold={isSold}
        setIsBuy={setIsBuy}
        setIsSold={setIsSold}
        handleBuy={handleBuy}
        handleSell={handleSell}
      />
      <div>
      </div>
    </>

  )
}

export default MultApi;
