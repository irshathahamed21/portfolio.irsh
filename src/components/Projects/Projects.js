import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";


import emotion from "../../Assets/Projects/udemy.png";

import education from "../../Assets/Projects/education_app.jpg";
import { AiFillGithub, AiFillInstagram, AiOutlineMail, AiOutlineTwitter } from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Clone of the udemy.com"
              description="udemy.com  web application to buy new courses to update skills. As of June of 2021, the platform has more than 44 million students, 183,000 courses, and 65,000 instructors teaching courses in 75 languages. There have been over 594 million course enrollments."
              link="https://dreamy-curran-5c15a0.netlify.app//"
              gitlink="https://github.com/KapoorKartik/Udemy-Clone"
            />
                 
          </Col>
        <Col md={4} className="project-card">
             <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Clone of the udemy.com"
              description="udemy.com  web application to buy new courses to update skills. As of June of 2021, the platform has more than 44 million students, 183,000 courses, and 65,000 instructors teaching courses in 75 languages. There have been over 594 million course enrollments."
              link="https://dreamy-curran-5c15a0.netlify.app//"
              gitlink="https://github.com/KapoorKartik/Udemy-Clone"
            />
                 
          </Col>
                 
          </Col>
          {/* <Col md={4} className="project-card">
            <ProjectCard
              imgPath={education}
              isBlog={false}
              title="Education App"
              description="Education app is a career awarness app which helps students find the righ path in their career through expert counselling."
              link="https://dreamy-curran-5c15a0.netlify.app/"
              gitlink="https://github.com/irshathahamed21/Career-Selection-App"
            />
          </Col> */}
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/irshathahamed21"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub/>
                </a>
              </li>
             
             
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/irshath-ahamed-360498219/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn/>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto://21irshathkhan@gmail.com/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiOutlineMail/>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
