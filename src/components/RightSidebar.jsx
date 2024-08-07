// src/components/RightSidebar.js
import React from "react";
import "../css/RightSidebar.css";

const RightSidebar = () => {
  return (
    <div className="right-sidebar">
      <div className="profile">
        <img className="alert-img" src="images/alert-icon.png" alt="Settings" />
        <div className="profile-info">
          <div className="name-section">
            <div className="name">James Thompson</div>
            <div>@jmtson</div>
          </div>
          <img src="/images/profile-icon.png" alt="Profile" />
        </div>
      </div>
      <div className="balance-section">
        <div className="balance-title">Total balance</div>
        <div className="balance-amount">$267,820.00</div>
        <div className="balance-change">+8.29%</div>
      </div>
      <div className="items">
        <div className="items-title">My items</div>
        <div className="items-container">
          <div className="item">
            <div className="item-content">
              <div className="icon pink"></div>
              <div className="item-text">
                <div className="item-title">Investment</div>
                <div className="item-value">87.2K</div>
                <div className="change-value">-10.4%</div>
              </div>
            </div>
          </div>
          <div className="item">
            <div className="item-content">
              <div className="icon green"></div>
              <div className="item-text">
                <div className="item-title">Cash Back</div>
                <div className="item-value">19.5K</div>
                <div className="change-value-2">+12.4%</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="convert">
        <div className="convert-title">Convert</div>
        <div className="convert-item">
          <input type="text" value="$1000" readOnly />
          <select>
            <option value="USD">USD</option>
            <option value="EUR">EUR</option>
          </select>
        </div>
        <div className="convert-item">
          <input type="text" value="0.305157" readOnly />
          <select>
            <option className="option-1" value="ETH">
              ETH
            </option>
            <option className="option-2" value="BTC">
              BTC
            </option>
          </select>
        </div>
        <div className="convert-action">
          <button className="convert-button">Convert</button>
          <div className="convert-info">1 USD = 0.0003 ETH (~$1)</div>
        </div>
      </div>
      <div className="upgrade">
        <div>
          <div className="title-upgrade">
            Upgrade <br />
            your plan
          </div>
          <div className="upgrade-items">Ver. 1.0.4, 13 Apr</div>
          <div className="upgrade-items">New features</div>
          <div className="upgrade-button">Let's Go</div>
        </div>
        <img className="building-img" src="/images/building.png" alt="image" />
      </div>
    </div>
  );
};

export default RightSidebar;
