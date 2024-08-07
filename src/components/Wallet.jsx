import React from "react";
import "../css/Wallet.css";

const Wallet = () => {
  return (
    <div className="wallet">
      <h1>Wallet Page</h1>
      <div className="wallet-details">
        <div className="wallet-value">
          <span className="wallet-total">$14235.70</span>
          <span className="wallet-change">+1525.60 (12%)</span>
        </div>
        <div className="wallet-coins">
          <div className="wallet-coin">
            <span className="coin-name">Bitcoin</span>
            <span className="coin-amount">0.163956 BTC</span>
            <span className="coin-value">$38,638.36</span>
            <span className="coin-change">+14.29%</span>
          </div>
          <div className="wallet-coin">
            <span className="coin-name">Tether USD</span>
            <span className="coin-amount">2.38767 USDT</span>
            <span className="coin-value">$2,556.02</span>
            <span className="coin-change">+21.01%</span>
          </div>
          {/* Add more coins as needed */}
        </div>
      </div>
    </div>
  );
};

export default Wallet;
