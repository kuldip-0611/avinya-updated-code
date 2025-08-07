import React from "react";
import HeaderInfo from "../../common/HeaderInfo";
import privacyPolicyImage from "../../../assets/images/privacyPolicy.png";
import { Container } from "react-bootstrap";
import "./privacyPolicyScreen.css";
import Footer from "../../Footer/Footer";

const PrivacyPolicyScreen = () => {
  const orderDetails = [
    {
      title: "Website Orders",
      details: [
        "<p>Minimum Order Quantities (MOQs) Standard materials are available without an MOQ. Customization requires orders above 50 panels.</p>",
        "<p>Lead Time Orders are dispatched within 3–4 business days. Shipping typically takes 2–3 weeks in India and 4–6 weeks internationally.</p>",
        "<p>Product Variability There may be slight variations in color and material due to manual processes.</p>",
        "<p>Terms of Payment Full payment must be confirmed before order release. Contact us at <a class='email-link' href='mailto:connect@avinyaleather.com'>connect@avinya.com</a> for details.</p>",
      ],
    },
    {
      title: "Made-to-Order Terms",
      details: [
        "<p>Custom orders cannot be canceled or modified. Please send a sample for accurate matching.</p>",
        "<p>Updates to Terms We may update these Terms without prior notice. Continued use of the website indicates acceptance of the revised Terms.</p>",
      ],
    },
  ];

  const additionalDetails = [
    {
      title: "Information Collection",
      details: [
        "<p>We gather information to enhance our website, manage user activity, and respond to inquiries.</p>",
      ],
    },
    {
      title: "Contact Information",
      details: [
        "<p>When you inquire or subscribe to our newsletter, we collect your name and email address.</p>",
      ],
    },
    {
      title: "Automated Data Collection",
      details: [
        "<p>We use Cookies and Web Beacons for tracking user behavior and website performance.</p>",
      ],
    },
    {
      title: "Google Analytics",
      details: [
        "<p>We utilize Google Analytics for website analysis. Refer to their privacy policy for more details.</p>",
      ],
    },
    {
      title: "Site Usage Information",
      details: [
        "<p>We automatically record information like IP addresses and browser types to improve user experience.</p>",
        "<p>By using our website, you consent to our data practices as described. We may also use your information to communicate updates and promotions.</p>",
      ],
    },
  ];

  return (
    <>
      <HeaderInfo
        title={"Privacy & Policy"}
        description={
          "At Avinya, we prioritize your privacy. This Privacy Policy outlines how we collect and use your information."
        }
        bgImage={privacyPolicyImage}
      />
      <Container className="policy-info-container mt-1" fluid>
        <p className="heading-title m-0 pb-1">Privacy & Policy</p>
        <p className="heading-description m-0">
          {
            "At Avinya, we prioritize your privacy. This Privacy Policy outlines how we collect and use your information."
          }
        </p>
        <div className="pt-4">
          {additionalDetails.map((section, index) => (
            <div className="mb-4" key={index}>
              <p className="policy-title m-0 pb-2">{section.title}</p>
              {section.details.map((detail, idx) => (
                <div
                  key={idx}
                  dangerouslySetInnerHTML={{ __html: detail }}
                  className="policy-description"
                />
              ))}
            </div>
          ))}
        </div>
        <p className="heading-title m-0">Terms & Conditions</p>
        <p className="heading-description m-0">
          Please review these Terms and Conditions before using our website.
          Your use indicates acceptance.
        </p>
        {orderDetails.map((section, index) => (
          <div className="mt-4" key={index}>
            <p className="policy-title m-0 pb-2">{section.title}</p>
            {section.details.map((detail, idx) => (
              <div
                key={idx}
                dangerouslySetInnerHTML={{ __html: detail }}
                className="policy-description"
              />
            ))}
          </div>
        ))}
      </Container>
      <Footer />
    </>
  );
};

export default PrivacyPolicyScreen;
