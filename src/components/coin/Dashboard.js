// import React from 'react'
// import NavigationBar from './navbar/NavigationBar'
// import Sidebar from './navbar/Sidebar'
// const Dashboard = () => {
//   return (
//     <div>
//       <NavigationBar/>
//       <div className='container' style={{marginLeft:'18%', marginTop:'6%'}}>Dashboard Page</div>
//     </div>
//   )
// }

// export default Dashboard

import React, { Component } from 'react'
import Sidebar from '../navbar/Sidebar'
import CardSection from './CardSection';
import Header from './Header';
import ChartSection from './ChartSection';
import Table from './Table/Table';

export default class Dashboard extends Component {
  constructor(){
    super();
    this.state={
      Id:"bitcoin",
      Data:{}
    }
  }

  fetchData = async () => {
    try {
      let data = await fetch('https://api.coingecko.com/api/v3/coins/' + this.state.Id);
      let jsonData = await data.json();
      this.setState({ Id: this.state.Id, Data: jsonData });
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };
  
  handleSubmit=async(event)=>{
    console.log(event.target.value)
    await this.setState({Id:event.target.value, Data:this.state.Data})
    this.fetchData()
    //so that naye id ke liye data fetch ho jaye
    //now handle submit call karo and header mei pass karo
  }




  // function called after rendering is done so that whatever change happens gets reflected in the state
  componentDidMount() {
    this.fetchData();
  }
  
  renderCardSection() {
    const { Data } = this.state;
    if (!Data || !Data.market_data) {
      return null; // or return a loading indicator
    }

    const {
      name,
      market_data: {
        current_price,
        market_cap_change_percentage_24h,
        ath,
        sentiment_votes_up_percentage,
        high_24h,
        low_24h,
      },
    } = Data;

    return (
    <>
      <CardSection
        coinName={name}
        currentPrice={current_price ? current_price["usd"] : ""}
        mCap24={market_cap_change_percentage_24h ? market_cap_change_percentage_24h : ""}
        ath={ath ? ath.usd : ""}
        atl={ath ? ath.usd : ""}
        sentiment={this.state.Data.sentiment_votes_up_percentage}
        high24={high_24h ? high_24h["usd"] : ""}
        low24={low_24h ? low_24h["usd"] : ""}
        />
  </>
    );
  }


  renderChartSection() {
    const { Data, Id } = this.state;
    if (!Data || !Data.market_data || !Data.community_data) {
      return null; // or return a loading indicator
    }
  
    const {
      market_data: {
        price_change_24h_in_currency,
        market_cap,
        total_volume,
        circulating_supply,
      },
      community_data: { twitter_followers },
    } = Data;
  
    return (
      <ChartSection
        Id={Id}
        priceChange24={price_change_24h_in_currency ? price_change_24h_in_currency.usd : ""}
        MarketCap={market_cap ? market_cap.usd : ""}
        TotVol={total_volume ? total_volume.usd : ""}
        Circulating={circulating_supply ? circulating_supply : ""}
      />
    );
  }
  
  
  
  render() {
    return (
      <>
        <Sidebar/>
      <div className='container'>
        <Header handle_submit={this.handleSubmit} />
        
        {this.renderCardSection()}   
        {this.renderChartSection()} 
        <Table/>  
        </div>
      </>
    )
  }
}
