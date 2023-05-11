import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import '../Assets/logo/waheedgroup-logo1.jpg';
import '../Assets/logo/waheedgroup-logo.jpg';


function Navbar3() {
   return (
      // <Navbar bg="light" expand="lg">
      <Navbar bg="blue" expand='lg'>
         <Container fluid>
            <Navbar.Brand href="#">
                <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" />
               Waheed Group</Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll">
               
{/* old Start */}
{/* 
<Nav className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  <Nav.Link href="#action1">Home</Nav.Link>
                  <Nav.Link href="#action2">AA</Nav.Link>
                  <NavDropdown title="Link" id="navbarScrollingDropdown">
                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                     <NavDropdown.Item href="#action4">
                        Another action
                     </NavDropdown.Item>
                     <NavDropdown.Divider />
                     <NavDropdown.Item href="#action5">
                        Something else here
                     </NavDropdown.Item>
                  </NavDropdown>
                  <Nav.Link href="#" disabled>
                     Link
                  </Nav.Link>
                  </Nav> */}
                  
                  {/* old end */}
{/* =========New Start============ */}
                 
                  <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
               >
                  <Nav.Link href="#action1">Home</Nav.Link>
                 
                  {/* <Nav.Link href="#action2">Link</Nav.Link> */}
         {/* ++++++ */}
               <Nav.Link href="#action2">Services</Nav.Link>
               <Nav.Link href="#action2">Contact</Nav.Link>
               {/* <Nav.Link href="#action2">Contact</Nav.Link> */}
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
                     <NavDropdown.Item href="#action3">Action1</NavDropdown.Item>
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

{/* =========New End============ */}


               
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
         </Container>
      </Navbar>
   );
}

export default Navbar3;