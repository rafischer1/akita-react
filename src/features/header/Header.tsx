import React, { useState } from "react";
import "./Header.css";

export const Header = () => {
  const [x, setX] = useState(0);
  console.log("menu clicked this many times:", x);
  return (
    <>
      <div className="header">
        <div className="menu-item">
          <div className="menu-text" onClick={() => setX(x + 1)}>
            Menu
          </div>
        </div>
        <div>
          <h2>🐕 Akita | React History *Ad*-Libs 🐕</h2>
        </div>
        <div className="menu-item">
          <div className="menu-text">Home</div>
        </div>
      </div>
    </>
  );
};
