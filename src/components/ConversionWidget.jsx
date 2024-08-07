// src/components/ConversionWidget.js
import React from "react";
import "../css/ConversionWidget.css";

const ConversionWidget = () => {
  return (
    <div className="conversion-widget">
      <h3>Convert</h3>
      <input type="number" placeholder="Amount" />
      <button>Convert</button>
    </div>
  );
};

export default ConversionWidget;
