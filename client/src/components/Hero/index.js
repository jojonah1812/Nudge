import React from "react";
import "./style.css";
import Image from "react-bootstrap/Image";

function Hero() {
  return (
    <div className="heroBG">
      <Image className="hero" src="./herob.png" />;
    </div>
    // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
    //   {props.children}
    // </div>
  );
}

export default Hero;
