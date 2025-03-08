import React from "react";
import "./ourImpact.css";
import ricebran from "../../assets/images/ricebran.png";
import water from "../../assets/images/water.png";
import leather from "../../assets/images/leather.png";
import goat from "../../assets/images/goat.png";
import industries from "../../assets/images/industries.png";
import impact from "../../assets/images/impact.png";
import crocodile from "../../assets/images/crocodile.png";
import impactBg from "../../assets/images/impactBg.jpg";
import {
  FaHandHoldingWater,
  FaIndustry,
  FaRecycle,
  FaLeaf,
  FaFish,
  FaTree,
} from "react-icons/fa";

const OurImpactSection = () => {
  const sdgIcons = [
    <img
      src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-06.jpg"
      alt="CLEAN WATER AND SANITATION"
      className="w-12 h-12 object-cover"
    />,
    <img
      src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-09.jpg"
      alt="INDUSTRY, INNOVATION, AND INFRASTRUCTURE"
      className="w-12 h-12 object-cover"
    />,
    <img
      src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-12.jpg"
      alt="RESPONSIBLE CONSUMPTION AND PRODUCTION"
      className="w-12 h-12 object-cover"
    />,
    <img
      src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-13.jpg"
      alt="CLIMATE ACTION"
      className="w-12 h-12 object-cover"
    />,
    <img
      src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-14.jpg"
      alt="LIFE BELOW WATER"
      className="w-12 h-12 object-cover"
    />,
    <img
      src="https://sdgs.un.org/sites/default/files/goals/E_SDG_Icons-15.jpg"
      alt="LIFE ON LAND"
      className="w-12 h-12 object-cover"
    />,
  ];

  const stats = [
    {
      value: "95 %",
      left: "16%",
      top: "17%",
      mdTop: "15%",
      smTop: "10%",
      mdLeft: "15%",
      smLeft: "0%",
      belowSmLeft: "10%",
      below500Left: "6%",
      below500Top: "18%",
      bg: ricebran,
      hoverText: "95 % reduction in water",
    },

    {
      value: "100 %",
      left: "14%",
      top: "49%",
      mdTop: "33%",
      smTop: "26%",
      mdLeft: "2%",
      smLeft: "15%",
      belowSmLeft: "23%",
      below500Left: "20%",
      below500Top: "34%",
      bg: leather,
      hoverText: "we can reduce 35% pollution due to utilized this waste.",
    },
    {
      value: "350 m",
      left: "23%",
      top: "35%",
      mdTop: "40%",
      smTop: "43%",
      mdLeft: "16%",
      smLeft: "1%",
      belowSmLeft: "8%",
      below500Left: "4%",
      below500Top: "48%",
      bg: leather,
      hoverText:
        "we use 350 million tons of aggricalture waste as raw material ",
    },
    {
      value: "35 %",
      left: "23%",
      top: "63%",
      mdTop: "59%",
      smTop: "61%",
      mdLeft: "5%",
      smLeft: "15%",
      belowSmLeft: "23%",
      belowSmTop: "55%",
      below500Top: "60%",
      bg: goat,
      below500Left: "24%",
      hoverText: "100% reduction in toxic chemical",
    },
    {
      value: "10 k",
      left: "25%",
      top: "5%",
      mdTop: "8%",
      smTop: "-5%",
      mdLeft: "2%",
      smLeft: "16%",
      belowSmLeft: "24%",
      bg: industries,
      below500Left: "20%",
      below500Top: "2%",
      hoverText: "farmers can generate average 10 k additional income ",
    },
    {
      value: "40 %",
      right: "12%",
      top: "5%",
      mdTop: "8%",
      smTop: "0%",
      mdRight: "10%",
      smRight: "-7%",
      belowSmRight: "10%",
      belowSmTop: "0%",
      bg: goat,
      below500Right: "-2%",
      hoverText: "our material is 30-40% economical than our competitor.",
    },
    {
      value: "5",
      right: "20%",
      top: "22%",
      mdTop: "16%",
      smTop: "18%",
      mdRight: "-3%",
      smRight: "4%",
      belowSmRight: "-2%",
      bg: ricebran,
      belowSmTop: "17%",
      below500Right: "8%",
      below500Top: "18%",
      hoverText: "our product is aligned with 5 SDG gols of UN.",
    },
    {
      value: "1 B",
      right: "13%",
      top: "41%",
      mdTop: "33%",
      smTop: "36%",
      mdRight: "7%",
      smRight: "-7%",
      belowSmRight: "8%",
      bg: water,
      belowSmTop: "34%",
      below500Right: "9%",
      below500Top: "56%",
      hoverText:
        "over one billion animals are killed per year to make leather. we can reduced them.",
    },
    {
      value: "96 %",
      right: "22%",
      top: "57%",
      mdTop: "47%",
      smTop: "51%",
      mdRight: "-3%",
      smRight: "5%",
      belowSmRight: "0%",
      bg: crocodile,
      belowSmTop: "50%",
      below500Right: "-2%",
      below500Top: "37%",
      hoverText: "96% reduction in carbon",
    },
  ];

  return (
    <div
      className="container-fluid py-5"
      style={{
        backgroundImage: `url(${impactBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="container">
        <div className="text-center mb-3">
          <h2 className="certification-heading text-center impact-title display-4 fw-bold mb-4">
            Avinya Impact
          </h2>
          <p
            className="lead impact-description text-center text-muted mx-auto"
            style={{ maxWidth: "800px" }}
          >
            By transforming agricultural waste into sustainable, cruelty-free
            leather, we reduce air pollution, prevent harmful emissions, and
            support local farming communities.
          </p>
        </div>

        <div className="d-flex flex-wrap justify-content-center mb-5 gap-4 ">
          {sdgIcons.map((image, index) => (
            <div key={index} className="sdg-image ">
              {image}
            </div>
          ))}
        </div>

        <div
          className="position-relative avinya-impact-container"
          style={{ height: "380px" }}
        >
          <div className="center-image">
            <img src={impact} alt="Sustainable Leather" className="img-fluid" />
          </div>

          {stats.map((stat, index) => (
            <div
              key={index}
              className="stat-bubble  position-absolute"
              style={{
                top:
                  window.innerWidth > 992
                    ? stat.top
                    : window.innerWidth > 768
                    ? stat.mdTop
                    : window.innerWidth > 600
                    ? stat.smTop
                    : window.innerWidth > 500
                    ? stat.belowSmTop || stat.smTop
                    : stat.below500Top || stat.smTop,
                left:
                  window.innerWidth > 992
                    ? stat.left
                    : window.innerWidth > 768
                    ? stat.mdLeft
                    : window.innerWidth > 600
                    ? stat.smLeft
                    : window.innerWidth > 500
                    ? stat.belowSmLeft
                    : stat.below500Left,
                right:
                  window.innerWidth > 992
                    ? stat.right
                    : window.innerWidth > 768
                    ? stat.mdRight
                    : window.innerWidth > 600
                    ? stat.smRight
                    : window.innerWidth > 500
                    ? stat.belowSmRight
                    : stat.below500Right,
                backgroundImage: `url(${stat.bg})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                position: "absolute",
              }}
            >
              <span className="fw-bold text-white">{stat.value}</span>
              <div
                className="hover-text position-absolute text-white text-center rounded p-1"
                style={{
                  backgroundColor: "#466645",
                  width: "200px",
                  whiteSpace: "normal",
                  wordWrap: "break-word",
                  overflowWrap: "break-word",
                  zIndex: 1000,
                }}
              >
                <span className="text-light">{stat.hoverText}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurImpactSection;
