import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";
import Navbar2 from './Components/NavBar2/Navbar2';
// import Navbar4 from './Components/NavBar4/Navbar4';
// import Navbar5 from './Components/Navbar5/Navbar5';
// import Navbar6 from './Components/Navbar6/Navbar6';
// import Cards from './Cards/Cards';
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";

import Footer from './Components/Footer/Footer';
import Footer2 from './Components/Footer2/Footer2';
// import NotFound from './Components/NotFound';
// import Button from 'react-bootstrap/Button';
// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      {/* <Navbar4 /> */}
      {/* <Navbar5 /> */}
      {/* <Navbar6 /> */}
      {/* <Navbar4 /> */}
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/Home' Component={Home} />
        <Route exact path='/AboutUs' Component={AboutUs} />
        <Route exact path='/Services' Component={Services} />
        <Route exact path='/ContactUs' Component={ContactUs} />
        {/* <Route exact path='/SignUp' Component={SignUp} /> */}
      </Routes>
      <Footer />
      <Footer2 />

    </div >

  );
}

export default App;
