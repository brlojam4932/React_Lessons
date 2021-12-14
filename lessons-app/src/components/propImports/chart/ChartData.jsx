import React, { useEffect, useState } from 'react';
import MiniChart from './MiniChart';
import axios from 'axios';


const ChartData = (props) => {
    const [chartData, setChartData] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const formatData = data => {
        return data.map(el => {
            return {
                t: el[0],
                y: el[1]
            }
        })
    }
  

    useEffect(() => {
        const fetchData = async () => {

            const results = await axios.get(`https://api.coingecko.com/api/v3/coins/${props.id}/market_chart/`, {
                params: {
                    vs_currency: 'cad',
                    days: '1',
                },
            });
            setChartData(formatData(results.data.prices));
            setIsLoading(false)
        };

        fetchData();
    }, [props.id]);


    const renderData = () => {
        if (isLoading) {
            return <div>Loading...</div>
        }
        return (
            <div className= 'coinlist'>
                <MiniChart data={chartData}/>
            </div>
        )
 
    }

    return renderData();
   
};

export default ChartData;