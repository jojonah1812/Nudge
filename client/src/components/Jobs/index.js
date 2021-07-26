import React from "react";
import { ListItem } from "../List";
import { Col, Row } from "react-bootstrap";


import "./style.css";
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
          <h3 className="position"> {position}</h3>
        </Col>
      </Row>
      <Row>
        <Col>
          <div className="padDetails1">
            <p>
              <strong>Date Posted:</strong> {datePosted}
            </p>
            <p>
              <strong>Languages Req'd:</strong> {positionReqLang}
            </p>
          </div>
        </Col>
        <Col>
          <div className="padDetails2">
            <p>
              <strong>Technical Skills Req'd:</strong> {positionReqTech}
            </p>
            <p>
              <strong>Experience Req'd:</strong> {positionReqExp}
            </p>
          </div>
        </Col>

        <Col>
          <div className="padDetails3">
            <p>
              <strong>Salary Range:</strong> {salaryRange}
            </p>
            <p>
              <strong>Company Rep:</strong> {nameAuthor}
            </p>
            <p>
              <strong>Rep Contact Info:</strong> {emailAuthor}
            </p>
          </div>
        </Col>
        {/* <Col></Col> */}
      </Row>
    </ListItem>
  );
}
export default Jobs;
