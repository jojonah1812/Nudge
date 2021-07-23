import React from "react";
import { ListItem } from "react-boostrap/ListItem";
import { Row, Col } from "react-bootstrap/Col";
import { Row } from "react-bootstrap/Row";
//import "./style.css";
function Jobs({
  id,
  datePosted,
  position,
  positionReqLang,
  positionReqTech,
  positionReqExp,
  salaryRange,
  nameAuthor,
  emailAuthor,
}) {
  return (
    <ListItem>
      <Row className="flex-wrap-reverse">
        <Col size="md-8">
          <h3 className="font-italic">{position}</h3>
        </Col>
      </Row>
      <Row className="results">
        <Col>
          <h1>{id}</h1>
        </Col>
        <Col>
          <h1>{datePosted}</h1>
        </Col>
        <Col>
          <h1>{positionReqLang}</h1>
        </Col>
        <Col>
          <h1>{positionReqTech}</h1>
        </Col>
        <Col>
          <h1>{positionReqExp}</h1>
        </Col>
        <Col>
          <h1>{salaryRange}</h1>
        </Col>
        <Col>
          <h1>{nameAuthor}</h1>
        </Col>
        <Col>
          <h1>{emailAuthor}</h1>
        </Col>
      </Row>
    </ListItem>
  );
}
export default Jobs;
