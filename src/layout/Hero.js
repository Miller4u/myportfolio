import {Container, Col, Row ,Button} from "react-bootstrap";
import profile from"../images/sarah.PNG"
import resume from "../resume/resume.pdf"
import Cv from "../resume/Cv.pdf"
const Hero = ()=>{
    return(
        <Container fluid className="bg-custom p-5 mt-5" id="home">
        <Row>
            <Col md={6}>
                <h5>Hi,</h5>
                <h1 className="display-2 fw-bold">I'm Miller Chidi</h1>
                <p>Web developer for all operating systems. Structured and efficient web applications. Analysis, concept and implementation.</p>
                <div>
                <Button variant="outline-dark" size="lg" className="px-3 rounded-0">Let's Talk </Button>
                <Button variant="dark" size="lg" className="px-3 rounded-0 ms-3"><a href={resume} target ="blank" className="text-decoration-none link-light">Resume</a></Button>
                <Button variant="dark" size="lg" className="px-3 rounded-0 ms-3"><a href={Cv} target ="blank" className="text-decoration-none link-light">CV</a></Button>
                </div>
            </Col>
            <Col md={6} className="bg-blob">
            <img src={profile} alt="profile-img" className="w-50 rounded-pill float-end d-none d-sm-block"/>
            </Col>
        </Row>
        </Container>
    )
}
export default Hero;