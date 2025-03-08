// import { useState } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
// import NavDropdown from "react-bootstrap/NavDropdown";
// import { FiChevronDown } from "react-icons/fi";
// import LanguageIcon from "../../assets/icons/Language";
import { useTranslation } from "react-i18next";
import "./navbar.css";
// import { useLocation } from "react-router-dom";

const NavbarHeader = () => {
  const { t } = useTranslation();
  // const [selectedLanguage, setSelectedLanguage] = useState("EN");
  // const [selectedCurrency, setSelectedCurrency] = useState(t("currency.ind"));
  // const location = useLocation();
  // const handleLanguageSelect = (lang) => {
  //   setSelectedLanguage(lang);
  //   i18n.changeLanguage(lang.toLowerCase());
  // };

  // const handleCurrencySelect = (currency) => {
  //   setSelectedCurrency(currency);
  // };

  return (
    <Navbar expand="xl" className="navbar-custom">
      <Container fluid className="navbar-container">
        <Navbar.Brand href="/" className="navbar-brand-custom">
          {t("home")}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto nav-left text-center">
            {/* {location?.pathname === "/" && (
              <Nav.Link href="#process" className="nav-link-custom">
                {t("ourProcess")}
              </Nav.Link>
            )} */}
            <Nav.Link href="/our-material" className="nav-link-custom">
              {t("ourMaterial")}
            </Nav.Link>
            {/* {location?.pathname === "/" && (
              <Nav.Link href="#product" className="nav-link-custom">
                {t("ourProduct")}
              </Nav.Link>
            )} */}
            <Nav.Link href="/our-impact" className="nav-link-custom">
              {t("ourImpact")}
            </Nav.Link>
            <Nav.Link href="/about-us" className="nav-link-custom">
              {t("aboutUs")}
            </Nav.Link>
            <Nav.Link href="/faq" className="nav-link-custom">
              {t("faqs")}
            </Nav.Link>
            {/* <Nav.Link href="/privacy-policy" className="nav-link-custom">
              {t("policy")}
            </Nav.Link> */}
            <Nav.Link href="/contact-us" className="nav-link-custom">
              {t("contactUs")}
            </Nav.Link>
          </Nav>

          <Nav className="ms-auto nav-right">
            {/* <NavDropdown
              title={
                <div className="d-flex align-items-center justify-content-start">
                  <span className="text-light text-center">
                    {selectedCurrency}
                  </span>
                  <FiChevronDown className="ms-1" style={{ color: "white" }} />
                </div>
              }
              id="currency-dropdown"
              className="nav-dropdown-custom pe-2 me-2"
              onSelect={handleCurrencySelect}
            >
              <NavDropdown.Item
                eventKey={t("currency.ind")}
                className="text-center"
              >
                {t("currency.ind")}
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey={t("currency.usd")}
                className="text-center"
              >
                {t("currency.usd")}
              </NavDropdown.Item>
              <NavDropdown.Item
                eventKey={t("currency.eur")}
                className="text-center"
              >
                {t("currency.eur")}
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              title={
                <div className="d-flex align-items-center justify-content-start">
                  <LanguageIcon className="me-2" />
                  <span className="text-light text-center">
                    {selectedLanguage}
                  </span>
                  <FiChevronDown className="ms-1" style={{ color: "white" }} />
                </div>
              }
              id="language-dropdown"
              className="nav-dropdown-custom"
              onSelect={handleLanguageSelect}
            >
              <NavDropdown.Item eventKey="EN" className="text-center">
                {t("language.en")}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="FR" className="text-center">
                {t("language.fr")}
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="DE" className="text-center">
                {t("language.de")}
              </NavDropdown.Item>
            </NavDropdown> */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarHeader;
