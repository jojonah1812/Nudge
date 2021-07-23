import React, { useEffect, useState } from "react";
import Jumbotron from "../components/Jumbotron";
import Card from "../components/Card";
import Footer from "../components/Footer";
import Jobs from "../components/Jobs";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import API from "../../utils/axios/API";
import { Col, Row, Container } from "react-bootstrap/Grid";
import { List } from "../components/List";

function JobBoardPage() {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    API.getJobs()
      .then((res) =>
        setJobs({
          jobs: res.data,
        })
      )
      .catch(() =>
        setJobs({
          jobs: [],
        })
      );
  }, []);

  return (
    <Container>
      <Row>
        <Col size="md-12">
          <Jumbotron>
            <h1 className="text-center">
              <strong>(React) Nudge </strong>
            </h1>
            <h2 className="text-center">Search for jobs.</h2>
          </Jumbotron>
        </Col>
      </Row>
      <Row>
        <Col size="md-12">
          <Card title="Results">
            {jobs.length ? (
              <List>
                {jobs.map((job) => (
                  <Jobs
                    id={job.id}
                    datePosted={job.datePosted}
                    position={job.position}
                    positionReqLang={job.positionReqLang}
                    positionReqTech={job.positionReqTech}
                    positionReqExp={job.positionReqExp}
                    salaryRange={job.salaryRange}
                    nameAuthor={job.nameAuthor}
                    emailAuthor={job.emailAuthor}
                  />
                ))}
              </List>
            ) : (
              <h2 className="text-center">
                No New Jobs Found, Try a Different Query
              </h2>
            )}
          </Card>
        </Col>
      </Row>
      <Footer />
    </Container>
  );
}

export default JobBoardPage;
