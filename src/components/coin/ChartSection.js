import React, { Component } from 'react'
import Chart from "react-apexcharts";
const mystyle={color:'white'}
const mystyle2={fontFamily:'sans-serif'}

const buttonStyle = {
    marginLeft: '1%',
    padding: '1%',
    borderRadius: '8px',
    color: 'white',
    fontWeight: 'bolder',
    backgroundColor: '#664ce9',
    borderColor: 'white',
    transition: 'background-color 0.3s ease,color 0.3s ease', // Add transition for background color
  };
  
export class ChartSection extends Component {

    constructor(props) {
        super(props);

        this.state = {
            Price: {
                options: {
                    chart: {
                        id: 'area-datetime',
                    },
                    grid: {
                        show: true
                    }, title: {
                        text: "Market Price (USD)",
                        align:'ceter',
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#664ce9"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#664ce9"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, selection: 365,
                },
                series: [
                    {
                        name: 'Market Price',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,Market_Cap: {
                options: {
                    grid: {
                        show: true
                    }, title: {
                        text: "Market Cap (USD)",
                        align:'ceter',
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: '#ff69f5'
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }, xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#ff69f5"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }
                },
                series: [
                    {
                        name: 'Market Cap (USD)',
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            ,
            Tot_Vol: {
                options: {
                    grid: {
                        show: true
                    }, title: {
                        align:'ceter',
                        text: "Market Volume",
                        style: {
                            fontSize: '14px', fontWeight: 'bold', color: "#eb3734"
                        }
                    }, stroke: {
                        curve: 'smooth'
                    }
                    , xaxis: {
                        type: "datetime"
                    }, dataLabels: {
                        enabled: false
                    }, yaxis: {
                        show: false
                    }, colors: ["#eb3734"],
                    tooltip: {
                        y: {
                            formatter: (value) => { return value.toFixed(2) }
                        }, theme: "dark"
                    }, 
                },
                series: [
                    {
                        name: "Market Volume",
                        data: [[1645837250522, 39804.53519937617]]

                    }
                ]
            }
            
        };
        this.prevSelection = this.state.Price.options.selection
    }
    prevId = this.props.Id

    fetchData = async () => {
        let chartData = await fetch('https://api.coingecko.com/api/v3/coins/' + this.props.Id + '/market_chart?vs_currency=usd&days=' + this.state.Price.options.selection);
        let jsonChartData = await chartData.json()
        this.setState({ Price: { options: this.state.Price.options, series: [{ name: 'Market Price', data: jsonChartData.prices }] } })
        this.setState({ Market_Cap: { options: this.state.Market_Cap.options, series: [{ name: 'Market Price', data: jsonChartData.market_caps }] } })
        this.setState({ Tot_Vol: { options: this.state.Tot_Vol.options, series: [{ name: 'Market Price', data: jsonChartData.total_volumes }] } })

    }


    componentDidMount() {
        this.fetchData()
        // this.interval = setInterval(() => this.fetchData(), 2000);
    }
    //for
    // componentWillUnmount() {
    //     clearInterval(this.interval);
    //   }
    componentDidUpdate() {
        if (this.prevId !== this.props.Id) {
            this.prevId = this.props.Id
            this.fetchData()
        }
        if (this.prevSelection !== this.state.Price.options.selection) {
            this.prevSelection =this.state.Price.options.selection
            this.fetchData()
        }
    }

    


    render() {
        return (
            <div className="container" style={{marginLeft:'4%'}}>
                <div className="row ">
                    <div className="col bg-light" style={{ }}>
                {/*
                    <div className="card-body ">
                        <h6 className="card-title" style={{mystyle2}}> Market Cap </h6>
                        <p className="card-text fw-bold "
                            style={{mystyle}}>
                            $ {this.props.MarketCap}
                        </p>
                    </div>
                */}
                <div className='my-2 mx-0 row'>
                        <div className="col-md-10 m-1 card mb-1 my-3 p-3 dashboardcard">
                        {/* Content for the first column */}
                            <div className="card-body ">
                                <h6 className="card-title" style={{mystyle2}}> Market Cap </h6>
                                <p className="card-text fw-bold "
                                    style={{mystyle}}>
                                    $ {this.props.MarketCap}
                                </p>
                            </div>
                        </div>
                        <div className="col-md-10 m-1 card mb-1 my-3 p-3 dashboardcard">
                        {/* Content for the first column */}
                        <div className="card-body ">
                            <h6 className="card-title" style={{mystyle2}}> Price Change 24hrs </h6>
                            <p className="card-text fw-bold "
                                style={{mystyle}}>
                                $ {this.props.priceChange24}
                            </p>
                        </div>
                        </div>
                        <div className="col-md-10 m-1 card mb-1 my-3 p-3 dashboardcard">
                        {/* Content for the first column */}
                        <div className="card-body ">
                        <h6 className="card-title" style={{mystyle2}}> Circulating Supply</h6>
                        <p className="card-text fw-bold "
                            style={{mystyle}}>
                            {this.props.Circulating}
                        </p>
                    </div>
                        </div>
                        <div className="col-md-10 m-1 card mb-1 my-3 p-3 dashboardcard">
                        {/* Content for the first column */}
                        <div className="card-body ">
                        <h6 className="card-title" style={{mystyle2}}> Total Volume </h6>
                        <p className="card-text fw-bold "
                            style={{mystyle}}>
                            $ {this.props.TotVol}
                        </p>
                    </div>
                        </div>
                </div>

                    

                    

                    
                    </div>
                

                <div className="col-md-6">
                <div className="row"> 
                    
                    <div className="col-md-12 bg-light">
                        <Chart
                            options={this.state.Market_Cap.options}
                            series={this.state.Market_Cap.series}
                            type="line"
                            height='300'
                            width='80%' />
                    </div>
                    
                    <div className="col-md-12 bg-light">
                        <Chart
                            options={this.state.Tot_Vol.options}
                            series={this.state.Tot_Vol.series}
                            type="line"
                            height='300'
                            width='80%' />

                    </div>

                </div>
                </div>
            </div> 
            
            <div className='row '>
                <div className='col-md-12 bg-light'>
                    <div className="col" style={{ maxWidth: '100%' }}>
                    <div id="chart">
                        <div className="toolbar">
                            <button id="one_month" style={
                                buttonStyle}
                                onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 1},series: this.state.Price.series }})}>
                                1D
                            </button>
                            &nbsp;
                            <button id="six_months" style={
                                buttonStyle}
                                onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 7},series: this.state.Price.series }})}>
                                1W
                            </button>
                            &nbsp;
                            <button id="one_year" style={
                                buttonStyle}
                                onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 30},series: this.state.Price.series }})}>
                                1M
                            </button>
                            &nbsp;
                            <button id="ytd" style={
                                buttonStyle}
                                onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 182},series: this.state.Price.series }})}>
                                6M
                            </button>
                            &nbsp;
                            <button id="all" style={
                                buttonStyle}
                                onClick={() => this.setState({ Price: { options:{...this.tooltip,selection: 365},series: this.state.Price.series }})}>
                                1Y
                            </button>
                        </div>
                        <Chart
                            options={this.state.Price.options}
                            series={this.state.Price.series}
                            type="area"
                            height='500'
                            width='90%' />
                    </div>
                </div>
                </div>
            </div>

        
            
        </div>

           
        )
    }
}

export default ChartSection
/*
// par ek hi bar run hota hai, initial render
      componentDidMount(){
        this.fetchData()
      }
      
      //chart ko update krne ke liye
      componentDidUpdate(){
        if(this.previousId!==this.props.Id){
            this.previousId=this.props.Id
            this.fetchData()
        }
        //id change hui mtlb coin alag select kiya tabhi call karoge call
      }
*/