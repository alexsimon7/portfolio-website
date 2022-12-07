import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import myPicture from './79182621.jpeg';
import Stack from "react-bootstrap/Stack";
import '../../index.css';

function About() {
  return (
    <Container id="about">
      <div className="about-cont">
        <Row>
          <Col>
            <Stack>
              <div className="section-header">
                Hi, I'm Alex.
              </div>
              <div className="section-sub-header">
                I am a self-taught programmer and life-long tech enthusiast, who has transitioned from a career as a civil litigation attorney.
              </div>
            </Stack>
          </Col>
          <Col>
            <div className="my-image">
              <Image src={myPicture} roundedCircle={true} />
            </div>
          </Col>
        </Row>
        <Row>
          <Col>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
            incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          </Col>
          <Col>
            <Row>
              <div className="intro-video">
                [Insert Introduction Video]
              </div>
            </Row>
            <Row>
                <Stack direction="horizontal" gap="3">
                  <Button variant="secondary" size="lg" href="#contact">Contact Me</Button>
                  <div className="vr"/>
                  <Button variant="secondary" size="lg" href="#projects">See My Past Projects</Button>
                </Stack>
            </Row>
          </Col>
        </Row>
      </div>
    </Container>
  );
}

export default About;