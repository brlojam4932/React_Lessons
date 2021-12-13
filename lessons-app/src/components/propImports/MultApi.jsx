import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MultApi() {

  const [coins, setCoins] = useState([]);
  const [descriptions, setDescriptions] = useState([]);
  const [loading, setLoading] = useState(false);

  const coinsMarketsApi = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10page=1&sparkline=false';

  const coinsIdApi = 'https://api.coingecko.com/api/v3/coins/bitcoin';


  useEffect(() => {
    setLoading(true);
    axios.get(coinsMarketsApi)
      .then(res => {
        setCoins(res.data);
        //console.log(res.data);
        setLoading(false);
      }).catch(error => console.log(error));
   

  }, []);

  console.log(coins);

  useEffect(() => {
    setLoading(true);
    axios.get(coinsIdApi)
      .then(res => {
        setDescriptions(res.data);
        console.log(res.data);
          setLoading(false);
      }).catch(error => console.log(error));
    
  }, []);

  return (
    <>
      <div className='coins'>
        {coins.map((coin) => {
          return (
            <li key={coin.id}>
              <img src={coin.image} alt='coin-art' />
              <h4>{coin.id}</h4>
              <p>{coin.symbol}</p>
            </li>

          )
        })}
      </div>
      <div>
      
      
      <p>{descriptions.symbol}</p>
      </div> 

     

      {/*

       <div>
        {descriptions.map((des) => {
          return (
            <li key={des.id}>
              <p>{des.description.en}</p>
            </li>
          )
        })}
      </div> 
      
      
      */}

    </>

  )
}

export default MultApi;
