import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./headerInfo.css";
import NavbarHeader from "../Navbar/Navbar";

const HeaderInfo = ({ title, description, bgImage }) => {
  return (
    <div className="header-info" style={{ backgroundImage: `url(${bgImage})` }}>
      <NavbarHeader />
      <Container fluid className="h-100">
        <Row className="header-info-container justify-content-center align-items-center text-center">
          <Col md={8}>
            <p className="text-white header-info-title">{title}</p>
            {description && (
              <p className="header-info-desc text-white ps-5 pe-5">
                {description}
              </p>
            )}
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default HeaderInfo;
