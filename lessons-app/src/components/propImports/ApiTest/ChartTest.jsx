import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
//import { withTheme } from 'styled-components';
//import Chartjs from "chart.js";


/*
const data = {
  labels: ['1', '2', '3', '4', '5'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 99, 132],
      fill: true,
      backgroundColor: "#2e4355",
      borderColor: "rgba(255, 99, 132, 0.2)"
    
    },
  ],
};

const options = {
  scales: {
    yAxes: [
      {
        ticks: {
          beginAtZero: true,
        },
      },
    ],
  },
  
};
*/


function ChartTest() {
  const [chartData, setChartData] = useState({});
  //const [employeeSalary, setEmployeeSalar] = useState([]);
  //const [employeeAge, setEmployeeAge] = useState([]);

  const chart = () => {
    let empSal = [];
    let empAge = [];
    axios.get("http://dummy.restapiexample.com/api/v1/employees")
    .then(res => {
      //console.log(res);
      for (const dataObj of res.data.data) {
        empSal.push(parseInt(dataObj.employee_salary));
        empAge.push(parseInt(dataObj.employee_age));
      }
      setChartData({
        type: "line",
        labels: empAge,
        datasets: [
          {
            label: "Emplyee Age and Income",
            data: empSal,
            backgroundColor: [
              'rgba(171, 15, 15, 0.75)'
            ],
            borderColor: [
              'rgba(100, 100, 100, .3)'
            ],
            color: "w#666",
            borderWidth: 4,
            
          }
        ]
      });
    })
    .catch(err => {
      console.log(err);
    });
    console.log(empAge, empSal);
    
   
  };


 useEffect(() => {
   chart()
 }, []);


  return (
    <div className='ChartTest'> 
      <h2>Chart Test</h2>
      <a href='https://youtu.be/mlSKLmG80Us'>Link To Video</a>
      <div style={{height: "1000px", width: "1000px"}}>
       <Line data={chartData} options={{
         responsive: true,
         title: {text: "Thickness Scale", display: true},
         scales: {
           yAxes: [
             {
               ticks: {
                 autoSkip: true,
                 maxTicksLimit: 10,
                 beginAtZero: true
               },
               gridLines: {
                 display: false
               }
             }
           ]
         }
         }} />
      </div>
     
    </div>
  );
};

export default ChartTest;
