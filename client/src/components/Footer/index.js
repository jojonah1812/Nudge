import React from "react";
import "./style.css";
import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";

const FooterPage = () => {
  return (
    <MDBFooter color="blue" className="font-small pt-4 mt-4">
      <MDBContainer fluid className="text-center text-md-left">
        <MDBRow>
          <MDBCol md="6">
            <h5 className="title">NUDGE</h5>
            <p>
              Here you can use rows and columns here to organize your footer
              content.
            </p>
          </MDBCol>
          <MDBCol md="6">
            <h5 className="title">About Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">Mission Statement</a>
              </li>
            </ul> 
            <h5 className="title">Contact Us</h5>
            <ul>
              <li className="list-unstyled">
                <a href="#!">email</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Twitter</a>
              </li>
              <li className="list-unstyled">
                <a href="#!">Corporate Offices</a>
              </li>
            </ul>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
      <div className="footer-copyright text-center py-3">
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.Nudge.com"> Nudge.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}

export default FooterPage;