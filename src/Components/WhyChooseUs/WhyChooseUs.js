import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import { useTranslation } from "react-i18next";
import "./whyChooseUs.css";
import whyChooseUs1 from "../../assets/images/whyChooseUs1.png";
import whyChooseUs2 from "../../assets/images/whyChooseUs2.png";
import whyChooseUs3 from "../../assets/images/whyChooseUs3.png";
import whyChooseUs4 from "../../assets/images/whyChooseUs4.png";
import whyChooseUs5 from "../../assets/images/whyChooseUs5.png";
import { Leaf, Recycle, Heart } from "lucide-react";
import { motion } from "framer-motion";

const WhyChooseUs = () => {
  const { t } = useTranslation();

  const scrollVariantsUp = {
    animate: {
      y: ["0%", "-100%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  };

  const scrollVariantsDown = {
    animate: {
      y: ["-100%", "0%"],
      transition: {
        repeat: Infinity,
        repeatType: "loop",
        duration: 5,
        ease: "linear",
      },
    },
  };

  return (
    <Container fluid className="leather-info-section">
      <Row className="justify-content-between">
        <Col lg={7} className="info-section mt-4">
          <p className="why-choose-title m-0">{t("whyChooseUs")}</p>{" "}
          <p className="why-choose-us-desc">{t("whyChooseUsDesc")}</p>{" "}
          <div className="d-flex gap-2 align-items-center">
            <div className="mt-3">
              <Leaf size={20} />
            </div>
            <p className="why-choose-titles mb-0 pt-3 me-2">
              {t("ecoFriendly")}
            </p>
          </div>
          <p className="why-choose-us-desc">{t("ecoFriendlyDesc")}</p>{" "}
          <div className="d-flex gap-2 align-items-center">
            <div className="mt-3">
              <Recycle size={20} />
            </div>
            <p className="why-choose-titles m-0 pt-3">{t("sustainable")}</p>{" "}
          </div>
          <p className="why-choose-us-desc">{t("sustainableDesc")}</p>{" "}
          <div className="d-flex gap-2 align-items-center">
            <div className="mt-3">
              <Heart size={20} />
            </div>
            <p className="why-choose-titles m-0 pt-3">{t("crueltyFree")}</p>{" "}
          </div>
          <p className="why-choose-us-desc">{t("crueltyFreeDesc")}</p>{" "}
        </Col>
        <Col lg={5} className="image-section">
          <div className="image-column-first  d-lg-column d-hidden">
            <motion.div
              className="d-flex flex-row flex-lg-column image-scroll up-scroll"
              variants={scrollVariantsUp}
              animate="animate"
            >
              <img
                src={whyChooseUs1}
                alt="Wheat"
                className="why-choose-us-img mb-2"
              />
              <img
                src={whyChooseUs2}
                alt="Gloves"
                className="why-choose-us-img mb-2"
              />
              <img
                src={whyChooseUs3}
                alt="Goat"
                className="why-choose-us-img mb-2"
              />
            </motion.div>
          </div>
          <div className="image-column column-two d-lg-block d-hidden">
            <motion.div
              className="image-scroll down-scroll gap-2 gap-lg-0 d-flex flex-row flex-lg-column overflow-visible"
              variants={scrollVariantsDown}
              animate="animate"
            >
              <img
                src={whyChooseUs4}
                alt="Wallet"
                className="why-choose-us-img mb-2"
              />
              <img
                src={whyChooseUs5}
                alt="Craft"
                className="why-choose-us-img mb-2"
              />
              <img
                src={whyChooseUs2}
                alt="Bag"
                className="why-choose-us-img d-lg-block d-hidden mb-2"
              />
            </motion.div>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default WhyChooseUs;
