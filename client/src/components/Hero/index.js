import React from "react";
import "./style.css";
import Image from 'react-bootstrap/Image'

function Hero(props) {
    return (
      <Image src="./public/herob.png/100px250" fluid />

     // <div className="hero text-center" style={{ backgroundImage: `url(${props.backgroundImage})` }}>
     //   {props.children}
    //  </div>
    );
  }

export default Hero;