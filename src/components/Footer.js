import React from "react";
import rbLogo from './img/rbLogo.png';
const Footer = () => {
  return (
    <div class="container-fluid footer">
      <div class="row">
        <div class="col-lg-3 col-md-3 col-sm-12 image-fluid">
          <img src={rbLogo} id="kimgrb" />
        </div>
        <div class="col-lg-3 col-md-3 col-sm-12">
          <p id="kp1">COMPANY</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-12">
          <br />
          <br />
          <br />
          <p>Traffic</p>
          <p>Partner with us</p>
          <p>Reach Us</p>
          <p>About Us</p>
          <p>Sitemap</p>
        </div>

        <div class="col-lg-3 col-md-3 col-sm-12">
          <p id="kp2">FOLLOW</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </div>
      </div>
    </div>
  );
};
export default Footer;
