import React from "react";
import HeaderInfo from "../../common/HeaderInfo";
import aboutUsBg from "../../../assets/images/aboutUs.png";
import { Col, Container, Image, Row } from "react-bootstrap";
import "./aboutUs.css";
import storyImage1 from "../../../assets/images/storyImage1.png";
import storyImage2 from "../../../assets/images/storyImage2.png";
import mananImage from "../../../assets/images/mananImage.jpg";
import Footer from "../../Footer/Footer";
import jenilImage from "../../../assets/images/jenil.png";

const AboutUsScreen = () => {
  const teamMembers = [
    {
      name: "Manan Vyas",
      title: "Co-founder at Avinya",
      image: mananImage,
    },
    {
      name: "Jenil Gandhi",
      title: "Co-founder at Avinya",
      image: jenilImage,
    },
  ];
  const achievements = [
    {
      src: require("../../../assets/images/new_achievement.jpg"),
      caption: "Won 1st Prize in CII Young Indians <br /> Innovation challenge",
    },
    {
      src: require("../../../assets/images/achievement2.png"),
      caption: `Got change makers award from <b>Mr. Suresh Prabhu</b> from civil aviation railways`,
    },
    {
      src: require("../../../assets/images/achievement3.png"),
      caption: "Featured on <b> Ahmedabad Mirror </b>",
    },
  ];
  return (
    <>
      <HeaderInfo title={"About Us"} bgImage={aboutUsBg} />
      <Container fluid className="team-members-container mt-1">
        <p className="heading-title text-center">Our Founders</p>
        <Row className="justify-content-center">
          {teamMembers.map((member, index) => (
            <Col xs={12} md={6} lg={4} className="mb-4" key={index}>
              <div className="team-card position-relative">
                <Image
                  src={member.image}
                  alt={member.name}
                  className="card-image object-fill"
                />
                <div className="overlay">
                  <p className="team-members-title p-0 m-0">{member.name}</p>
                  <p className="team-members-designation p-0 m-0">
                    {member.title}
                  </p>
                </div>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <Container fluid className="story-container mt-1 w-100">
        <p className="heading-title pb-1 m-0">Our Story</p>
        <p className="heading-description pb-3 m-0">
          Born from a shared belief in innovation and sustainability, Avinya was
          created to tackle the environmental and ethical issues associated with
          traditional leather. By upcycling wheat and rice straw, agricultural
          waste that typically contributes to stubble burning, we are creating
          premium, cruelty-free materials.
        </p>

        <Image src={storyImage1} alt="story-1" className="w-100" />

        <p className="heading-description  pb-3 pt-3 m-0">
          We’ve partnered with the Central Leather Research Institute (CLRI),
          India’s premier leather research institute, to refine and perfect our
          innovative plant-based leather. Their expertise has enabled us to
          bring durable, high-quality, and eco-friendly materials to market.
        </p>
        <Image src={storyImage2} alt="story-2" />
        <p className="heading-title mt-4">Our Mission</p>
        <p className="heading-description pb-3 m-0">
          We aim to revolutionize the leather industry with eco-conscious
          solutions that protect the planet and provide consumers with
          sustainable luxury.
        </p>
      </Container>
      <Container fluid className="achievement-container mt-1 mb-1">
        <p className="heading-title text-center mb-5">Our Achievements</p>
        <Row className="text-center justify-content-between align-items-stretch h-100">
          {achievements.map((achievement, index) => (
            <Col
              xs={12}
              md={4}
              className="d-flex flex-column flex-1 justify-content-between"
              key={index}
            >
              <div className="h-100">
                <Image
                  src={achievement.src}
                  fluid
                  className={`w-100 ${index === 1 ? "rounded-3" : ""}`}
                  style={{
                    objectFit: "cover",
                    height: "100%",
                    borderRadius: "8px",
                  }}
                />
              </div>
              <p
                className="achievement-description mt-3 pb-3 mb-0"
                dangerouslySetInnerHTML={{ __html: achievement.caption }}
              />
            </Col>
          ))}
        </Row>
      </Container>
      <Footer />
    </>
  );
};

export default AboutUsScreen;
