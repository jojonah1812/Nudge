import React from "react";
import "./style.css";
//import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const Footer = () => {
  return (
    
   <div className="footer">
          
            <h5 className="title">NUDGE</h5>
            <p>
              Nudge your way to your new career!
            </p>
              <h5 className="title">About Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Mission Statement</a>
              </li>
            </ul> 
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Email</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Corporate Offices</a>
              </li>
            </ul>
          <div className="footer-copyright text-center py-3">
              &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Nudge.com"> Nudge.com </a>
          </div>
    </div>
  );
}

export default Footer;