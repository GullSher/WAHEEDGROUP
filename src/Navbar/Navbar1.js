// import { ReactComponent as Brand } from '../../Assets/icons/logo.svg'
// import { ReactComponent as Brand } from '../Assets/Icons/waheedgroup-logo1.jpg'
import '../Navbar/Navbar1.css'

const Navbar1 = () => {
   return (

      <nav>
         <div class="logo">
            Waheed Group
         </div>
         <input type="checkbox" id="click" />
         <label for="click" class="menu-btn">
            <i class="fas fa-bars"></i>
         </label>
         <ul>
            <li><a class="active" href="#">Home</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Services</a></li>
            <li><a href="#">Gallery</a></li>
            <li><a href="#">Feedback</a></li>
            <li><a href="#">ContactUs</a></li>
         </ul>
      </nav >

   )
}

export default Navbar1




