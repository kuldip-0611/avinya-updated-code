import React from "react";
import { Col, Container, Image, Row } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./ourMaterial.css";
import HeaderInfo from "../../common/HeaderInfo";
import ourMaterialBg from "../../../assets/images/ourMaterial.png";
import materialPurse from "../../../assets/images/materialPurse.png";
import materialShowing from "../../../assets/images/materialShowing.png";
import rawMaterial1 from "../../../assets/images/rowMaterial1.png";
import rawMaterial2 from "../../../assets/images/rowMaterial2.png";
import rawMaterialProduct from "../../../assets/images/rawMaterialProduct.png";
import ArrowUpIcon from "../../../assets/icons/ArrowUpIcon";
import Footer from "../../Footer/Footer";

const OurMaterialScreen = () => {
  const { t } = useTranslation();

  return (
    <>
      <HeaderInfo
        title={t("our_material.title")}
        description={t("our_material.description")}
        bgImage={ourMaterialBg}
      />
      <div className="bg-light border rounded-4 ps-lg-5 pe-lg-5 mt-1">
        <Container className="text-center my-5 ps-lg-5 pe-lg-5 ps-md-2 pe-md-2">
          <p className="our-material-product-title">Material Composition</p>
          <p className="our-material-product-description mb-5">
            Our innovative process begins with agricultural byproducts—wheat and
            rice straw, materials that are often burned or left to decompose,
            contributing to pollution and greenhouse gas emissions. Rather than
            letting this waste go unused, we collect and transform it into a
            durable, leather-like material that rivals traditional leather in
            quality and functionality.
          </p>
        </Container>
        <Row className="justify-content-center align-items-center g-5 ps-3 pe-3">
          <Col
            xs={12}
            md={6}
            className="mb-3 order-md-2 d-flex justify-content-start"
          >
            <Image
              src={rawMaterial1}
              alt="Wheat"
              fluid
              className="material-image"
            />
          </Col>

          <Col
            xs={12}
            md={6}
            className="mb-3 order-md-1 d-flex justify-content-end"
          >
            <Image
              src={rawMaterial2}
              alt="Hay"
              fluid
              className="material-image"
            />
          </Col>
        </Row>

        <Row className="justify-content-center align-items-center position-relative">
          <Col xs={12} md={6} className="text-center">
            <Col lg={12} className="ps-5 pe-5 justify-contemt-center">
              <div className="connecting-line" />
              <div className="vertical-line" />
            </Col>
            <Col lg={12} className="our-material-transformation-container">
              <div className="d-flex flex-column flex-lg-row ps-2 pe-2 align-items-start justify-content-center">
                <div className="d-flex flex-column flex-lg-row align-items-start w-100">
                  <Image
                    src={rawMaterialProduct}
                    alt="Avinya"
                    fluid
                    className="material-image"
                  />
                  <div className="ms-md-3 mt-3 mt-md-0 avinya-material-composition justify-content-center m-auto">
                    <div className="d-flex flex-column  w-100 justify-content-lg-start">
                      <ArrowUpIcon />
                      <p className="avinya-image-description">
                        Transforming agricultural waste into high-quality,
                        eco-friendly, and sustainable pure leather alternatives.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Col>
          </Col>
        </Row>

        <Row className="justify-content-center mt-4">
          <Col md={8}>
            <p className="our-material-product-description">
              Wheat and rice are some of the most widely cultivated crops
              globally, generating millions of tons of leftover straw each year.
              Typically, this straw is considered waste and is burned, causing
              serious air pollution and contributing to climate change.
            </p>
          </Col>
        </Row>
      </div>
      <div
        className="our-material-purse mt-1"
        style={{ backgroundImage: `url(${materialPurse})` }}
      >
        <Row className="h-100 justify-content-center align-items-center text-center">
          <Col md={7}>
            <p className="text-white our-material-purse-title">
              {t("our_material.purse_title")}
            </p>
          </Col>
        </Row>
      </div>
      <Container fluid className="bg-light rounded-4 mt-1 pb-5 pt-5 mb-1">
        <div className="our-material-product-show">
          <Row className="h-100 justify-content-center align-items-center text-center">
            <img
              src={materialShowing}
              className="our-material-product-image"
              alt="our-material-produt"
            />
            <Col md={11}>
              <p className="our-material-product-title">
                {t("our_material.product_title")}
              </p>
              <p className="our-material-product-description">
                {t("our_material.product_description")}{" "}
              </p>
            </Col>
          </Row>
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default OurMaterialScreen;
