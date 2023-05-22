// import { Link } from "react-router-dom";
import '../Footer2a/Footer2a.css';
// import './'
// <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">


//  <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />  }
// <title>Waheed Hafeez || Group of Companies</title>
// <link rel="canonical" href="https://waheedgroup.com.pk" />
// <link rel="shortcut icon" type="image/icon" href="AdminAssets/wgclogo.ico" />
// <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=1">


// <link rel="stylesheet" type="text/css" href="css/bootstrap.min.css">
// <link rel="stylesheet" type="text/css" href="css/themify-icons.css">
// <link rel="stylesheet" type="text/css" href="css/fontawesome-all.css">
// <link rel="stylesheet" type="text/css" href="css/icomoon.css">
// <link rel="stylesheet" type="text/css" href="css/plugins.css">
// <link rel="canonical" href="https://waheedgroup.com.pk" />
// <link rel="shortcut icon" type="image/icon" href="AdminAssets/wgclogo.ico" />

// <link rel="stylesheet" type="text/css" href="./css/bootstrap.min.css">
// <link rel="stylesheet" type="text/css" href="./css/themify-icons.css">
// <link rel="stylesheet" type="text/css" href="./css/fontawesome-all.css">
// <link rel="stylesheet" type="text/css" href="./css/icomoon.css">
// <link rel="stylesheet" type="text/css" href="./css/plugins.css">

// import "../css/bootstrap.min.css";
// import "../css/themify-icons.css";
// import './img/whImages/logo.png';

// import "../css/fontawesome-all.css";
// import "../css/icomoon.css";
// import "../css/plugins.css";

const Footer2a = () => {
  return (

    < div class="container-fluid div2a" >
      {/* container-fluid Start Here */}


      {/* <div class="row"> */}
      <div class="row row-cols-3">
        {/* row Start Here */}


        <div class="col-md-4 col-sm-6 col-12">
          <a href="www.google.com">
            <img src="./img/whImages/logo.png" id="footer_logo" alt="logo" />
          </a>

          <p class="mt-20">Welcome to the Waheed Group of Companies! What started off over four decades ago as a small business has today spread out by leaps and bounds to be-come Pakistan’s largest business group. </p>

          <ul class="social-links-footer">
            {/* <li><a href="https://web.archive.org/web/20210623202130/http://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a></li> */}
            {/* <li><a href="https://web.archive.org/web/20210623202130/http://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li> */}
            {/* <li><a href="https://web.archive.org/web/20210623202130/http://www.skype.com/" target="_blank"><i class="fab fa-skype"></i></a></li> */}

          </ul>
        </div>


        <div class="col-md-4 col-sm-6 col-12">
          <h2>Recent news</h2>
          <ul class="footer-news mt-25">

            <li><a href="latestNews.php#Mr Abdul Waheed, Chairman PVMA KN News">Mr Abdul Waheed, Chairman PVMA KN News</a><strong><i class="fa fa-calendar"></i> 2020-10-19</strong></li>

            <li><a href="latestNews.php#Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan">Mr. Abdul Waheed Sheikh - welcoming Guest of Honor Mr. Faisal Javed Khan</a><strong><i class="fa fa-calendar"></i> 2019-06-20</strong></li>

            <li><a href="latestNews.php#Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE">Mr. Abdul Waheed Sheikh - welcoming Ambassador of UAE</a><strong><i class="fa fa-calendar"></i> 2019-06-20</strong></li>


          </ul>
        </div>



        <div class="col-md-4 col-sm-6 col-12">
          <div id="subMessage"></div>
          <h2>Subscribe</h2>
          <div class="footer-subscribe-form mt-25" id="subscribeFromFooter">
            <div class="d-table full-width">
              <div class="d-table-cell"><input type="text" id="subEmail" placeholder="Your Email adress" /></div>
              <div class="d-table-cell"><button id="saveSub" onclick="savesub()"><i class="fas fa-envelope"></i></button>
              </div>
            </div>
          </div>
          <p class="mt-10">Get latest updates and offers.</p>
        </div>


        {/* div row Ends here */}
      </div>

      <div class="footer-1-bar">
        <p><a href="www.waheedgroup.com.pk" target="_blank" style={{ color: 'white' }} >Waheed Group Of Companeis</a> © 2022. All Rights Reserved.</p>
      </div>





      {/* <a href="#" class="scroll-to-top"><i class="fas fa-chevron-up"></i></a> */}

      <script src="/js/jquery.min.js"></script>
      <script src="/js/plugins.js"></script>
      <script src="/js/Chart.bundle.js"></script>
      <script src="/js/utils.js"></script>
      <script src="/js/navigation.js"></script>
      <script src="/js/navigation.fixed.js"></script>
      <script src="/js/rev-slider/jquery.themepunch.tools.min.js"></script>
      <script src="/js/rev-slider/jquery.themepunch.revolution.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.actions.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.carousel.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.kenburn.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.layeranimation.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.migration.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.parallax.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.navigation.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.slideanims.min.js"></script>
      <script src="/js/rev-slider/revolution.extension.video.min.js"></script>
      <script src="/js/map.js"></script>
      <script src="/js/main.js"></script>


      {/* container-fluid End */}
    </div >

  )
}
export default Footer2a