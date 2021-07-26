import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Input from "react-bootstrap/Form";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Users from "../../components/Users";
import API from "../../utils/axios/API";
import { Col, Row, Container, InputGroup } from "react-bootstrap";


const UserProfile = () => {
  // Setting our component's initial state
  // const [jobs, setJobs] = useState([])
  const [users, setUsers] = useState({})

  // Load all jobs and store them with setJobs
  useEffect(() => {
    loadUsers()
  }, [])
  useEffect(() => {
    console.log(users);
  }, [users]);

  // Loads all jobs and sets them to jobs
  function loadUsers() {
    API.getUsers()
      .then(res =>
        setUsers(res.data)
      )
      .catch(err => console.log(err));
  }

  // Deletes a book from the database with a given id, then reloads books from the db
  function deleteJob(id) {
    API.deleteJob(id)
      .then(res => loadUsers())
      .catch(err => console.log(err));
  }

  // Handles updating component state when the user types into the input field
  function handleInputChange(event) {
    const { name, value } = event.target;
    setUsers({ ...users, [name]: value })
  };
  // When the form is submitted, use the API.saveUsers method to save the book data
  // Then reload books from the database
  function handleFormSubmit(event) {
    event.preventDefault();
    if (users.employer && users.name && users.email && users.password
      && users.phone && users.city && users.state && users.zipcode && users.startDate && users.salaryRange
      && users.typeOfWork && users.experienceLevel && users.technicalEdu && users.school && users.skillset
      && users.company && users.companyDesc && users.postedJobs) {
      API.saveUser({
        employer: users.employer,
        name: users.name,
        email: users.email,
        password: users.password,
        phone: users.phone,
        city: users.city,
        state: users.state,
        zipcode: users.zipcode,
        startDate: users.startDate,
        salaryRange: users.salaryRange,
        typeOfWork: users.typeOfWork,
        experienceLevel: users.experienceLevel,
        technicalEdu: users.technicalEdu,
        school: users.school,
        skillset: users.skillset,
        company: users.company,
        companyDesc: users.companyDesc,
        postedJobs: users.postedJobs
      })

        .then(res => loadUsers())
        .catch(err => console.log(err));
    }
  };
  return (
    <Container fluid>
      <Row>
        <Col size="md-6">
          <Jumbotron>
            <h1>USER PROFILE</h1>
          </Jumbotron>
          <div>
            <InputGroup.Checkbox
              onChange={handleInputChange}
              name="employer"
              placeholder="Employer (required)"
            />
            <Input
              onChange={handleInputChange}
              name="name"
              placeholder="Name (required)"
            />
            <Input
              onChange={handleInputChange}
              name=" email"
              placeholder="Email (required)"
            />
            <Input
              onChange={handleInputChange}
              name="password"
              placeholder="Password (required)"
            />
            <Input
              onChange={handleInputChange}
              name="phone"
              placeholder="Phone (required)"
            />
            <Input
              onChange={handleInputChange}
              name="city"
              placeholder="City (required)"
            />
            <Input
              onChange={handleInputChange}
              name="state"
              placeholder="State (required)"
            />
            <Input
              onChange={handleInputChange}
              name="zipcode"
              placeholder="Zipcode (required)"
            />
            <Input
              onChange={handleInputChange}
              name="startDate"
              placeholder="State Date (required)"
            />
            <Input
              onChange={handleInputChange}
              name="salaryRange"
              placeholder="Salary Range (required)"
            />
            <Input
              onChange={handleInputChange}
              name="typeOfWork"
              placeholder="Type Of Work (required)"
            />
            <Input
              onChange={handleInputChange}
              name="experienceLevel"
              placeholder="Experience(required)"
            />
            <Input
              onChange={handleInputChange}
              name="technicalEdu"
              placeholder="Technical Education (required)"
            />
            <Input
              onChange={handleInputChange}
              name="school"
              placeholder="School (required)"
            />
            <Input
              onChange={handleInputChange}
              name="skillset:"
              placeholder="Skillset (required)"
            />
            <Input
              onChange={handleInputChange}
              name="company"
              placeholder="Company (required)"
            />
            <Input
              onChange={handleInputChange}
              name="companyDesc"
              placeholder="Company Description (required)"
            />
            <Input
              onChange={handleInputChange}
              name="postedJobs"
              placeholder="Posted Jobs(required)"
            />
          
            />
            <Button
              disabled={!(users.employer && users.name && users.email && users.password
                && users.phone && users.city && users.state && users.zipcode && users.startDate && users.salaryRange
                && users.typeOfWork && users.experienceLevel && users.technicalEdu && users.school && users.skillset
                && users.company && users.companyDesc && users.postedJobs)}
              onClick={handleFormSubmit}
            >
              Submit
            </Button>
            <Button
              disabled={!(users.employer && users.name && users.email && users.password
                && users.phone && users.city && users.state && users.zipcode && users.startDate && users.salaryRange
                && users.typeOfWork && users.experienceLevel && users.technicalEdu && users.school && users.skillset
                && users.company && users.companyDesc && users.postedJobs)}
              onClick={handleFormSubmit}
            >
              Edit
            </Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
}



export default UserProfile;


/*import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

class UserProfile extends Component {

    render() {
        return (
        <div>
            <div>USER PROFILE</div>
            <Form>
            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />

                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridName">
                <Form.Label>Name</Form.Label>
                <Form.Control type="email" placeholder="First and Last Name" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPhone">
                <Form.Label>Phone Number</Form.Label>
                <Form.Control placeholder="phone number" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridCity">
                <Form.Label>City</Form.Label>
                <Form.Control placeholder="City" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridZip">
                <Form.Label>Zip</Form.Label>
                <Form.Control placeholder="Zip code" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridStartDate">
                <Form.Label>Start Date</Form.Label>
                <Form.Control type="date" placeholder="mm/dd/yyyy" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSalary">
                <Form.Label>Salary</Form.Label>
                <Form.Control placeholder="Salary" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridJobType">
                <Form.Label>Job Type</Form.Label>
                <Form.Control placeholder="FT/PT/Contract" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridExperienceLevel">
                <Form.Label>Experience </Form.Label>
                <Form.Control placeholder="Entry/Mid-level/Senior" />
                </Form.Group>
            </Row>

            <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridTechnicalEducation">
                <Form.Label>Tech education</Form.Label>
                <Form.Control placeholder="Technical Education" />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridSchool">
                <Form.Label>School</Form.Label>
                <Form.Control placeholder="School Name" />
                </Form.Group>
            </Row>

            <Button variant="primary" type="submit">
                Submit
            </Button>

            <Button variant="primary" type="edit">
            Edit
            </Button>
            </Form>
        </div>
            )

    }

    };


    export default UserProfile;

*/