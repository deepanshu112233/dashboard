import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
                <nav className="navbar navbar-expand-lg" style={{backgroundColor:"white",marginLeft:'7%',marginTop:'1%',borderRadius:'8px'}}>
                    <div className="container-fluid bg-white p-1">

                        <a className="navbar-brand d-flex ml-auto display-2 fs-2 fw-bold text-uppercase "
                            style={{ fontWeight:"lighter",color:'#664ce9'}} href="/">Crypto 
                            Dashboard{} </a>
                        <select className="form-select form-select-lg shadow-none " aria-label=".form-select-lg example" name='selectCoin'
                            style={{ width: "fit-content" }} onChange={this.props.handle_submit}>
                            <option value="bitcoin">Select Coin</option>
                            <option value="avalanche-2">Avalanche (AVAX)</option>
                            <option value="binancecoin">Binance (BNB)</option>
                            <option value="bitcoin">Bitcoin (BTC) </option>
                            <option value="cardano">Cardano (ADA)</option>
                            <option value="decentraland">Decentraland (MANA)</option>
                            <option value="dogecoin">Dogecoin (DOGE)</option>
                            <option value="ethereum">Ethereum (ETH)</option>
                            <option value="ripple">Ripple (XRP)</option>
                            <option value="solana">Solana (SOL)</option>
                            <option value="tether">Tether (USDT)</option>
                        </select>


                    </div>
                </nav>
        )
    }
}

export default Header