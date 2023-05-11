import React from "react";
import { Link } from "react-router-dom";
import '../NavBar2/Navbar2.css';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
// import '../Assets/logo/waheedgroup-logo1.jpg';
// import '../Assets/logo/waheedgroup-logo.jpg';
// import '../Components/ContactUs';
// import Contact from '../Components/ContactUs';
// import Contact from '../Pages/ContactUs';
// import Services from '../Pages/Services';
// import ContactUs from '../Pages/ContactUs';
// import Contact1 from '../Pages/Contact1';


function Navbar2() {
   return (
      // <Navbar bg="light" expand="lg">
      <Navbar bg="primary" expand="lg">
         <Container fluid>

            <Navbar.Brand href="#">
               <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" />
               Waheed Group 2
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">

               <Nav className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  {/*

<!-- Image and text -->
<nav class="navbar navbar-light bg-light">
  <a class="navbar-brand" href="#">
    <img src="/docs/4.0/assets/brand/bootstrap-solid.svg" width="30" height="30" class="d-inline-block align-top" alt="">
    Bootstrap
  </a>
</nav>

*/}

                  {/*  

<nav class="navbar navbar-dark bg-primary">
  <!-- Navbar content -->
</nav>

<nav class="navbar navbar-light" style="background-color: #e3f2fd;">
  <!-- Navbar content -->
</nav>
*/}

                  {/*  */}
                  {/* <Nav className="ml-auto"> */}
                  <Nav.Item>
                     <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link href="/Services">Services</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link target="_blank" href="/Contact">Contact</Nav.Link>
                  </Nav.Item>
                  <Nav.Item>
                     <Nav.Link target="_blank" href="/ContactUs">ContactUs</Nav.Link>
                  </Nav.Item>

                  {/* <Nav.Item>
                        <Nav.Link href="/Contact1">Contact1</Nav.Link>
                     </Nav.Item> */}


                  {/* <Nav.Item>
                        <Nav.Link href="/about">About</Nav.Link>
                     </Nav.Item> */}

                  {/* 
                     <Nav.Item>
                        <Nav.Link href="/contact">Contact</Nav.Link>
                     </Nav.Item> */}

                  <div className="container">
                     <Link to="/" className="brand-logo">Potter Books</Link>

                     <ul className="right">

                        <li><Link to="/Services">Services</Link></li>
                        <li><Link to="/ContactUs">ContactUs</Link></li>
                     </ul>
                  </div>


                  {/* </Nav> */}








                  {/* <Nav.Link href="#action1">Home</Nav.Link> */}

                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
                  {/* ++++++ */}

                  {/* <Nav.Link target="_parent" href="Services">Services</Nav.Link> */}

                  {/* <Nav.Link hre="../Components/Contact.html>Contact html</Nav.Link> */}

                  {/* <Nav.Link target='_blank' href='Contact1'>Contact1</Nav.Link> */}
                  {/* 
                  <Nav.Link href="../Components/ContactUs.js">Contact</Nav.Link> */}

                  {/* <Nav.Link target='_blank' href="Contact">Contact</Nav.Link> */}

                  {/* <Nav.Link href="#action2">About</Nav.Link> */}
                  {/* <NavLink to="/contact">Contact Me</NavLink> */}
                  {/* <NavLink path="/plans">Contact Me</NavLink> */}

                  {/* <Nav.Link to="/services">Services2</Nav.Link> */}
                  {/* Services page route that is, http://localhost:3000/services */}
                  {/* <Nav.Link to="/about">About2</Nav.Link> */}
                  {/* About page route that is, http://localhost:3000/about */}

                  {/* +++++++ */}

                  {/* <NavDropdown title="Link1" id="navbarScrollingDropdown"> */}
                  <NavDropdown title="About" id="navbarScrollingDropdown">
                     <NavDropdown.Item href="#action-down1">Action-Down1</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">
                        Another action 1
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action5">
                        Something else here 1
                     </NavDropdown.Item>
                  </NavDropdown>

                  {/* <Nav.Link href="#" disabled>
                     Link disabled
                  </Nav.Link> */}

               </Nav>

               <Form className="d-flex">
                  <Form.Control
                     type="search"
                     placeholder="Search"
                     className="me-2"
                     aria-label="Search"
                  />
                  <Button variant="outline-success">Search</Button>
               </Form>
            </Navbar.Collapse>
         </Container >
      </Navbar >
   );
}

export default Navbar2;