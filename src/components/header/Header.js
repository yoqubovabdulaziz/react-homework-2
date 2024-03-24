import React from "react";

import { NAV_ITEMS } from "../../static";

import { FaApple } from "react-icons/fa";

import "./Header.scss";

function Header() {
  const navItem = NAV_ITEMS.map((el, inx) => {
    return (
      <li key={inx}>
        <a href="#index">{el}</a>
      </li>
    );
  });
  return (
    <header>
      <nav className="container nav">
        <ul className="nav__list">
          <li>
            <a href="#index">
              <FaApple className="apple__icon" />
            </a>
          </li>
          {navItem}
        </ul>
      </nav>
    </header>
  );
}

export default Header;
