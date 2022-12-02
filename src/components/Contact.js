import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
function Contact() {
  return(
    <Container id="contact">
      <Form>
        <Form.Group>
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" placeholder="Enter name"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Email Address</Form.Label>
          <Form.Control type="email" placeholder="Enter email"/>
        </Form.Group>
        <Form.Group>
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" placeholder="Type message here..." style={{ height: '100px'}}/>
        </Form.Group>
        <Button variant="secondary" size="lg">Submit</Button>
      </Form>
    </Container>
  );

}

export default Contact;