import React, { useEffect, useState } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Card from "../../components/Card";
import Footer from "../../components/Footer";
import Userslist from "../../components/UsersList";
// import Navbar from "../../components/Navbar";
// import Hero from "../../components/Hero";
import API from "../../utils/axios/API";
import { Col, Row, Container } from "react-bootstrap";
import { List } from "../../components/List";
//User Profile List Page
const UserProfileList = () => {
  const [users, setUsers] = useState([]);
  function getUsers () {
    API.getJobs()
      .then((res) => {
        setUsers(res.data)
      })
      // .catch(() =>
      //   setJobs({
      //     jobs: [],
      //   })
      // );
      }
  useEffect(() => {
  getUsers()
  }, []);
 useEffect(() => {
   console.log(users);
 }, [users]);
  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">
              <strong>Nudge User Profile</strong>
            </h1>
            <h2 className="text-center">Search for jobs.</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Card title="Results">
           {users.length ? (
              <List>
                {users.map((user) => (
                  <Userslist
                    key={user._id}
                    employer={user.employer}
                    name={user.name}
                    password={user.password}
                    phone={user.phone}
                    city={user.city}
                    state={user.state}
                    zipcode={user.zipcode}
                    startDate={user.startDate }
                    salaryRange={user.salaryRange}
                    typeOfWork={user.typeOfWork}
                    experienceLevel={user.experienceLevel}
                    technicalEdu={user.technicalEdu}
                    school={user.school}
                    skillset={user.skillsetl}
                    company={user.company}
                    companyDesc={user.companyDesc}
                    postedJobs={user.postedJobs}
                  />
                ))}
              </List>
            ) : (
              <h2 className="text-center">
                No New Users Found, Try a Different Query
              </h2>
            )}
          </Card>
        </Col> 
      </Row>
      <Footer/>
    </Container>
  );
}



export default UserProfileList;