import React from "react";
import HeaderInfo from "../../common/HeaderInfo";
import contactUsImage from "../../../assets/images/contactUs.png";
import leatherImage from "../../../assets/images/contactUsBag.png";
import ContactUsForm from "../../ContactUsForm/ContactUsForm";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./contactUsScreen.css";
import Footer from "../../Footer/Footer";

const ContactUsScreen = () => {
  return (
    <>
      <HeaderInfo title={"Contact Us"} bgImage={contactUsImage} />
      <Container fluid className="mt-1 contact-us-container">
        <Row className="align-items-start">
          <Col
            xl={6}
            xs={12}
            className="order-xl-2 order-1 d-flex mb-4 mb-xl-0 justify-content-end"
          >
            <Image src={leatherImage} className="w-100 w-xl-auto " />
          </Col>
          <Col xl={6} xs={12} className="order-xl-1 order-2">
            <p className="heading-title m-0">Get in touch</p>
            <p className="contact-us-description m-0 pb-3">
              Our friendly team would love to hear from you.
            </p>
            <div className="pt-4">
              <ContactUsForm />
            </div>
          </Col>
        </Row>
      </Container>

      <Footer />
    </>
  );
};

export default ContactUsScreen;
