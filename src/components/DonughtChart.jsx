// DoughnutChart.tsx
import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';

// Register required elements
ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart= () => {
  // Chart data
  const data = {
    labels: [ 'Blue', 'Yellow', 'Green'],
    datasets: [
      {
        label: 'Votes',
        data: [12, 19, 3,],
        backgroundColor: [
          'blue','yellow','green'
         
        ],
        borderColor: [
        
       
        ],
        borderWidth: 0.5,
        borderDash:[
            '1'
        ]
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        enabled: true,
      },
    },
  };

  return <div style={{width:"100%",height:"100%"}}>
    <Doughnut style={{width:"100%", padding:"10px", height:"100%"}} data={data} options={options} />
  </div>;
};

export default DoughnutChart;
