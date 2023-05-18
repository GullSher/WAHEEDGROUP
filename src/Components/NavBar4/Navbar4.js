import React from "react";
// import { Link } from "react-router-dom";
import '../NavBar4/Navbar4.css';
// import Button from 'react-bootstrap/Button';
// import { Nav, Navbar } from 'react-bootstrap';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import NavDropdown from 'react-bootstrap/NavDropdown';

function Navbar4() {
   return (

      // <div header >
      <div div className="header4" >
         <nav id="navigation4" class="container navigation">
            <div class="nav-header">
               <a class="nav-brand" href="index_php.html">
                  {/* <img src="./img/whImages/logo.png" class="main-logo" alt="logo" id="main_logo" /> */}
                  <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" />
               </a>
               <div class="nav-toggle"></div>
            </div>
            <div class="nav-menus-wrapper">
               <ul class="nav-menu align-to-right">
                  <li>
                     <a href="index_php.html">Home</a>
                  </li>
                  <li>
                     {/* <a href="#">About Us</a> */}
                     <a href="index_php.html">About</a>

                     <ul class="nav-dropdown">
                        <li>
                           <a href="chairman.html">Chairman</a>
                        </li>
                        <li>
                           <a href="directors.html">Directors</a>
                        </li>
                        <li>
                           <a href="awards.html">Awards</a>
                        </li>
                        <li>
                           <a href="aboutus.html">About Us </a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="aboutus.html">Our Concerns</a>
                     <ul class="nav-dropdown">
                        <li>
                           <a href="oil-ghee.html">Oil &Ghee</a>
                        </li>
                        <li>
                           <a href="industrial-fat.html">Industrial Fat</a>
                        </li>
                        <li>
                           <a href="transport.html">Transport</a>
                        </li>
                        <li>
                           <a href="hotel.html">Hotel</a>
                        </li>
                        <li>
                           <a href="energy-sector.html">Energy Sector</a>
                        </li>
                        <li>
                           <a href="wgc-interprises-ltd.html">WGC Interprises Ltd</a>
                        </li>
                     </ul>
                  </li>
                  <li>
                     <a href="products.html">Our Products</a>
                  </li>
                  <li>
                     <a href="latestNews.html">Latest News</a>
                  </li>
                  <li>
                     <a href="gallery.html">Media Gallery</a>
                  </li>
                  <li>
                     <a href="contactus.html">Contact Us</a>
                  </li>
               </ul>
            </div>
         </nav>
      </div>
   );
}
export default Navbar4;
