import React from "react";
import LogoNav from '../Footer2a/img/whImages/logo.png';
import '../Navbar1a/Navbar1a.css';
import '../Navbar1a/Navbar1ajs.js';

// down of this page Nav bar example or idea from  "https://react-bootstrap.github.io/components/navbar/ " can be noted
import { Col, Container, Nav, NavDropdown, Navbar, Row } from 'react-bootstrap';

const Navbar1a = () => {
    return (

        <nav id="navigation4" class="container navigation">
            {/* <nav id="navigation4" class="Container Navigation"> */}
            {/* Create Logo for Navbar  */}
            {/* <Link to='/' className='logo'><i className='fas fa-home' /> Pro-Blog </Link> */}
            {/* <nav id="navigation4" class="container-fluid navigation"> */}

            {/* <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button> */}


            <div class="nav-header">
                <a class="nav-brand" href="/">
                    <img src={LogoNav} id="footer_logo" alt="logo" height={'100px'} width={'100px'} />
                </a>
                <div class="nav-toggle"></div>
            </div>
            <div class="nav-menus-wrapper">
                {/* <ul class="nav-menu align-to-right"> */}
                <ul class="nav-menu align-to-right">
                    {/* <li><i className='fa fa-home' /><a href="index_php.html">Home</a></li> */}
                    <li><i className='fa fa-home' />
                        <a href="/">Home</a></li>

                    <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Dropdown
                        </a>
                        <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                            <a class="dropdown-item" href="/AboutUs">About Us</a>
                            <a class="dropdown-item" href="/Chairman">Chairman</a>
                            <div class="dropdown-divider"></div>
                            <a class="dropdown-item" href="#">Something else here</a>
                        </div>
                    </li>





                    <li>
                        <a href="/AboutUs" target='_blank'>About Us</a>

                        {/* <li><a href="/Awards">Awards1646</a></li> */}
                        <ul class="nav-dropdown">
                            {/* <ul class="nav.dropdown"> */}
                            <li><a href="/Chairman">Chairman</a></li>
                            <li><a href="/Directors">Directors</a></li>
                            <li><a href="/OurProducts">Our Products</a></li>
                            <li><a href="/Awards">Awards</a></li>
                            <li><a href="/AboutUs">About Us </a></li>
                        </ul>
                    </li>


                    <li>
                        <a href="/OurConcerns" target='_blank'>Our Concerns</a>
                        <ul class="nav-dropdown">
                            <li><a href="/oil-ghee">Oil & Ghee</a></li>
                            <li><a href="/industrial-fat">Industrial Fat</a></li>
                            <li><a href="/transport">Transport</a></li>
                            <li><a href="/hotel">Hotel</a></li>
                            <li><a href="/energy-sector">Energy Sector</a></li>
                            <li><a href="/wgc-interprises-ltd">WGC Interprises Ltd</a></li>
                        </ul>
                    </li>

                    <li><a href="/Products">Our Products</a></li>
                    <li><a href="/latestNews">Latest News</a></li>
                    <li><a href="/gallery">Media Gallery</a></li>
                    <li><a href="/contactus">Contact Us</a></li>
                </ul>
            </div>
        </nav>

    )
}
export default Navbar1a

