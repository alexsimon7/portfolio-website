import React from "react";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import myPicture from './79182621.jpeg';
import Stack from "react-bootstrap/Stack";

function About() {
  return (
    <Container id="about">
      <Row>
        <Col>
          <Stack>
            <div style={{fontSize: 100}}>
              Hi, I'm Alex.
            </div>
            <div style={{fontSize: 25}}>
              I am a self-taught programmer and life-long tech enthusiast, who has transitioned from a career as a civil litigation attorney.
            </div>
          </Stack>
        </Col>
        <Col>
          <Image src={myPicture} roundedCircle={true} />
        </Col>
      </Row>
      <Row>
        <Col>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
          incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
          incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
          incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
          incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
          incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
        </Col>
        <Col>
          <Row>
            [Insert Introduction Video]
          </Row>
          <Row>
            <Stack direction="horizontal" gap="3">
                <div>
                  <Button variant="secondary" size="lg" href="#contact">Contact Me</Button>
                </div>
              <div className="vr"/>
                <div>
                  <Button variant="secondary" size="lg" href="#projects">See My Past Projects</Button>
                </div>
            </Stack>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default About;