import { Row, Col, Container} from "react-bootstrap";
import Techstack from "./Techstack";
import Toolstack from "./Toolstack";
import Particle from "../Particle";
function Skills() {


    return  (
        <>
        <Container fluid className="about-section">
        
            <Container fluid className="about-section">
            <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1> 

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        {/* <Github /> */}
      </Container>
    </Container>
        </>
    )
}

export default Skills;