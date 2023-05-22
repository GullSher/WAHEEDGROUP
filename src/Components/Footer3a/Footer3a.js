// import { Link } from "react-router-dom";
import '../Footer3a/Footer3a.css';
import Logo1 from '../Footer2a/img/whImages/logo.png';


const Footer3a = () => {
  return (

    <div class="footer-1">

      <div class="container">
        {/* Start of container div */}

        <div class="row">
          {/* Start of row div */}

          <div class="col-md-4 col-sm-6 col-12">
            <a href="www.google.com">
              <img src={Logo1} id="footer_logo" alt="logo" />

            </a>
            <p class="mt-20">Welcome to the Waheed Group of Companies! What started off over four decades
              ago as a small business has today spread out by leaps and bounds to be-come Pakistan’s
              largest business group. </p>

            <ul class="social-links-footer">
              <li>
                <a href="http://www.facebook.com/" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-facebook"></i></a>
              </li>
              <li>
                <a href="http://www.twitter.com/" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-twitter"></i></a>
              </li>
              <li>
                <a href="http://www.skype.com/" target="_blank" rel="noopener noreferrer">
                  <i class="fa fa-skype"></i></a></li>
            </ul>

          </div>

          <div class="col-md-4 col-sm-6 col-12">
            <h2>Recent news</h2>

            <ul class="footer-news mt-25">
              <li><a href="latestNews.html#Mr Abdul Waheed, Chairman PVMA KN News">Mr Abdul Waheed,
                Chairman PVMA KN News</a><strong><i class="fa fa-calendar"></i> 2020-10-19</strong>
              </li>
              <li><a
                href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan">Mr.
                Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan</a><strong><i
                  class="fa fa-calendar"></i> 2019-06-20</strong></li>
              <li><a href="latestNews.html#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">Mr.
                Abdul Waheed Sheikh - welcoming Ambassador of UAE</a><strong><i
                  class="fa fa-calendar"></i>
                  2019-06-20</strong></li>
            </ul>

          </div>


          <div class="col-md-4 col-sm-6 col-12">
            <div id="subMessage"></div>
            <h2>Subscribe</h2>
            <div class="footer-subscribe-form mt-25" id="subscribeFromFooter">
              <div class="d-table full-width">
                <div class="d-table-cell">
                  <input type="text" id="subEmail"
                    placeholder="Your Email adress" />
                </div>
                <div class="d-table-cell"><button id="saveSub" onclick="savesub()"><i
                  class="fas fa-envelope"></i></button>
                </div>
              </div>
            </div>
            <p class="mt-10">Get latest updates and offers.</p>
          </div>

        </div>

        <div class="footer-1-bar">
          <p>
            <a href="http://www.waheedgroup.com.pk/" target="_blank" rel="noopener noreferrer" style={{ color: "white" }} >
              Waheed Hafeez || Group of Companies
            </a> ©2023. All Rights Reserved.
          </p>
        </div>


        {/* End of container Div */}
      </div>

      {/* End of Div   */}

    </div >

  )
}

export default Footer3a