import React from "react";
import "./style.css";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    <div className="footer">
      <div className="titleAndInfo">
        <h5 className="title">NUDGE</h5>
        <p>Nudge your way to your new career!</p>

        <h5 className="title">About Us</h5>
        <ul>
          <li className="list">
            <a href="#!">Mission Statement</a>
          </li>
          <li className="list">
            <a href="#!">Corporate Offices</a>
          </li>
        </ul>

        <h5 className="title">Contact Us</h5>
        <ul>
          <li className="list">
            <a href="#!">Email</a>
          </li>
          <li className="list">
            <a href="#!">Twitter</a>
          </li>
        </ul>
      </div>

      <div className="footer-copyright text-center">
        &copy; {new Date().getFullYear()} Copyright:{" "}
        <a href="https://www.Nudge.com"> Nudge.com </a>
      </div>
    </div>
  );
}

export default Footer;