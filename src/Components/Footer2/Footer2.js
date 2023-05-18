import { Link } from "react-router-dom";
import '../Footer2/Footer2.css'

// import Logo from '';

const Footer2 = () => {
  return (
    <div class="pg-footer2">

      <footer>
        <div class="footer-1">
          <div class="container">
            <div class="row">
              <div class="col-md-4 col-sm-6 col-12"><a href="#"><img src="/web/20210623202130im_/https://waheedgroup.com.pk/img/whImages/logo.png" id="footer_logo" alt="logo" /></a>
                <p class="mt-20">Welcome to the Waheed Group of Companies! What started off over four decades ago as a small business has today spread out by leaps and bounds to be-come Pakistan’s largest business group. </p>
                <ul class="social-links-footer">
                  <li><a href="https://web.archive.org/web/20210623202130/http://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a></li>
                  <li><a href="https://web.archive.org/web/20210623202130/http://www.twitter.com/" target="_blank"><i class="fab fa-twitter"></i></a></li>
                  <li><a href="https://web.archive.org/web/20210623202130/http://www.skype.com/" target="_blank"><i class="fab fa-skype"></i></a></li>

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
            </div>
            <div class="footer-1-bar">
              <p><a href="https://web.archive.org/web/20210623202130/http://www.bitwisesoft.com/" target="_blank" style={{ color: 'white' }} >Bitwise Soft</a> © 2022. All Rights Reserved.</p>
            </div>
          </div>
        </div>
      </footer><a href="#" class="scroll-to-top"><i class="fas fa-chevron-up"></i></a>

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


      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/jquery.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/plugins.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/Chart.bundle.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/utils.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/navigation.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/navigation.fixed.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/jquery.themepunch.tools.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/jquery.themepunch.revolution.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.actions.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.carousel.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.kenburn.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.layeranimation.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.migration.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.parallax.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.navigation.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.slideanims.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/rev-slider/revolution.extension.video.min.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/map.js"></script>
      <script src="/web/20210623202130js_/https://waheedgroup.com.pk/js/main.js"></script>






    </div >

  )
}



export default Footer2