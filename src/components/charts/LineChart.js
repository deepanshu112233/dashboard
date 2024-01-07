import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';
import { Bar } from 'react-chartjs-2';


const LineChart = ({limit}) => {
  const chartContainer2 = useRef(null);
  Chart.defaults.font.size = 16;

  let myChart2 = null;

  const options = {
    indexAxis: 'x',
    elements: {},
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'right',
        labels: {
            fontSize: 16, // Change this value to adjust the font size
          },
      },
      title: {
        display: true,
        text: 'Line Chart',
        
      },
    },
  };

  const [data, setData] = useState({
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'],
    datasets: [
      {
        label: 'Prices',
        data: [], // Fetched price data will be stored here
        backgroundColor: 'green',
        
      },
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url =`https://dummyjson.com/products?limit=${limit}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const fetchedData = await response.json();
        const prices = fetchedData.products.map(product => product.price);
        const xlabel = fetchedData.products.map(product => product.title);
        
        setData({
          labels: xlabel,
          datasets: [
            {
              label: 'Prices',
              data: prices,
            },
          ],
        });

        if (chartContainer2.current) {
          if (myChart2 !== null) {
            myChart2.destroy();
          }

          myChart2 = new Chart(chartContainer2.current, {
            type: 'line',
            data: {
              labels: xlabel, // Use product titles as x-axis labels for the prices chart
              datasets: [
                {
                  label: 'Prices',
                  data: prices,
                },
              ],
            },
            options:{
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
              pointHoverRadius: 10,
              pointHoverBackgroundColor: 'rgb(75, 192, 192)',
            }
          });
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {

    return () => {
      if (myChart2 !== null) {
        myChart2.destroy();
      }
    };
  }, [data]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%' }}>
      <canvas ref={chartContainer2} />
    </div>
  );
};

export default LineChart;
