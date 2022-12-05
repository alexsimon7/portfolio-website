import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import projects from "./ProjectData";

function Projects() {
  return(
    <Container id="#projects">
      <Row>
        <Col style={{fontSize: 100}}>
          Projects I've Built
        </Col>
      </Row>
      <Container>
        {projects.map((project) => (
          <Container>
            <Row style={{fontSize: 50}}>
              {project.title}
            </Row>
            <Row>
              <Col>
                {project.description}
              </Col>
              <Col>
                {project.video}
              </Col>
            </Row>
            <Row>
              <Col>
                {project.tech}
              </Col>
              <Col>
                <a href={project.link}>GitHub Repo</a>
              </Col>
            </Row>
          </Container>
        ))}
      </Container>
    </Container>
  );
}

export default Projects;
