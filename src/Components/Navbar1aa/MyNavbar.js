import React from 'react'
import LogoNav from '../Footer2a/img/whImages/logo.png';
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';


function MyNavbar() {
    return (
        <>
            <Container>
                <Row>
                    <Col>
                        {/* <Navbar variant="dark" bg="light" expand='md'> */}
                        <Navbar expand='md' >
                            <Container>
                                <Navbar.Brand href='#'>
                                    <img src={LogoNav} id="footer_logo" className='align-top' alt="logo" />
                                </Navbar.Brand>

                                <Navbar.Toggle aria-controls="my-nav" />
                                <Navbar.Collapse id="my-nav">
                                    <Nav className="me-auto fw-bold">
                                        {/* <Nav className="fw-bold" > */}
                                        {/* <Nav> */}
                                        <Nav.Link href='/'>HOME</Nav.Link>

                                        <NavDropdown title="ABOUT US" id="my-nav">
                                            {/* <ul class="nav-dropdown">
                              <li><a href="chairman.js" target='_blank'>Chairman</a></li>
                                                    <li><a href="directors.html">Directors</a></li>
                                                    <li><a href="awards.html">Awards</a></li>
                                                    <li><a href="aboutus.html">About Us </a></li>
                                                </ul> */}

                                            <NavDropdown.Item href='/AboutUs'>ABOUT US</NavDropdown.Item>
                                            <NavDropdown.Item href='/Chairman' target='_blank'>Chairman</NavDropdown.Item>
                                            <NavDropdown.Item href="/Chairman">Chairman2</NavDropdown.Item>

                                            <NavDropdown.Header>Heading 1</NavDropdown.Header>
                                            <NavDropdown.Item href="/Director">Director </NavDropdown.Item>
                                            <NavDropdown.Divider />
                                            <NavDropdown.Header>Heading 2</NavDropdown.Header>
                                            <NavDropdown.Item href="/Awards">Awards </NavDropdown.Item>
                                        </NavDropdown>

                                        <Nav.Link href='#'>OUR CONCERNS</Nav.Link>
                                        <Nav.Link href='#'>OUR PRODUCTS</Nav.Link>
                                        <Nav.Link href='#'>LATEST NEWS</Nav.Link>
                                        <Nav.Link href='#'>MEDIA GALLERY</Nav.Link>
                                        <Nav.Link href='#'>CONTACT US</Nav.Link>

                                    </Nav>
                                </Navbar.Collapse>

                            </Container>
                        </Navbar>
                    </Col>

                </Row>

            </Container >

        </>
    )
}

export default MyNavbar
