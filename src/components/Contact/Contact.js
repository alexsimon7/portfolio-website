import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Stack from "react-bootstrap/Stack";
import LocationMap from "./LocationMap";
function Contact() {
  return(
    <Container id="contact">
      <Form>
        <Row>
          <Col style={{fontSize: 100}}>
            Contact Me
          </Col>
        </Row>
        <Row>
          <Col>
            <Stack gap={3}>
              <div>
                <Form.Group>
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" placeholder="Enter name"/>
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="email" placeholder="Enter email"/>
                </Form.Group>
              </div>
              <div>
                <Form.Group>
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" placeholder="Type message here..." style={{ height: '100px'}}/>
                </Form.Group>
              </div>
              <div>
                <Button variant="secondary" size="lg">Submit</Button>
              </div>
            </Stack>
          </Col>
          <Col>
            <LocationMap />
          </Col>
        </Row>
      </Form>
    </Container>
  );

}

export default Contact;