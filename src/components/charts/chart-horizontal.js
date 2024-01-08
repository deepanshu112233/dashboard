import React, { useState, useEffect, useRef } from 'react';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js/auto';
const HorizontalChart = ({limit}) => {
  const chartContainer = useRef(null);

  let myChart = null; // Store the chart instance reference

  const options = {
    indexAxis: 'x',
    elements: {},
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top',
        
      },
      title: {
        display: true,
        text: 'Bar Chart',
        font: {
            size: 20
        }
      },
    },
  };

  const [data, setData] = useState(
    {
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'],
    datasets: [
      {
        label: 'Discount Percentage',
        data: [2, 4, 8, 6, 15, 6],
        backgroundColor: '#D8D9FB',
      },
      {
        label: 'Stock',
        data: [1, 3, 8, 9, 12, 13],
        backgroundColor: '#6366F1',
      },
      
    ],
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://dummyjson.com/products?limit=${limit}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const fetchedData = await response.json();
        const dataset1 = fetchedData.products.map(product => product.discountPercentage);
        const dataset2 = fetchedData.products.map(product => product.stock);
        const xlabel= fetchedData.products.map(product => product.title);
        
        console.log("data",fetchedData)
        setData({
          labels: xlabel,
          datasets: [
            {
              label: 'Discount Percentage',
              data: dataset1,
              backgroundColor: '#D8D9FB',
            },
            {
              label: 'Stock',
              data: dataset2,
              backgroundColor: '#6366F1',
            },
          ],
        });


      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (chartContainer.current && data.datasets.length > 0) {
      Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

      if (myChart !== null) {
        myChart.destroy();
      }

      myChart = new Chart(chartContainer.current, {
        type: 'bar',
        data,
        options,
      });
    }
    

    return () => {
      if (myChart !== null) {
        myChart.destroy();
      }
      
    };
  }, [data]);

  return (
    <div style={{ position: 'relative', height: '80vh', width: '80vw' }}>
      <canvas className='my-4 bg-white homecard' ref={chartContainer} />
     </div>
  );
};

export default HorizontalChart;
