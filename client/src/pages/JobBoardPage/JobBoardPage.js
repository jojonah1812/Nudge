import React, { Component } from "react";
// import Card from "../components/Card";
//import Footer from "../components/Footer";
//import Navbar from "../components/Navbar";
//import Hero from "../components/Hero";
import API from "../../utils/axios/API";
//import { Col, Row, Container } from "../components/Grid";
//import { List } from "../components/List";

class JobBoardPage extends Component {
  state = {
    jobs: []
  };

  // componentDidMount() {
  //   this.getSavedJobs();
  // }

  // getJobsBoard = () => {
  //   API.getSavedJobs()
  //     .then(res =>
  //       this.setState({
  //         jobs: res.data
  //       })
  //     )
  //     .catch(err => console.log(err));
  // };

 /* handleBookDelete = id => {
    API.deleteJob(id).then(res => this.get());
  };
 */ 
  render() {
    return (
      <div>JOB BOARD</div>
    );
    }
  }


export default JobBoardPage;
