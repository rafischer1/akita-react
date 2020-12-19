import React from "react";
import "./Header.css";

export const Header = () => {
    return (
        <div className="header">
            <div className="menu-item">
                <div className="menu-text">Menu</div>
            </div>
            <div><h2>🐕 Akita | React 🐕</h2></div>
            <div className="menu-item">
                <div className="menu-text">Home</div>
            </div>
        </div>
    );
};
