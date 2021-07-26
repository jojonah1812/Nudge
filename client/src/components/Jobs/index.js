import React from "react";
import { ListItem } from "../List";
import { Col, Row } from "react-bootstrap";

//import "./style.css";
function Jobs({
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
      <Row>
        <Col>
          <h3 className="font-italic">{position}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <p>Date Posted: {datePosted}</p>
          <p>Languages Req'd: {positionReqLang}</p>
        </Col>
        <Col>
          <p>Technical Skills Req'd: {positionReqTech}</p>
          <p>Experience Req'd: {positionReqExp}</p>
        </Col>

        <Col>
          <p>Salary Range: {salaryRange}</p>
          <p>Company Rep: {nameAuthor}</p>
          <p>Rep Contact Info: {emailAuthor}</p>
        </Col>
        {/* <Col></Col> */}
      </Row>
    </ListItem>
  );
}
export default Jobs;
