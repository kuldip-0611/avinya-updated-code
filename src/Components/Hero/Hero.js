import React from "react";
import "./hero.css";
import heroImage from "../../assets/images/hero.png";
import NavbarHeader from "../Navbar/Navbar";
import logo from "../../assets/images/new_avinya_logo.png";

export const Hero = () => {
  return (
    <div
      className="hero-container"
      style={{
        backgroundImage: `url(${heroImage})`,
      }}
    >
      <div className="navbar-wrapper">
        <NavbarHeader />
      </div>
      <div className="hero-content">
        <img
          src={logo}
          height={300}
          max-width={600}
          alt="Logo"
          className="mb-2 hero-logo"
        />
      </div>
    </div>
  );
};
