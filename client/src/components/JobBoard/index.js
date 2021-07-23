import React from "react";
import "./style.css";
import Col from "react-bootstrap/Col";
import Container from 'react-bootstrap/Container'
import Col from "react-bootstrap/Col";
// import ListGroup from 'react-bootstrap/ListGroup'
// want to list the job headers 
function Jobs() {
    return (
        <div class="cardContainer">
         <Grid>
              <Container>
                <Row>
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>           
              
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                  <Col xs={6} md={4}>sm=true</Col>
                </Row>
              </Container>
          </Grid>
        </div>   
    )
};

export default Jobs;