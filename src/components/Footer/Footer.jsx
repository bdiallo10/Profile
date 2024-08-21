import './Footer.scss'
import ProfilePic from '../../assets/images/Profile.jpg'
import {Container, Row, Col, Stack, Image, Nav, NavLink} from "react-bootstrap"

const Footer = () => {
    return (
        <footer className='fixed-bottom'>
            <Container fluid>
                <Row className='bg-primary text-white'>
                    <Col className="max-5">
                    <Stack>
                        <Image className='image'
                            src={ProfilePic}
                            alt="profilePic"
                            rounded
                            width={100}
                            height={150}
                        />
                    </Stack>
                    </Col>
                    <Col>
                        <Nav className='flex-column fs-5'>
                            Useful Links
                            <NavLink href='#' className='text-white'>LinkedIn</NavLink>
                            <NavLink href='#' className='text-white'>Github</NavLink>
                        </Nav>
                    </Col>
                    <Col>
                        <h4>Contact me!</h4>
                        <p>bdiallo10@icloud.com</p>
                        <p>diallo.hhrd@gmail.com</p>
                        <p>Phone: 206-476-0632</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
    
}

export default Footer