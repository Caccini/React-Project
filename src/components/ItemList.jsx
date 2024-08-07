// src/components/ItemList.js
import React from "react";
import "../css/ItemList.css";

const items = [
  // Your items here
];

const ItemList = () => {
  return (
    <div className="item-list">
      {items.map((item) => (
        <div key={item.id} className="item">
          <h4>{item.name}</h4>
          <p>{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ItemList;
