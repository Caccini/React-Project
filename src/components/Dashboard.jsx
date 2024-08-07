import React from "react";
import Chart from "./Chart";
import Notifications from "./Notifications";
import "../css/Dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      <div className="dashboard">
        <div className="header">
          <div className="balance-section">
            <div style={{ display: "flex", alignItems: "center" }}>
              <div className="balance-amount">$46,541.04</div>
              <div className="balance-change">-1,480.57 (-3.08%)</div>
            </div>
            <div className="summary-section">
              <span className="summary-link active">Summary</span>
              <span className="summary-link">Chart</span>
              <span className="summary-link">Conversations</span>
              <span className="summary-link">Historical Data</span>
            </div>
          </div>
          <div className="timeframe-buttons-container">
            <div className="balance-title">Bitcoin USD (BTC-USD)</div>
            <div className="timeframe-buttons">
              <button>1H</button>
              <button className="active">24H</button>
              <button>1W</button>
              <button>1M</button>
              <button>3M</button>
              <button>6M</button>
            </div>
          </div>
        </div>
        <Chart />
        <div className="widgets">
          <div className="boxes">
            <div className="box green">
              <div className="box-title">BNB-USD</div>
              <div className="box-value">$47,061.18</div>
              <div className="box-change green-text">+1,153.08%</div>
            </div>
            <div className="box red">
              <div className="box-title">BTC-USD</div>
              <div className="box-value">$46,541.04</div>
              <div className="box-change red-text">-1,480.57 (-3.08%)</div>
            </div>
            <div className="box green">
              <div className="box-title">SOL-USD</div>
              <div className="box-value">$97.02</div>
              <div className="box-change green-text">+7.14%</div>
            </div>
            <div className="box green">
              <div className="box-title">ETH-USD</div>
              <div className="box-value">$3,051.57</div>
              <div className="box-change green-text">+3.81%</div>
            </div>
          </div>
          <Notifications className="notifications" />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
