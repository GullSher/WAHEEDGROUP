import React from "react";
import './App.css';
// importing Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';

import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import ReactDOM from 'react-dom';

// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';
// import { Router, Route, Link, browserHistory, IndexRoute } from 'react-router';

import { Routes } from "react-router-dom";

//  importing globaly some css files of wordpress 
// 
// import '../src/Components/Footer2a/css/default.css';
// import '../src/Components/Footer2a/css/fontawesome-all.css';
// import '../src/Components/Footer2a/css/styles-5.css';
// import '../src/Components/Footer2a/css/icomoon.css';
// import '../src/Components/Footer2a/css/navigation.css';
// import '../src/Components/Footer2a/css/owl.carousel.css';
// import '../src/Components/Footer2a/css/rev-settings.css';
// import '../src/Components/Footer2a/css/themify-icons.css';

// import Navbar1 from './Components/Navbar1/Navbar1';
import Navbar2 from './Components/NavBar2/Navbar2';
import Navbar4 from './Components/NavBar4/Navbar4';
// import Navbar5 from './Components/Navbar5/Navbar5';
// import Navbar6 from './Components/Navbar6/Navbar6';
import UpperNavbar from './Components/UpperNavbar/UpperNavbar';
import Navbar1a from './Components/Navbar1a/Navbar1a';
import Video1 from './Components/Video1/Video1';
import CarouselReact from './Components/Carouselreact/Carousel';
// import Cards from './Cards/Cards';
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
// import Footer from './Components/Footer/Footer';
// import Footer2 from './Components/Footer2/Footer2';
// import Footer2a from './Components/Footer2a/Footer2a';
import Footer3a from './Components/Footer3a/Footer3a';
import MyNavbar from "./Components/Navbar1aa/MyNavbar";
// import NotFound from './Components/NotFound';
// import Button from 'react-bootstrap/Button';
// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
    return (
        <div className="App">
            {/* <Navbar1 /> */}
            <Navbar2 />
            <Navbar4 />
            {/* <Navbar5 /> */}
            {/* <Navbar6 /> */}
            <UpperNavbar />
            <MyNavbar />

            <Navbar1a />
            <Video1 />
            <CarouselReact />








            <Routes>
                <Route exact path='/' Component={Home} />
                <Route exact path='/Home' Component={Home} />
                <Route exact path='/AboutUs' Component={AboutUs} />
                <Route exact path='/Services' Component={Services} />
                <Route exact path='/ContactUs' Component={ContactUs} />
                {/* <Route exact path='/SignUp' Component={SignUp} /> */}
            </Routes>

            {/* <Footer /> */}
            {/* <Footer2a /> */}
            <Footer3a />

        </div >

    );
}

export default App;
