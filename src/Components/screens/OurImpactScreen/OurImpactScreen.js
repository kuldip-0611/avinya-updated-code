import React from "react";
import HeaderInfo from "../../common/HeaderInfo";
import "./ourImpactScreen.css";
import ourImactBg from "../../../assets/images/ourImpact.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import impactImage1 from "../../../assets/images/impactImage1.png";
import impactImage2 from "../../../assets/images/impactImage2.png";
import whyChooseUs1 from "../../../assets/images/whyChooseUs1.png";
import whyChooseUs2 from "../../../assets/images/whyChooseUs2.png";
import whyChooseUs3 from "../../../assets/images/whyChooseUs3.png";
import whyChooseUs4 from "../../../assets/images/whyChooseUs4.png";
import whyChooseUs5 from "../../../assets/images/whyChooseUs5.png";
import Footer from "../../Footer/Footer";
import ImpactCard from "../../ImpactCard/ImpactCard";
import Tshirt from "../../../assets/icons/Tshirt";
import Polutions from "../../../assets/icons/Polutions";
import ProfileIcon from "../../../assets/icons/ProfileIcon";
import Internet from "../../../assets/icons/Internet";

const OurImpactScreen = () => {
  const images = [whyChooseUs1, whyChooseUs2, whyChooseUs3, whyChooseUs4];
  const impactData = [
    {
      icon: <Polutions />,
      title: "Reducing Air Pollution and Greenhouse Gases",
      description:
        "By transforming straw waste into leather, we prevent harmful emissions, reducing pollution and contributing to climate change mitigation.",
    },
    {
      icon: <ProfileIcon />,
      title: "Supporting Local Farming Communities",
      description:
        "We partner with farmers, turning waste into income, empowering them, and promoting sustainable agricultural practices globally.",
    },
    {
      icon: <Internet />,
      title: "Promoting a Circular Economy",
      description:
        "Our eco-friendly process turns waste into valuable products, reducing landfill and encouraging resource sustainability across industries.",
    },
    {
      icon: <Tshirt />,
      title: "Providing a Cruelty-Free Leather Alternative",
      description:
        "Our plant-based leather reduces the demand for animal-based products, offering a humane, ethical, and sustainable material alternative.",
    },
  ];
  return (
    <>
      <HeaderInfo
        title={"Our Impact"}
        description={
          "By converting agricultural waste into cruelty-free leather, we reduce pollution, support local farmers, and promote a circular economy."
        }
        bgImage={ourImactBg}
      />
      <Container fluid className="mt-1 avinya-information-container">
        <p className="pt-lg-5 pt-md-2 text-center certification-heading">
          Making a Difference, Together
        </p>
        <p className="text-center our-impact-description">
          At Avinya, our impact goes beyond producing materials—it's about
          changing how <br /> we think about waste, resources, and
          sustainability.
        </p>

        <Row className="mt-lg-5 mt-md-3 justify-content-center">
          <Col lg={11}>
            <Row>
              {impactData.map((item, index) => (
                <Col xs={12} lg={6} key={index}>
                  <ImpactCard
                    icon={item.icon}
                    title={item.title}
                    description={item.description}
                  />
                </Col>
              ))}
            </Row>
          </Col>
        </Row>
      </Container>
      <Container fluid className="mt-1 pb-4 pt-5 avinya-information-container">
        <Row className="justify-content-between mx-auto">
          <Col md={3} xs={12} className="p-0 ">
            <Image
              src={impactImage1}
              alt="Sustainable Material"
              fluid
              className="h-100 w-100"
            />
          </Col>
          <Col md={9} xs={12} className="cutom-impact-right p-0 ps-md-2">
            <Image
              src={impactImage2}
              alt="Crafting Process"
              fluid
              className="h-100 w-100"
            />
          </Col>
        </Row>

        <Row className="mt-3 justify-content-center">
          <Col sm={12} md={10}>
            <p className="our-impact-title text-center">
              The Future of Sustainable Materials
            </p>
            <p className="our-impact-description text-center">
              We are constantly innovating to enhance the quality and
              sustainability of our materials. As we grow, we're exploring new
              agricultural waste sources and improving our production techniques
              to create an even more eco-friendly product. Our ultimate goal is
              to revolutionize industries by offering sustainable, cruelty-free
              materials that meet the demands of today’s consumers while
              protecting the environment.
            </p>
          </Col>
        </Row>
      </Container>

      <Container fluid className="mt-4 mb-1">
        <Row className="g-3 justify-content-center pb-2 bg-light border rounded-4">
          {images.map((imgSrc, idx) => (
            <Col
              key={idx}
              md={idx === 0 || idx === 4 ? 2 : idx === 3 || idx === 7 ? 2 : 4}
              sm={6}
              xs={12}
              className=""
            >
              <div
                className={`image-wrapper p-0 h-100 w-100 ${
                  idx === 0 || idx === 4 ? "custom-radius" : ""
                }`}
              >
                <Image
                  src={imgSrc}
                  alt={`image-${idx}`}
                  fluid
                  className={`h-100 w-100 p-0`}
                />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default OurImpactScreen;
