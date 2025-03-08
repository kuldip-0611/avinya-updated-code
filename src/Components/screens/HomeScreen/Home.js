import React from "react";
import Footer from "../../Footer/Footer";
import CertificationsSection from "../../CertificateSection/Cretificate";
import ProgressSection from "../../ProcessSection/ProcessSection";
import OurProgress from "../../OurProgress/OurProgress";
import WhyChooseUs from "../../WhyChooseUs/WhyChooseUs";
import OurProducts from "../../OurProducts/OurProducts";
import { Hero } from "../../Hero/Hero";
import OurImpactSection from "../../OurImpact/OurImpact";

const Home = () => {
  return (
    <>
      {/* <div className="navbar-wrapper">
        <NavbarHeader />
      </div> */}
      <Hero />
      <ProgressSection />
      <OurProgress />
      <OurProducts />
      <WhyChooseUs />
      <OurImpactSection />
      <CertificationsSection />
      <Footer />
    </>
  );
};

export default Home;
