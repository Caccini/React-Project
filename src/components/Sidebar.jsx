import React from "react";
import { NavLink } from "react-router-dom";
import "../css/Sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo-container">
        <span className="logo-text">TradeMask</span>
      </div>
      <nav>
        <ul>
          <li>
            <NavLink to="/profile" activeClassName="active">
              <img src="/images/profile-icon.png" alt="Profile" />
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/dashboard" activeClassName="active">
              <img src="/images/dashboard-icon.png" alt="Dashboard" />
              Dashboard
              <span className="arrow">→</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/wallet" activeClassName="active">
              <img src="/images/wallet-icon.png" alt="Wallet" />
              Wallet
            </NavLink>
          </li>
          <li>
            <NavLink to="/trade" activeClassName="active">
              <img src="/images/trade-icon.png" alt="Trade" />
              Trade
            </NavLink>
          </li>
          <li>
            <NavLink to="/notifications" activeClassName="active">
              <img src="/images/notifications-icon.png" alt="Notifications" />
              Notifications<span className="notification-count">4</span>
            </NavLink>
          </li>
          <li>
            <NavLink to="/exchange" activeClassName="active">
              <img src="/images/exchange-icon.png" alt="Exchange" />
              Exchange
            </NavLink>
          </li>
          <li className="explore-strategy">
            <img
              src="/images/glare.png"
              alt="Explore Strategy"
              className="strategy-icon"
            />
            <div className="strategy-text">
              <span>Explore a new strategy</span>
              <button>Try Now</button>
            </div>
          </li>
          <li>
            <NavLink to="/information" activeClassName="active">
              <img src="/images/information-icon.png" alt="Information" />
              Information
            </NavLink>
          </li>
          <li>
            <NavLink to="/account-settings" activeClassName="active">
              <img
                src="/images/account-settings-icon.png"
                alt="Account Settings"
              />
              Account Settings
            </NavLink>
          </li>
          <li>
            <NavLink to="/logout" activeClassName="active">
              <img src="/images/logout-icon.png" alt="Log Out" />
              Log Out
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
