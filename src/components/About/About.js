import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from "react-bootstrap/Image";
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
        <Col>I am a self-taught programmer and life-long tech enthusiast, who has transitioned from a career as a civil litigation attorney.</Col>
      </Row>
      <Row>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
        incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
      </Row>
      {/*  <a href="#contact">Contact Me</a>*/}
      {/*  <a href="#projects">See My Past Projects</a>*/}
      {/*</div>*/}
    </Container>
  );
}

export default About;