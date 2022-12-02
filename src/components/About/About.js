import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import myPicture from './79182621.jpeg';

function About() {
  return(
    <Container id="about">
      <Row>
        <Col style={{fontSize: 100}}>
          Hi, I'm Alex.
        </Col>
        <Col>
          <Image src={myPicture} roundedCircle={true} />
        </Col>
      </Row>
      <Row>
        I am a self-taught programmer and life-long tech enthusiast, who has transitioned from a career as a civil litigation attorney.
      </Row>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
        incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
      </Row>
      <Row>
        <Col>
          <Button variant="secondary" size="lg" href="#contact">Contact Me</Button>
        </Col>
        <Col>
          <Button variant="secondary" size="lg" href="#projects">See My Past Projects</Button>
        </Col>
      </Row>

    </Container>
  );
}

export default About;