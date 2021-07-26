import React, { Component } from "react";
// import { ListItem } from "../List";
// import { Row, Col } from "../../Grid";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ListItem from "react-bootstrap/ListGroupItem";

//User Profile List Page Component

function Userlists({
    employer,
    name,
    email,
    password,
    phone,
    city,
    state,
    zipcode,
    startDate,
    salaryRange,
    typeOfWork,
    experienceLevel,
    technicalEdu,
    school,
    skillset,
    company,
    companyDesc,
    postedJobs
}) {
    return (

        <div>
            <ListItem>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Position</h3>
                        <h4 className="font-italic">{employer}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Date Posted</h3>
                        <h4 className="font-italic">{name}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Position ID</h3>
                        <h4 className="font-italic">{email}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Description</h3>
                        <h4 className="font-italic">{password}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Languages</h3>
                        <h4 className="font-italic">{phone}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Technologies</h3>
                        <h4 className="font-italic">{city}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Technologies</h3>
                        <h4 className="font-italic">{state}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Experience</h3>
                        <h4 className="font-italic">{zipcode}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Salary</h3>
                        <h4 className="font-italic">{startDate}</h4>
                    </Col>
                </Row>

                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{salaryRange}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{typeOfWork}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{experienceLevel}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{technicalEdu}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{school}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{school}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{skillset}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{company}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{companyDesc}</h4>
                    </Col>
                </Row>
                <Row className="flex-wrap-reverse">
                    <Col size="md-8">
                        <h3>Author</h3>
                        <h4 className="font-italic">{postedJobs}</h4>
                    </Col>
                </Row>
            </ListItem>
        </div>
    );
}



export default Userlists;