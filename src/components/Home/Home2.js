import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Tilt from "react-parallax-tilt";
import profile from "../../Assets/about.png"


function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> About Me </span>
            </h1>
            <p className="home-about-body">
            An empathetic & hardworking individual with a problem-solving mindset who likes building apps 
           and connect with people who are smarter than me!
              <br />
             
            
              <br />
              My field of Interests are want to learn latest web technologies and build 
              <i>
                <b className="purple"> user friendly Web Products </b> and
                also {" "}
                <b className="purple">
                  Solve the complicated Algorithmic Problems 
                </b>
              </i>
              <br />
              <br />
             
             
            
            </p>
          </Col>
          <Col md={4} style = {{marginTop:30}}>
          
              <img src={profile} className="img-fluid" alt="avatar" />
           
          </Col>
        </Row>
        <Row>
          
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
