import React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import "./footer.css";
import logo from "../../assets/images/new_white_logo.png";
import Instagram from "../../assets/icons/Instagram";
import Youtube from "../../assets/icons/Youtube";
import LinkedIn from "../../assets/icons/LinkedIn";
import Facebook from "../../assets/icons/Facebook";
import Twitter from "../../assets/icons/Twitter";
import Email from "../../assets/icons/Email";
import Phone from "../../assets/icons/Phone";

const contactInfo = [
  { icon: <Email />, text: "connect@avinya.com" },
  { icon: <Phone />, text: "+916351169077" },
];

const Footer = () => (
  <footer className="footer">
    <Container fluid>
      <Row className="footer-container align-items-start justify-content-between pb-4">
        <Col
          xs={12}
          md={4}
          className="footer-upper-container text-start text-md-left p-0 mb-4 mb-md-5 mb-lg-0"
        >
          <div className="logo ">
            <img
              src={logo}
              height={100}
              width={100}
              alt="Logo"
              className="mb-2 rounded-2"
            />
          </div>
          <div className="contact-info">
            {contactInfo.map((info, index) => (
              <Row key={index} className="contact-row">
                <Col
                  xs={12}
                  className="contact-individuals d-flex align-items-center gap-2 pt-2 contact-item"
                >
                  <div className="contact-icon">{info.icon}</div>
                  <span
                    className="contact-text"
                    onClick={() => {
                      if (info.text.includes("@")) {
                        window.location.href = `mailto:${info.text}`;
                      } else {
                        window.location.href = `tel:${info.text}`;
                      }
                    }}
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    {info.text}
                  </span>
                </Col>
              </Row>
            ))}
          </div>
        </Col>

        <Col xs={12} lg={6} className="nav-links-section">
          <Row className="nav-footer-links justify-content-end gap-5 align-items-start">
            <Col xs={12} sm={3} className="mb-1 mb-md-0">
              <Nav className="flex-column text-start">
                <Nav.Link href="/our-material" className="pt-0  text-md-start">
                  OUR MATERIAL
                </Nav.Link>
                <Nav.Link href="/our-impact" className=" text-md-start">
                  OUR IMPACT
                </Nav.Link>
                <Nav.Link href="#certifications" className=" text-md-start">
                  CERTIFICATIONS
                </Nav.Link>
                <Nav.Link href="/privacy-policy" className=" text-md-start">
                  PRIVACY & POLICY
                </Nav.Link>
              </Nav>
            </Col>
            <Col xs={12} sm={3} className="mb-3 mb-md-0">
              <Nav className="flex-column text-start">
                {/* <Nav.Link href="#" className="pt-0 text-md-start">
                  SHOP
                </Nav.Link> */}
                <Nav.Link href="/about-us" className="pt-0 text-md-start">
                  ABOUT US
                </Nav.Link>
                <Nav.Link href="/contact-us" className="pt-0 text-md-start">
                  CONTACT US
                </Nav.Link>
                {/* <Nav.Link href="/blog" className="pt-0 text-md-start">
                  BLOG
                </Nav.Link> */}
                <Nav.Link href="/faq" className="pt-0 text-md-start">
                  FAQ'S
                </Nav.Link>
              </Nav>
            </Col>
            <Nav className="social-navbar d-flex flex-row justify-content-center">
              <Nav.Link
                href="https://www.instagram.com/avinya_leather/"
                className="p-0"
              >
                <Instagram />
              </Nav.Link>
              <Nav.Link href="#" className="p-0">
                <Youtube />
              </Nav.Link>
              <Nav.Link href="#" className="p-0">
                <Facebook />
              </Nav.Link>
              <Nav.Link href="https://x.com/WeAreAvinya?s=08" className="p-0">
                <Twitter />
              </Nav.Link>
              <Nav.Link
                href="https://www.linkedin.com/company/avinya-leather/"
                className="p-0"
              >
                <LinkedIn />
              </Nav.Link>
            </Nav>
          </Row>
        </Col>
      </Row>
      <p className="footer-text text-center pt-4">
        MADE IN INDIA WITH LOVE ❤️️
      </p>
    </Container>
  </footer>
);

export default Footer;
