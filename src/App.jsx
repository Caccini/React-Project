import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar.jsx";
import RightSidebar from "./components/RightSidebar.jsx";
import Dashboard from "./components/Dashboard.jsx";
import Wallet from "./components/Wallet.jsx";
import "./css/Sidebar.css";
import "./css/RightSidebar.css";
import "./css/App.css";
import "./css/Dashboard.css";

const App = () => {
  return (
    <Router>
      <div className="app">
        <Sidebar />
        <div className="main-content">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/wallet" element={<Wallet />} />
            {/* Add other routes here */}
          </Routes>
        </div>
        <RightSidebar />
      </div>
    </Router>
  );
};

export default App;
