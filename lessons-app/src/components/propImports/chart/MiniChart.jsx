import React, { useEffect, useRef } from 'react'
import Chartjs from 'chart.js';
import { historyOptions } from './ChartConfigs';

const MiniChart = ({data}) => {
    const chartRef = useRef();
    const day = data;

    useEffect(() => {
        if (chartRef && chartRef.current) {
new Chartjs(chartRef.current, {
                type: 'line',
                data: {
                    datasets: [{
                        label: '# of Votes',
                        data: day,
                        borderWidth: 2,
                        borderColor: 'rgba(128, 117, 64, 0.8)',
                        pointRadius: 0,
                        hover: false,
                    }],
                },
                options: historyOptions,                
            });
        }
    }, [day]);

    return (
        <div>
            <canvas ref={chartRef} id='myChart' width={125} height={30}></canvas>
        </div>
    )
}

export default MiniChart