import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Stack from "react-bootstrap/Stack";
import Card from "react-bootstrap/Card";
import experience from "../data";
import '../index.css';

function Skills() {
   return(
     <Container id="skills">
       <Row>
         <Col className="section-header">
           My Skills
         </Col>
       </Row>
       <Row>
         <div className="section-sub-header">
           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui laborum quasi,
           incidunt dolore iste nostrum cupiditate voluptas? Laborum, voluptas natus?
         </div>
       </Row>
       <Row>
         <Col>
           <Stack gap={3}>
             {experience.skills.filter((skill, index) => (index % 2 === 0)).map((skill, index) => (
                <div>
                  <Card bg="dark" text="white">
                    {`${skill}`}
                  </Card>
                </div>
             ))}
           </Stack>
         </Col>
         <Col>
           <Stack gap={3}>
             {experience.skills.filter((skill, index) => (index % 2 !== 0)).map((skill, index) => (
               <div>
                 <Card bg="dark" text="white">
                   {`${skill}`}
                 </Card>
               </div>
             ))}
           </Stack>
         </Col>
       </Row>
     </Container>
   )
}

export default Skills;