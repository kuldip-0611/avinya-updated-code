import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./Components/screens/HomeScreen/Home";
import OurMaterialScreen from "./Components/screens/OurMaterialScreen/OurMaterialScreen";
import "../src/languages/index";
import OurImpactScreen from "./Components/screens/OurImpactScreen/OurImpactScreen";
import FaqScreen from "./Components/screens/FaqScreen/FaqScreen";
import AboutUsScreen from "./Components/screens/AboutUs/AboutUs";
import PrivacyPolicyScreen from "./Components/screens/PrivacyPolicyScreen/PrivacyPolicyScreen";
import ContactUsScreen from "./Components/screens/ContactUsScreen/ContactUsScreen";
import Blog from "./Components/BlogScreen/Blog";
import BlogDetail from "./Components/PostDetailScreen/PostDetailScreen";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/our-material" element={<OurMaterialScreen />} />
          <Route path="/our-impact" element={<OurImpactScreen />} />
          <Route path="/faq" element={<FaqScreen />} />
          <Route path="/about-us" element={<AboutUsScreen />} />
          <Route path="/privacy-policy" element={<PrivacyPolicyScreen />} />
          <Route path="/contact-us" element={<ContactUsScreen />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/post/:id" element={<BlogDetail />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
