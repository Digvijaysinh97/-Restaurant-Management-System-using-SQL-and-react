import React from "react";
import "./Header.scss";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/">
          <h1>Food Maintanence System</h1>
        </Link>
      </div>
      <div className="header_items">
        <div className="header_item">
          <Link to="/">
            <p>Home</p>
          </Link>
        </div>
        <div className="header_item">
          <Link to="/Employee">  
            <p>Employee</p>
          </Link>
        </div>
        <div className="header_item">
          <Link to="/res">
            <p>Restaurants</p>
          </Link>
        </div>
        <div className="header_item">
          <Link to="/customer">
            <p>Customer</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
