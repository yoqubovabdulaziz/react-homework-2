import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";
import { FaApple } from "react-icons/fa";

function MiniBanner({ title, description, version, style, color, redColor }) {
  return (
    <div style={style} className="mini__banner">
      <h2 style={{ color: color }} className="mini__banner__title">
        <FaApple />
        {title}
      </h2>
      <span style={{ color: redColor }} className="mini__banner__version">
        {version}
      </span>
      <p style={{ color: color }} className="mini__banner__description">
        {description}
      </p>
      <a className="mini__banner__link" href="#index">
        Learn more
        <MdKeyboardArrowRight />
      </a>
    </div>
  );
}

export default MiniBanner;
