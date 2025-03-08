import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import rixeBrand from "../../assets/images/riceBrand.png";
import outputLeather from "../../assets/images/outputleather.png";
import "./progressSection.css";
import ArrowRight from "../../assets/icons/ArrowRight";
import CurvedArrow from "../../assets/icons/CurvedArrow";
import { useTranslation } from "react-i18next";

const ProgressSection = () => {
  const { t } = useTranslation();

  return (
    <Container fluid className="progress-section">
      <Row className="progress-top-description">
        <div className="d-flex flex-row justify-content-end gap-3 content-with-arrow">
          <CurvedArrow />
          <p className="lead">{t("progressMessage")}</p>
        </div>
      </Row>
      <Row className="align-items-center justify-content-center">
        <Col xs={12} lg={5} className="mb-4 mb-md-0">
          <Image
            src={rixeBrand}
            fluid
            rounded
            alt="Field burning"
            className="w-100"
            style={{ maxHeight: "490px" }}
          />
        </Col>

        <Col xs={12} lg={1} className="text-center my-4 my-md-0">
          <ArrowRight />
        </Col>
        <Row className="progress-bottom-description">
          <div className="d-flex flex-row justify-content-end gap-3 content-with-arrow">
            <CurvedArrow />
            <p className="lead">{t("progressMessage")}</p>{" "}
          </div>
        </Row>
        <Col xs={12} lg={5} className="position-relative">
          <Image
            src={outputLeather}
            fluid
            rounded
            alt="Vegan leather production"
            className="w-100"
            style={{ maxHeight: "490px" }}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default ProgressSection;
