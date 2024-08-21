import './Body.scss'
import {Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap"


const Body = () => {

  return (
    <div>
        <h3>
        Hello! I’m Boubacar Diallo, a versatile software engineer 
        with three years of hands-on experience across a range of 
        technologies. My expertise includes working with popular JavaScript 
        frameworks, as well as robust programming languages like Java, Python, 
        and C#. Additionally, I have a solid background in tech support, 
        which has equipped me with strong problem-solving skills and a keen 
        understanding of user needs. I thrive on tackling complex challenges and 
        enjoy the dynamic nature of software development. My diverse skill set 
        enables me to approach projects from multiple angles, 
        ensuring both high-quality code and exceptional user experiences.
        </h3>
        <Container fluid>
            <Row className='bg-primary text-white'>
                <Col className="max-3">
                    <h1>View my experiences</h1>
                </Col>
                <Col>
                    <h1>View my projects</h1>
                </Col>
                <Col>
                    <h1>View my Data Science Projects</h1>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Body
