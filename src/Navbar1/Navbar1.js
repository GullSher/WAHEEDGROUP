// import { ReactComponent as Brand } from '../../Assets/icons/logo.svg'
// import { ReactComponent as Brand } from '../Assets/Icons/waheedgroup-logo1.jpg'
import '../Navbar1/Navbar1.css';
// import { mainlogo1 } from '../Assets/logo/waheedgroup-logo.jpg';
import '../Assets/logo/waheedgroup-logo1.jpg';
import '../Assets/logo/waheedgroup-logo.jpg';

// import ReactDOM from 'react-dom';

import {
   BrowserRouter as Router,
   // Switch,
   // Route,
   NavLink
   // Link
} from "react-router-dom";
// import { NavLink } from 'react-router-dom';

const Navbar1 = () => {
   return (

      <nav>

         <div class="logo">
            {/* <img src="logo1" height={"80px"} alt='Image not Found....   ' /> */}

            {/* <img src="../Assets/logo/waheedgroup-logo1.jpg" height={"80px"} alt='not Found....   ' /> */}
            {/* <img class="logo" src="../Assets/logo/waheedgroup-logo1.jpg" height={"80px"} alt='not Found....   ' /> */}
            {/* <img alt="aa" src="../Assets/logo/waheedgroup-log.png" /> */}
            {/* file:///H:/Work-Folder-9/Web Work 9/3 may 2023/gullshair/website/src/Assets/logo/waheedgroup-log.png */}
            <img class="sealImage" height={"70px"} src="WhaeedHafeez.png" alt="file-not-found" />
            {/* <img src="https://i.imgur.com/hCrQkJi.png" /> */}

            Waheed Group
         </div>

         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
         </label>
         <ul>
            <NavLink to="/">Home</NavLink> {/* The route to the home page is http://localhost:3000 */}

            {/* <NavLink path="/plans">contact me</NavLink> */}
            {/* Wants to check the link */}
            <NavLink path="/plans">contact me</NavLink>

            <NavLink to="/about">About</NavLink> {/* About page route that is, http://localhost:3000/about */}
            <NavLink to="/services">Services</NavLink> {/* Services page route that is, http://localhost:3000/services */}
            {/* <NavLink to="/feedback">FeedBack</NavLink> – FeedBack page route that is, http://localhost:3000/feedback */}
            {/* <NavLink to="/contact">ContactUs</NavLink> – ContactUs to the contact page that is http://localhost:3000/contactus */}
            {/* <NavLink to="/blog">Blog</NavLink> – Route to the blog page that is http://localhost:3000/blog */}
            {/* <NavLink to="/Gallery">Gallery</NavLink> – Route to the Gallery page that is http://localhost:3000/gallery */}

            {/* 
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">ContactUs</a></li> */}

         </ul>
      </nav >




      //  <Router>
      //       <div>
      //         <nav>
      //           <ul>
      //             <li>
      //               <Link to="/">Home</Link>
      //             </li>
      //             <li>
      //               <Link to="/about">About</Link>
      //             </li>
      //             <li>
      //               <Link to="/users">Users</Link>
      //             </li>
      //           </ul>
      //         </nav>

      //    A <Switch> looks through its children <Route>s and
      // renders the first one that matches the current URL. 

      //  <Switch>
      //           <Route path="/about">
      //             <About />
      //           </Route>
      //           <Route path="/users">
      //             <Users />
      //           </Route>
      //           <Route path="/">
      //             <Home />
      //           </Route>
      //         </Switch>
      //       </div>
      //     </Router>

      //          





   )
}

export default Navbar1

