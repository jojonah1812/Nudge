import React from "react";
import "./style.css";
import { ListItem } from "react-boostrap/ListItem";
import { Row, Col } from "react-bootstrap/Col";
import { Row } from "react-bootstrap/Row";
// import ListGroup from 'react-bootstrap/ListGroup'
// want to list the job headers 

//import "./style.css";
function Jobs({ position }) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{position}</h3>
          {subtitle && <h5 className="font-italic">{position}</h5>}
        </Col>
        <Col size="md-4">
          <div className="btn-container">
            <a
              className="btn btn-light"
              target="_blank"
              rel="noopener noreferrer"
              href={link}
            >
              View
            </a>
            {/* <Button /> */}
          </div>
        </Col>
      </Row>
    </ListItem>
  );
}
export default Jobs;