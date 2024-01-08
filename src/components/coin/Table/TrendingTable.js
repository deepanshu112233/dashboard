import React, { useState, useEffect } from 'react';

const TrendingTable = () => {
    const [trendingData, setTrendingData] = useState([]);
  const apiUrl = 'https://api.coingecko.com/api/v3/search/trending';

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        setTrendingData(data.coins ? data.coins.slice(0, 30) : []);
      } catch (error) {
        console.error('Error fetching trending coins: ', error);
      }
    };

    fetchData();
  }, [apiUrl]);


  return (
    <div className='container'>
        

      <h1 style={{color:'#664ce9', fontSize:'2rem', fontWeight:'bolder'}} >Trending Coins</h1>
      <div className='table-responsive scrollable-container' style={{ maxHeight: '380px', overflowY: 'auto' }}>
      <table id='content1' className="table table-dark table-hover">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Coin Name</th>
            <th scope="col">Market Cap Rank</th>
          </tr>
        </thead>
        <tbody>
          {trendingData.map((coin, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{coin.item.name}</td>
              <td>{coin.item.market_cap_rank}</td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      </div>
  )
}

export default TrendingTable
