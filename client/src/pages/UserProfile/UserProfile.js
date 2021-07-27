import React, { useState, useEffect } from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Input from "react-bootstrap/Form";
//import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Users from "../../components/UserprofileForm";
import API from "../../utils/axios/API";
import { Col, Row, Container, InputGroup } from "react-bootstrap";

const userData =[{
  employer: "IBM",
  name: "Horace Silva",
  email: "horace@icloud.com",
  password: "jazz@4234",
  phone: "424-459-1413",
  city: "Santa Monica",
  state: "CA",
  zipcode: 90043,
  startDate: "2021-08-04",
  salaryRange: "$225,000.00 to $250,000.00",
  typeOfWork:"Developer",
  experienceLevel: "15 yeares",
  technicalEdu: "Math",
  school: "UCLA",
  skillset: "Coding",
  company: "IBM",
  companyDesc: "Global Corporation",
  postedJobs: "130"
}] 

const UserProfile = () => {
  // Setting our component's initial state
  // const [jobs, setJobs] = useState([])
  const [users, setUsers] = useState({})

  return <div>{userData.map(user => {

   return  <div>
      <p>{user.employer}</p>
      <p>{user.name}</p>
      <p>{user.mail}</p>
      <p>{user.password}</p>
      <p>{user.phone}</p>
      <p>{user.city}</p>
      <p>{user.state}</p>
      <p>{user.zipcode}</p>
      <p>{user.startDate}</p>
      <p>{user.salaryRange}</p>
      <p>{user.typeOfWork}</p>
      <p>{user.experienceLevel}</p>
      <p>{user.technicalEdu}</p>
      <p>{user.school}</p>
      <p>{user.skillset}</p>
      <p>{user.company}</p>
      <p>{user.companyDesc}</p>
      <p>{user.postedJobs}</p>
    </div>

  })

}
</div> 
}



  
export default UserProfile;


