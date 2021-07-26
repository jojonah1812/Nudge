import React from "react";
import "./style.css";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer heroBG">
      <div className="titleAndInfo">
        <div className="titleL">
          <h3>NUDGE</h3>
          <p>Nudge your way to your new career!</p>
        </div>

        <div className="titleC">
          <h5>About Us</h5>
          <ul>
            <li className="list">
              <a href="#!">Mission Statement</a>
            </li>
            <li className="list">
              <a href="#!">Corporate Offices</a>
            </li>
          </ul>
        </div>
        <div className="titleR">
          <h5>Contact Us</h5>
          <ul>
            <li className="list">
              <a href="#!">Email</a>
            </li>
            <li className="list">
              <a href="#!">Twitter</a>
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-copyright text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a className="copyLink" href="https://www.Nudge.com">
          {" "}
          Nudge.com{" "}
        </a>
      </div>
    </div>
  );
};

export default Footer;
