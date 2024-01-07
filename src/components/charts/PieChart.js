import React, { useState, useEffect, useRef } from 'react';
import { Chart, PieController, Title, Tooltip, Legend } from 'chart.js/auto';

const PieChart = ({ limit }) => {
  const chartContainer = useRef(null);
  let myChart = null; // Store the chart instance reference

  const [smartphones, setSmartphones] = useState([]);
  const [laptops, setLaptops] = useState([]);
  const [groceries, setGroceries] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://dummyjson.com/products`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const fetchedData = await response.json();

        const smartphoneProducts = fetchedData.products.filter(product => product.category.toLowerCase() === 'smartphones');
        const laptopProducts = fetchedData.products.filter(product => product.category.toLowerCase() === 'laptops');
        const groceryProducts = fetchedData.products.filter(product => product.category.toLowerCase() === 'groceries');
        console.log("reee",smartphoneProducts)

        setSmartphones(smartphoneProducts);
        setLaptops(laptopProducts);
        setGroceries(groceryProducts)
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, [limit]);

  useEffect(() => {
    if (chartContainer.current) {
      Chart.register(PieController, Title, Tooltip, Legend);

      if (myChart !== null) {
        myChart.destroy();
      }

      myChart = new Chart(chartContainer.current, {
        type: 'pie',
        data: {
          labels: ['Smartphones', 'Laptops','Grocery'],
          datasets: [
            {
              label: 'Count',
              data: [smartphones.length, laptops.length, groceries.length],
              backgroundColor: ['orange', 'green','blue'], // Customize colors as needed
            },
          ],
        },
        options: {
          plugins: {
            title: {
              display: true,
              text: 'Products by Category',
            //   font: {
            //       size: 20
            //   }
            },
            // legend:{
            //     labels:{
            //         font:{
            //             size:16
            //         }
            //     }
            // },
          },
        },
      });
    }

    return () => {
      if (myChart !== null) {
        myChart.destroy();
      }
    };
  }, [smartphones, laptops]);

  return (
    <div style={{ height: '100%', width: '100%' }}>
      <canvas ref={chartContainer} />
    </div>
  );
};

export default PieChart;

/*
{ 
  <Line
          data={state}
          options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}
      /> }

*/