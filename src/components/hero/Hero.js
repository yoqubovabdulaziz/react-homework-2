import React from "react";

import "./Hero.scss";
import Banner from "../banner/Banner";
import { BANNERS, BANNER_MINI } from "../../static";
import MiniBanner from "../mini-banner/MiniBanner";

function Hero() {
  let banner = BANNERS?.map(
    ({ id, title, description, body, image, color }) => (
      <Banner
        key={id}
        title={title}
        description={description}
        body={body}
        color={{ color: color }}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      />
    )
  );
  let miniBanner = BANNER_MINI?.map(
    ({ id, title, description, version, image, clr, bg, redColor }) => (
      <MiniBanner
        key={id}
        title={title}
        description={description}
        version={version}
        style={{
          backgroundImage: `url(${image})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
        color={clr}
        backgroundColor={bg}
        redColor={redColor}
      />
    )
  );
  return (
    <>
      {banner}
      <div className="mini__banner__row">{miniBanner}</div>
    </>
  );
}

export default Hero;
