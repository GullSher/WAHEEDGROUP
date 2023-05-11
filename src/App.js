import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom";

// import Navbar1 from './Navbar/Navbar1';
// import Footer from './Footer/Footer';
// import Cards from './Cards/Cards';
import Home from "./Components/Pages/Home";
import AboutUs from "./Components/Pages/AboutUs";
import Services from "./Components/Pages/Services";
import ContactUs from "./Components/Pages/ContactUs";
// import ContactUs from "/Components/Pages/ContactUs";
import Navbar2 from './Components/NavBar2/Navbar2';

// import NotFound from './Components/NotFound';
// import Button from 'react-bootstrap/Button';
// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      <Navbar2 />
      <Routes>
        <Route exact path='/' Component={Home} />
        <Route exact path='/Home' Component={Home} />
        <Route exact path='/AboutUs' Component={AboutUs} />
        <Route exact path='/Services' Component={Services} />
        <Route exact path='/ContactUs' Component={ContactUs} />
        {/* <Route exact path='/SignUp' Component={SignUp} /> */}
      </Routes>
      {/* <AboutUs /> */}


      {/* <Routes> */}
      {/* <Cards /> */}


      {/* <Switch> */}




      {/* </Switch>
    </Routes> */}

      {/* <Cards /> */}
      {/* <AboutUs /> */}
      {/* <ContactUs/> */}
      {/* <Home /> */}
      {/* <Services /> */}
    </div >

  );
}

export default App;
