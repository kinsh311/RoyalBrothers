import React from "react";
import logo from './img/logo.png';
import {Container, Row, Col} from 'reactstrap'
const Footer = () => {
  return (
    <Container fluid className="footer">
      <Row>
        <Col lg="3" md="3" sm="12" className="image-fluid">
          <img src={logo} id="logo-image" />
        </Col>
        <Col lg="3" md="3" sm="12" className="footer-text">
          <p className="footer-heading">COMPANY</p>
          <p>FAQ</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </Col>

        <Col lg="3" md="3" sm="12" className="footer-text">
          <br />
          <br />
          <br />
          <p>Traffic</p>
          <p>Partner with us</p>
          <p>Reach Us</p>
          <p>About Us</p>
          <p>Sitemap</p>
        </Col>

        <Col lg="3" md="3" sm="12" className="footer-text">
          <p className="footer-heading">FOLLOW</p>
          <p>Facebook</p>
          <p>Twitter</p>
          <p>Instagram</p>
          <p>Linkedin</p>
        </Col>
      </Row>
      </Container>
  );
};
export default Footer;
