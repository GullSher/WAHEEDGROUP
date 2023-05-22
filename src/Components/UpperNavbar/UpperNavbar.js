import 'font-awesome/css/font-awesome.min.css';
import ReactDOM from 'react-dom';
// import FontAwesomeIcon from '@fortawesome/react-fontawesome'
// import {{}} from 'fortawesome/react-fontawesome'
// import { faCoffee } from '@fortawesome/fontawesome-free-solid'
// import {{ FaHSquare }} from "react-icons/fa";

const UpperNavbar = () => {
    return (
        <div id="top-bar" class="hidden-md-down">
            <div class="">
                <div class="row">
                    <div class="col-md-9 col-12">
                        <ul class="top-bar-info">
                            <li><i class="fa fa-phone"></i> Phone: +92 (51) 4862 383</li>
                            <li>
                                <i class='fas fa-map-marker-alt'></i>
                                {/* <i class="fa fa-map-marker-alt"></i> */}
                                {/* <i "FaHSquare"></i> */}
                                {/* <i class="fas fa‑anchor" ></i> */}
                                {/* <i class="fas fa-map-marker-alt"></i> */}
                                {/* <i class="faCoffee"></i> */}
                                House #88-A, Nazim Uddin Road, F-8/4, Islamabad,
                                Pakistan.</li>
                            <li><i class="fa fa-envelope"></i>Email: info@waheedgroup.com.pk</li>
                        </ul>
                    </div>
                    <div class="col-md-3 col-12">
                        <ul class="social-icons hidden-sm">
                            <li><a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-twitter"></i></a></li>
                            <li><a href="http://www.skype.com/" target="_blank" rel="noopener noreferrer"><i class="fa fa-skype"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div >
        // < script src = 'https://kit.fontawesome.com/a076d05399.js' crossorigin = 'anonymous' ></ >
    )

}
export default UpperNavbar

