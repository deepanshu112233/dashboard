import React, { useState, useEffect } from 'react';

const CoinListTable = () => {
    const initialRow = [{ id: 0, symbol: 0, name: 0 }];
    const [coinData, setCoinData] = useState(initialRow);
    const apiUrl = 'https://api.coingecko.com/api/v3/coins/list?include_platform=true';
  
    useEffect(() => {
      const fetchData = async () => {
        try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setCoinData(data.slice(0, 30)); // Limiting data to the first 30 items
        } catch (error) {
          console.error('Error fetching coin list: ', error);
        }
      };
  
      fetchData();
    }, [apiUrl]);
  
    return (
      <div className="container">
        <h1 style={{color:'#664ce9', fontSize:'2rem', fontWeight:'bolder'}}>Coins List</h1>
        <div className='table-responsive scrollable-container' style={{ maxHeight: '380px', overflowY: 'auto' }}>

        <table className="table table table-dark table-hover ">
          <thead>
            <tr>
              <th scope="col">ID</th>
              <th scope="col">Symbol</th>
              <th scope="col">Name</th>
            </tr>
          </thead>
          <tbody>
            {coinData.map((coin, index) => (
              <tr key={index}>
                <td>{coin.id}</td>
                <td>{coin.symbol}</td>
                <td>{coin.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      </div>
    );
  };
  
  export default CoinListTable;