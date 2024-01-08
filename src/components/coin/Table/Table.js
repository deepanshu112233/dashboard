import React, { useState, useEffect } from 'react';
import CoinListTable from './CoinListTable';
import TrendingTable from './TrendingTable';

const Table = () => {

  return (
    <div className="container bg-light"  style={{marginLeft:'4%'}}>
      <div className="row" >

        <div className="col-md-6">
            <div className="p-3 mb-2 ">
              <TrendingTable/>
            </div>
        </div>

        <div className="col-md-6">
          <div className="p-3 mb-2 ">
              <CoinListTable/>
          </div>
        </div>

      </div>
      
      
    </div>
  );
};

export default Table;
