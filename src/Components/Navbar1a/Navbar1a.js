import LogoNav from '../Footer2a/img/whImages/logo.png';
import '../Navbar1a/Navbar1a.css';
import '../Navbar1a/Navbar1ajs.js';
// import { logo } from ".../src/Assets/waheedgroup-logo.jpg";
// import '../Assets/logo/waheedgroup-logo.jpg';

// function Navbar5() {
const Navbar1a = () => {
    return (

        <nav id="navigation4" class="container navigation">
            {/* Create Logo for Navbar  */}
            {/* <Link to='/' className='logo'><i className='fas fa-home' /> Pro-Blog </Link> */}
            {/* <nav id="navigation4" class="container-fluid navigation"> */}
            <div class="nav-header"><a class="nav-brand" href="index_php.html">

                {/* <img src="img/whImages/logo.png" class="main-logo" alt="logo" id="main_logo"> */}
                <img src={LogoNav} id="footer_logo" alt="logo" />
            </a>
                <div class="nav-toggle"></div>
            </div>
            <div class="nav-menus-wrapper">
                <ul class="nav-menu align-to-right">
                    <li><i className='fa fa-home' /><a href="index_php.html">Home</a></li>
                    <li>
                        <a href="http://www.google.com" target='_blank'>About Us</a>
                        {/* <a href="about.js">About Us</a> */}
                        <ul class="nav-dropdown">
                            <li><a href="chairman.js" target='_blank'>Chairman</a></li>
                            {/* <li><a href="chairman.js">Chairman</a></li> */}
                            <li><a href="directors.html">Directors</a></li>
                            <li><a href="awards.html">Awards</a></li>
                            <li><a href="aboutus.html">About Us </a></li>
                        </ul>
                    </li>
                    <li><a href="http://www.google.com">Our Concerns</a>
                        <ul class="nav-dropdown">
                            <li><a href="oil-ghee.html">Oil & Ghee</a></li>
                            <li><a href="industrial-fat.html">Industrial Fat</a></li>
                            <li><a href="transport.html">Transport</a></li>
                            <li><a href="hotel.html">Hotel</a></li>
                            <li><a href="energy-sector.html">Energy Sector</a></li>
                            <li><a href="wgc-interprises-ltd.html">WGC Interprises Ltd</a></li>
                        </ul>
                    </li>
                    <li><a href="products.html">Our Products</a></li>
                    <li><a href="latestNews.html">Latest News</a></li>
                    <li><a href="gallery.html">Media Gallery</a></li>
                    <li><a href="contactus.html">Contact Us</a></li>
                </ul>
            </div>
        </nav>

    )
}

export default Navbar1a

