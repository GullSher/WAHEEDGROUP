
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Routes } from "react-router-dom";
// import Navbar1 from './Navbar/Navbar1';
// import Footer from './Footer/Footer';
import Card from './Cards/Cards';
// import About from "./About";
import About from "./Components/AboutUs";
import NotFound from './Components/NotFound';

// import Button from 'react-bootstrap/Button';

// or less ideally
// import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">


      </header> */}
      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path='*' element={<NotFound />} />
      </Routes>
      <Card />
    </div>

  );
}

export default App;
