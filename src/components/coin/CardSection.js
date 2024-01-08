import React, { Component } from 'react'
const mystyle3={}

export class CardSection extends Component {
    render() {
        return (
            <div className='' style={{marginLeft:'7%'}}>
            
 <div className="fs-1 fw-bold m-3 text-Capitalize"
    style={{ marginTop: '3px !important', marginBottom: '0px !important', color:'#12c971' }}>
    &nbsp;{this.props.coinName}
    
</div>

<div className="d-flex flex-wrap ">
    <div className="flex-grow-1 col-md-2 p-2">
            <div className="card text-center m-3 dashboardcard">
                <div className="card-body ">
                    <h6 className="card-title" >Market Cap 24Hrs</h6>
                    <p className="card-text fw-bold fs-5" style={mystyle3}>
                        {this.props.mCap24} %
                    </p>
                </div>
            </div>
      </div>
      <div className="flex-grow-1 col-md-2 p-2">
            <div className="card text-center m-3 dashboardcard">
                <div className="card-body">
                    <h6 className="card-title" >All time high value</h6>
                    <p className="card-text fw-bold fs-5" style={mystyle3}>
                    ${this.props.ath} %
                    </p>
                </div>
            </div>
      </div>
      <div className="flex-grow-1 col-md-2 p-2">
            <div className="card text-center m-3 dashboardcard">
                <div className="card-body">
                    <h6 className="card-title" >All time high value</h6>
                    <p className="card-text fw-bold fs-5" style={mystyle3}>
                        {this.props.atl} %
                    </p>
                </div>
            </div>
      </div>
      <div className="flex-grow-1 col-md-2 p-2">
            <div className="card text-center m-3 dashboardcard">
                <div className="card-body">
                    <h6 className="card-title" >Positive Sentiments</h6>
                    <p className="card-text fw-bold fs-5" style={mystyle3}>
                        {this.props.sentiment} %
                    </p>
                </div>
            </div>
      </div>
      <div className="flex-grow-1 col-md-2 p-2">
            <div className="card text-center m-3 dashboardcard">
                <div className="card-body">
                    <h6 className="card-title" >High 24 Hours value</h6>
                    <p className="card-text fw-bold fs-5" style={mystyle3}>
                        {this.props.high24} %
                    </p>
                </div>
            </div>
      </div>
      <div className="flex-grow-1 col-md-2 p-2">
            <div className="card text-center m-3 dashboardcard">
                <div className="card-body">
                    <h6 className="card-title" >Low 24 Hours value</h6>
                    <p className="card-text fw-bold fs-5" style={mystyle3}>
                        {this.props.low24} %
                    </p>
                </div>
            </div>
      </div>
      
</div>

                <div>
                    <div className="text-center" style={{color:'#664ce9', fontSize:'2rem', fontWeight:'bolder'}}> Current Price</div>
                    <div style={{textAlign: 'center', color:'#12c971',fontSize:'4rem', fontWeight:'bolder'}}>
                        ${this.props.currentPrice}
                    </div>
                </div>


</div>
        )
    }
}

export default CardSection