import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./certificate.css";
import certificate1 from "../../assets/images/certificate1.png";
import certificate2 from "../../assets/images/certificate2.png";
import certificate3 from "../../assets/images/certificate3.png";
import certificate4 from "../../assets/images/certificate4.png";
import certificate5 from "../../assets/images/certificate5.png";
import certificate6 from "../../assets/images/certificate6.png";
import certificate7 from "../../assets/images/certificate7.png";
import certificate8 from "../../assets/images/iso_certificate.png";
import { useTranslation } from "react-i18next";

const certifications = [
  { src: certificate1, alt: "Vegan Approved" },
  { src: certificate2, alt: "ahmedabad text tile" },
  { src: certificate3, alt: "DPIIT" },
  { src: certificate4, alt: "Foreign Trade" },
  { src: certificate8, alt: "ISO" },
  { src: certificate5, alt: "Reach Compliant" },
  { src: certificate6, alt: "CSIR CLRI" },
  { src: certificate7, alt: "MSME" },
];

const CertificationsSection = () => {
  const { t } = useTranslation();
  return (
    <Container className="text-center py-5" id="certifications">
      <p className="certification-heading mb-5">{t("certifications")}</p>{" "}
      <Row className="d-flex justify-content-center flex-wrap align-items-center">
        {certifications.map((cert, index) => (
          <Col xs={12} md={3} key={index} className="mb-4">
            <img
              src={cert.src}
              alt={cert.alt}
              className="img-fluid"
              height={200}
              width={200}
            />
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CertificationsSection;
