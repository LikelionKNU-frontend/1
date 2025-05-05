import React from "react";
import "./Header.css";
import logo from "./images/logo.png";
import search from "./images/search.png";
import cart from "./images/cart.png";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img src={logo} alt="Apple Logo" />
      </div>
      <nav className="nav">
        <ul>
          <li>스토어</li>
          <li>Mac</li>
          <li>iPad</li>
          <li>iPhone</li>
          <li>Watch</li>
          <li>Vision</li>
          <li>AirPods</li>
          <li>TV 및 홈</li>
          <li>엔터테인먼트</li>
          <li>액세서리</li>
          <li>고객지원</li>
        </ul>
      </nav>
      <div className="searchicon">
        <img src={search} alt="search" />
      </div>
      <div className="carticon">
        <img src={cart} alt="cart" />
      </div>
    </header>
  );
}

export default Header;
