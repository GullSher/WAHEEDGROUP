//import { Link } from "react-router-dom";
import '../Footer2/Footer2.css';
import Logo1 from '../Footer2a/img/whImages/logo.png';
// import '../Footer2a/css/*.css';



// import bs from '../Footer2a/'

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


// import Logo from ''; 

const Footer2 = () => {
  return (

    <div class="container-fluid">
      {/* container-fluid Start */}

      <div class="row">
        {/* row Div Start */}


        {/* <div class="col-md-4 col-sm-6 col-12"><a href="#"><img src="/web/20210623202130im_/https://waheedgroup.com.pk/img/whImages/logo.png" id="footer_logo" alt="logo" /></a> */}
        <div class="col-md-4 col-sm-6 col-12">
          <a href='www.google.com'>
            <img src={Logo1} id="footer_logo" alt="logo" />
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

        {/* 3rd row Div Start Blow */}
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
          {/* <a href="#" class="scroll-to-top"><i class="fas fa-chevron-up"></i></a> */}
          {/* 3rd row Div End Blow */}
        </div>


        {/* row Div Ends */}
      </div>

      <div class="footer-1-bar">
        <p><a href="www.waheedgroup.com.pk" target="_blank" style={{ color: 'white' }} >Waheed Group Of Companeis</a> © 2022. All Rights Reserved.</p>
      </div>



      <script>
        {/* // function savesub() {
    //     var email = document.getElementById('subEmail').value;

    //     if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2, 3})+$/.test(email)) {
    //         $.ajax({
    //         url: "phpScripts/saveSubscribe.php",
    //         type: "POST",
    //         data: ['email' => email],
    //         contentType: false,
    //         cache: false,
    //         processData: false,
    //         beforeSend: function() {
    //             //$("#preview").fadeOut();
    //             $("#err").fadeOut();
    //         },
    //         success: function(data) {
    //             if (data == 'invalid') {
    //                 // invalid file format.
    //                 $("#subMessage").html("<div class='alert alert-danger'>Error While Subscribing Please Try again later.</div>");

    //             } else {
    //                 // view uploaded file.
    //                 // $("#err").html(data).fadeIn();
    //                 console.log(data);

    //                 $("#subMessage").html("<div class='alert alert-success'>Subscribed Successfully!.</div>");
    //                 // $("#contactForm")[0].reset();
    //             }
    //         },
    //         error: function(e) {
    //           $("#subMessage").html("<div class='alert alert-danger'>Error While Subscribing Please Try again later.</div>");
    //         }
    //     });
    //     }else{
    //       $("#subMessage").html("<div class='alert alert-danger'>Please Enter a Valid Email!.</div>");
    //     }
    // } */}
      </script>


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


      {/* container-fluid pg-footer2 End */}
    </div >

  )
}
export default Footer2