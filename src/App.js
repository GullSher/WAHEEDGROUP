
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar1 from './Navbar/Navbar1';
import Footer from './Footer/Footer';
import Card from './Cards/Cards';
// import Button from 'react-bootstrap/Button';

// or less ideally
import { Button } from 'react-bootstrap';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">


      </header> */}

      <Card />
    </div>

  );
}

export default App;
