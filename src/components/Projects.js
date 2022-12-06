import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import experience from "../data";
import Stack from "react-bootstrap/Stack";

function Projects() {
  return(
    <Container id="projects">
      <Row>
        <Col style={{fontSize: 100}}>
          My Projects
        </Col>
      </Row>
      {experience.projects.map((project) => (
        <Container>
          <Row style={{fontSize: 50}}>
            <Stack direction="horizontal" gap={3}>
              <div>{project.title}</div>
              <div className="vr"/>
              <div>{project.reason}</div>
            </Stack>
          </Row>
          <Row>
            <Stack direction="horizontal" gap={3}>
              <div>{project.description}</div>
              <div>{project.video}</div>
            </Stack>
          </Row>
          <Row>
            <Stack direction="horizontal" gap={3}>
              <div>{project.tech}</div>
              <div><a href={project.link}>GitHub Repo</a></div>
            </Stack>
          </Row>
        </Container>
      ))}
    </Container>
  );
}

export default Projects;
