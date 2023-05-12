import React from "react";
// import { Link } from "react-router-dom";
import '../NavBar2/Navbar2.css';
import Button from 'react-bootstrap/Button';
import { Nav, Navbar } from 'react-bootstrap';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar2() {
   return (
      // <Navbar bg="light" expand="lg">
      <Navbar bg="primary" expand="lg">
         <Container fluid>

            <Navbar.Brand href="#">
               <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" />
               Waheed Group
            </Navbar.Brand>

            <Navbar.Toggle aria-controls="navbarScroll" />

            <Navbar.Collapse id="navbarScroll">

               <Nav className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  <Nav.Item>
                     <Nav.Link href="/">Home</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     <Nav.Link href="/Services">Services</Nav.Link>
                  </Nav.Item>

                  <Nav.Item>
                     {/* <Nav.Link target="_blank" href="/ContactUs">ContactUs</Nav.Link> */}
                     <Nav.Link href="/ContactUs">ContactUs</Nav.Link>
                  </Nav.Item>

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

// ==================== Extra Codes of NavBars =============Blow this line===
// import { ReactComponent as Brand } from '../../Assets/icons/logo.svg'
// import { ReactComponent as Brand } from '../Assets/Icons/waheedgroup-logo1.jpg'
// import '../Navbar/Navbar.css'

// const Navbar = () => {
//    return (

//       <nav>
//          <div class="logo">
//             Waheed Group
//          </div>
//          <input type="checkbox" id="click" />
//          <label for="click" class="menu-btn">
//             <i class="fas fa-bars"></i>
//          </label>
//          <ul>
//             <NavLink to="/">Home</NavLink> – The route to the home page is http://localhost:3000
//             <NavLink to="/about">About</NavLink> – About page route that is, http://localhost:3000/about


// {/* <NavLink to="/services">Services</NavLink> – Services page route that is, http://localhost:3000/services */}
// {/* <NavLink to="/feedback">FeedBack</NavLink> – FeedBack page route that is, http://localhost:3000/feedback */}
// {/* <NavLink to="/contact">ContactUs</NavLink> – ContactUs to the contact page that is http://localhost:3000/contactus */}
// {/* <NavLink to="/blog">Blog</NavLink> – Route to the blog page that is http://localhost:3000/blog */}
// {/* <NavLink to="/Gallery">Gallery</NavLink> – Route to the Gallery page that is http://localhost:3000/gallery */}


// <li><a class="active" href="#">Home</a></li>
// <li><a href="#">About</a></li>
// <li><a href="#">Services</a></li>
// <li><a href="#">Gallery</a></li>
// <li><a href="#">Feedback</a></li>
// <li><a href="#">ContactUs</a></li>


//          </ul>
//       </nav >

//    )
// }

// export default Navbar


//

// import { ReactComponent as Brand } from '../../Assets/icons/logo.svg'
// import { ReactComponent as Brand } from '../Assets/Icons/waheedgroup-logo1.jpg'
// import '../Navbar/Navbar.css'


