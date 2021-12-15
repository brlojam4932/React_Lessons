import axios from 'axios';
import React, { useState, useEffect } from 'react';

function MultApi() {

  const [playerName, setPlayerName] = useState([]);
  const [playerPic, setPlayerPic] = useState([]);


  const fetchData = () => {
    const playerAPI = "https://www.balldontlie.io/api/v1/players/237"
    const cryptoPic = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=3page=1&sparkline=false'

    const getNBAPlayer = axios.get(playerAPI);
    const getCryptoPic = axios.get(cryptoPic);
    axios.all([getNBAPlayer, getCryptoPic]).then(
      axios.spread((...allData) => {
        const allDataPlayer = allData[0];
        const allDataPics = allData[1];

        setPlayerName(allDataPlayer);
        setPlayerPic(allDataPics);
        //console.log(allDataPlayer);
        //console.log(allDataPics);
      })
    );
  };
  
    useEffect(() => {
      fetchData()
    }, []);



  return (
    <div className='coins'>
       <h1>Multi API 2</h1>
      <a href='https://youtu.be/Mt3kxUvHORA'>Link To Video</a>
      <h1>{playerName?.data?.first_name}</h1>
      <h1>{playerPic?.data?.[1].id}</h1>
      <img src={playerPic?.data?.[1].image}  alt="logo-art"/>
    </div>
  )
}

export default MultApi;
