// import React, { useState, useEffect, useRef } from 'react';
// import { Chart } from 'chart.js/auto';


// const LineChart = ({limit}) => {
//   const chartContainer2 = useRef(null);
//   Chart.defaults.font.size = 16;
//   let myChart2 = null;

//   // const options = {
//   //   indexAxis: 'x',
//   //   elements: {},
//   //   responsive: true,
//   //   maintainAspectRatio: false,
//   //   plugins: {
//   //     legend: {
//   //       position: 'right',
//   //       labels: {
//   //           fontSize: 16, // Change this value to adjust the font size
//   //         },
//   //     },
//   //     title: {
//   //       display: true,
//   //       text: 'Line Chart',
        
//   //     },
//   //   },
//   // };

//   const [data, setData] = useState({
//     labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g','h'],
//     datasets: [
//       {
//         label: 'Prices',
//         data: ['549', '899', '1429', '667', '1024', '900', '400', '1211'], // Fetched price data will be stored here
//         backgroundColor: 'green',
        
//       },
//     ],
//   });

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const url =`https://dummyjson.com/products?limit=${limit}`;
//         const response = await fetch(url);

//         if (!response.ok) {
//           throw new Error('Network response was not ok.');
//         }

//         const fetchedData = await response.json();
//         const prices = fetchedData.products.map(product => product.price);
//         const xlabel = fetchedData.products.map(product => product.title);
        
//         setData({
//           labels: xlabel,
//           datasets: [
//             {
//               label: 'Prices',
//               data: prices,
//             },
//           ],
//         });

//         if (chartContainer2.current) {
//           if (myChart2 !== null) {
//             myChart2.destroy();
//           }

//           myChart2 = new Chart(chartContainer2.current, {
//             type: 'line',
//             data: {
//               labels: 
//               // xlabel,
//               ['Samsung9', 'iphoneX', 'sonyPro', 'iphone 9', 'galaxy book', 'hp victus', 'mac book','Huawei P30'], // Use product titles as x-axis labels for the prices chart
//               datasets: [
//                 {
//                   label: 'Prices',
//                   data: 
//                   // prices,
//                   ['549', '899', '1429', '667', '1024', '900', '400', '1211'],
//                 },
//               ],
//             },
//             options:{
//               fill: false,
//               borderColor: 'rgb(75, 192, 192)',
//               tension: 0.1,
//               pointHoverRadius: 10,
//               pointHoverBackgroundColor: 'rgb(75, 192, 192)',
//             }
//           });
//         }
//       } catch (error) {
//         console.error('Error fetching data:', error);
//       }
//     };

//     fetchData();
//   }, []);

//   useEffect(() => {

//     return () => {
//       if (myChart2 !== null) {
//         myChart2.destroy();
//       }
//     };
//   }, [data]);

//   return (
//     <div style={{ position: 'relative', height: '100%', width: '100%' }}>
//       <canvas ref={chartContainer2} />
//     </div>
//   );
// };

// export default LineChart;

// // import React, { useState, useEffect, useRef } from 'react';
// // import { Chart } from 'chart.js/auto';

// // const LineChart = ({ limit }) => {
// //   const chartContainer2 = useRef(null);
// //   const [myChart2, setMyChart2] = useState(null);
// //   Chart.defaults.font.size = 16;

// //   const options = {
// //     indexAxis: 'x',
// //     elements: {},
// //     responsive: true,
// //     maintainAspectRatio: false,
// //     plugins: {
// //       legend: {
// //         position: 'right',
// //         labels: {
// //           fontSize: 16,
// //         },
// //       },
// //       title: {
// //         display: true,
// //         text: 'Line Chart',
// //       },
// //     },
// //     fill: false,
// //     borderColor: 'rgb(75, 192, 192)',
// //     tension: 0.1,
// //     pointHoverRadius: 10,
// //     pointHoverBackgroundColor: 'rgb(75, 192, 192)',
// //   };

// //   const [data, setData] = useState({
// //     labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
// //     datasets: [
// //       {
// //         label: 'Prices',
// //         data: ['549', '899', '1429', '667', '1024', '900', '400', '1211'],
// //         backgroundColor: 'green',
// //       },
// //     ],
// //   });

// //   useEffect(() => {
// //     const fetchData = async () => {
// //       try {
// //         const url = `https://dummyjson.com/products?limit=${limit}`;
// //         const response = await fetch(url);

// //         if (!response.ok) {
// //           throw new Error('Network response was not ok.');
// //         }

// //         const fetchedData = await response.json();
// //         const prices = fetchedData.products.map((product) => product.price);
// //         const xlabel = fetchedData.products.map((product) => product.title);

// //         setData({
// //           labels: xlabel,
// //           datasets: [
// //             {
// //               label: 'Prices',
// //               data: prices,
// //             },
// //           ],
// //         });

// //         if (chartContainer2.current) {
// //           if (myChart2 !== null) {
// //             myChart2.destroy();
// //           }

// //           const newChart = new Chart(chartContainer2.current, {
// //             type: 'line',
// //             data: {
// //               labels: xlabel,
// //               datasets: [
// //                 {
// //                   label: 'Prices',
// //                   data: prices,
// //                 },
// //               ],
// //             },
// //             options: {
// //               ...options,
// //             },
// //           });

// //           setMyChart2(newChart);
// //         }
// //       } catch (error) {
// //         console.error('Error fetching data:', error);
// //       }
// //     };

// //     fetchData();
// //   }, [limit]);

// //   useEffect(() => {
// //     return () => {
// //       if (myChart2 !== null) {
// //         myChart2.destroy();
// //       }
// //     };
// //   }, [myChart2]);

// //   return (
// //     <div style={{ position: 'relative', height: '398px', width: '100%', maxHeight: '400px' }}>
// //       <canvas ref={chartContainer2} />
// //     </div>
// //   );
// // };

// // export default LineChart;

import React, { useState, useEffect, useRef } from 'react';
import { Chart } from 'chart.js/auto';

const LineChart = ({ limit }) => {
  const chartContainer2 = useRef(null);
  const [myChart2, setMyChart2] = useState(null);
  Chart.defaults.font.size = 16;
  /* eslint-disable no-unused-vars */

  const [data, setData] = useState({
    labels: ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h'],
    datasets: [
      {
        label: 'Prices',
        data: ['549', '899', '1429', '667', '1024', '900', '400', '1211'],
        backgroundColor: 'green',
      },
    ],
  });
/* eslint-enable no-unused-vars */

  useEffect(() => {
    const fetchData = async () => {
      try {
        const url = `https://dummyjson.com/products?limit=${limit}`;
        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Network response was not ok.');
        }

        const fetchedData = await response.json();
        const prices = fetchedData.products.map((product) => product.price);
        const xlabel = fetchedData.products.map((product) => product.title);

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

          const newChart = new Chart(chartContainer2.current, {
            type: 'line',
            data: {
              labels: xlabel,
              datasets: [
                {
                  label: 'Prices',
                  data: prices,
                },
              ],
            },
            options: {
              fill: false,
              borderColor: 'rgb(75, 192, 192)',
              tension: 0.1,
              pointHoverRadius: 10,
              pointHoverBackgroundColor: 'rgb(75, 192, 192)',
            },
            
          });

          setMyChart2(newChart);
        }
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [limit]);

  useEffect(() => {
    return () => {
      if (myChart2 !== null) {
        myChart2.destroy();
      }
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [myChart2]);

  return (
    <div style={{ position: 'relative', height: '100%', width: '100%', maxHeight: '400px' }}>
      <canvas ref={chartContainer2} />
    </div>
  );
};

export default LineChart;
