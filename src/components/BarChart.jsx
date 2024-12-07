// BarChart.js
import React from 'react';
import { Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend } from 'chart.js';
import { Bar } from 'react-chartjs-2';

// Register Chart.js components
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);

const BarChart = () => {
  // Chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May','Jun','July'], // X-axis labels
    datasets: [
      {
        
        data: [65, 59, 80, 81, 56,49,75], 
        backgroundColor: 'green', 
        borderColor: 'rgba(75, 192, 75, 1)', 
        borderWidth: 1, 
        barThickness: 10, 
        maxBarThickness: 10,
      },
    ],
  };

  // Chart options
  const options = {
    responsive: true,
    plugins: {
      legend:false,
      tooltip: {
        enabled: true,
      },
    },
    scales: {
      x: {
        beginAtZero: true, // Start x-axis at zero
      },
      y: {
        beginAtZero: true, // Start y-axis at zero
      },
    },
  };

  return  <div style={{ width: '100%' }}>
  <Bar style={{width:"100%"}} data={data} options={options} />
</div>
};

export default BarChart;
