import React from "react";

import { MdKeyboardArrowRight } from "react-icons/md";

function Banner({ title, description, style, color, body }) {
  return (
    <section style={style} id="hero">
      <div className="container hero">
        <h1 style={color} className="hero__title">
          {title}
        </h1>
        <h4 style={color} className="hero__caption">
          {description}
        </h4>
        <p className="hero__body">{body}</p>
        <a href="#hero" className="hero__link">
          Learn more
          <MdKeyboardArrowRight />
        </a>
      </div>
    </section>
  );
}

export default Banner;
