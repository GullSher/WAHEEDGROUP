import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Route, Routes } from "react-router-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// import Navbar1 from './Navbar/Navbar1';
// import Footer from './Footer/Footer';
import Cards from './Cards/Cards';
// import About from "./About";
// import About from "./Components/AboutUs";
// import NotFound from './Components/NotFound';
// import Button from 'react-bootstrap/Button';
// or less ideally
// import { Button } from 'react-bootstrap';

function App() {
  return (
    <div className="App">
      {/* <header className="App-header">

      </header> */}
      {/* <Routes> */}
      <Cards />


      {/* <Switch> */}
      {/* <Route path="/" element={<Cards />} /> */}

      {/* <Route path="/Home" element={<Home />} /> */}
      {/* <Route path='*' element={<NotFound />} />
          <Route path='/' exact component={Home} />
          <Route path='/Contact1' component={Contact1} />
          <Route path='/Services' component={Services} />
          <Route path='/AboutUs' component={AboutUs} /> */}


      {/* </Switch>
    </Routes> */}

      {/* <Cards /> */}
    </div >

  );
}

export default App;
