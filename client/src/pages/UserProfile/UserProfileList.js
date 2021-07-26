import React, { Component } from "react";
// import { ListItem } from "../List";
// import { Row, Col } from "../../Grid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "react-bootstrap/ListGroupItem";
import Button from "react-bootstrap/Button";


 function UserProfileList({ position, date_posted, position_id, description, languages, technologies, experience, salary, author }) {
    return (
      <div>
        <ListItem>
          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Position</h3>
              <h4 className="font-italic">{position}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Date Posted</h3>
              <h4 className="font-italic">{date_posted}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Position ID</h3>
              <h4 className="font-italic">{position_id}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Description</h3>
              <h4 className="font-italic">{description}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Languages</h3>
              <h4 className="font-italic">{languages}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Technologies</h3>
              <h4 className="font-italic">{technologies}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Experience</h3>
              <h4 className="font-italic">{experience}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Salary</h3>
              <h4 className="font-italic">{salary}</h4>
            </Col>
          </Row>

          <Row className="flex-wrap-reverse">
            <Col size="md-8">
              <h3>Author</h3>
              <h4 className="font-italic">{author}</h4>
            </Col>
          </Row>
        </ListItem>
        <Button variant="primary" type="edit">
            Edit
        </Button>
      </div>
    );
    }
    
 

export default UserProfileList;