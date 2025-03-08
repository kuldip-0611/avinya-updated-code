import React from "react";
import Faq from "../../Faq/Faq";
// import Table from "../../Table/Table";
import "../../Faq/faq.css";
import HeaderInfo from "../../common/HeaderInfo";
import faqBg from "../../../assets/images/faq.png";
import { Container } from "react-bootstrap";
import "./faq.css";
import Footer from "../../Footer/Footer";

const FaqScreen = () => {
  // const headers = ["Technical Questions", "Banofi Panels"];
  // const data = [
  //   ["Size", "39 x 27 inches"],
  //   ["Sheet", "1 rectangular panel"],
  //   ["% bio based content", "80% bio based"],
  //   ["Use", "95% of panel usable"],
  //   [
  //     "Custom Colours",
  //     "Customization possible for MOQ above 50, Lead time: 4–6 weeks",
  //   ],
  //   ["Durability", "Shelf life 5+ years"],
  //   ["Shipping", "Shipping worldwide"],
  //   [
  //     "Shipping Fee",
  //     "Shipping fees vary based on destination, order amount, weight/dimensions of package.",
  //   ],
  // ];

  // const avinyaFeatures = [
  //   "Soft hand feel",
  //   "Water resistant",
  //   "Durable",
  //   "Anti-fungal",
  //   "Easy to clean",
  // ];

  const faqData = [
    {
      title: "What makes Avinya different from other companies?",
      description: (
        <p className="faq-description  m-0">
          Avinya creates high-quality plant-based vegan leather from
          agricultural waste, offering a sustainable, cruelty-free, and
          PU/PVC-free alternative. With roll-based production, full
          customization, we provide unmatched flexibility for brands.
        </p>
      ),
    },
    {
      title: "Is it 100% PU-PVC free and biodegradable?",
      description: (
        <p className="faq-description  m-0">
          Yes, Avinya Leather is 100% PU and PVC-free. While not fully
          biodegradable due to durability needs, it is highly sustainable and
          reduces environmental impact.
        </p>
      ),
    },
    {
      title: "How durable is your vegan leather?",
      description: (
        <p className="faq-description  m-0">
          Avinya Leather matches traditional leather in strength, abrasion
          resistance, and water resistance, ensuring long-lasting performance.
        </p>
      ),
    },
    {
      title: "What about thickness, color, and texture?",
      description: (
        <p className="faq-description  m-0">
          Available in thicknesses from 0.8mm to 2mm, Avinya Leather offers
          customizable colors and textures, from smooth to grainy finishes.
        </p>
      ),
    },
    {
      title: "In which products can we use your material?",
      description: (
        <p className="faq-description  m-0">
          Ideal for fashion and lifestyle goods like handbags, wallets, belts,
          shoes, and laptop bags, Avinya Leather combines durability with a
          premium, eco-friendly feel.
        </p>
      ),
    },
    {
      title: "Does Avinya have any certifications?",
      description: (
        <p className="faq-description  m-0">
          Yes, Avinya Leather is ISO 9001:2015 certified, PETA-Approved Vegan,
          and REACH compliant, ensuring high quality, sustainability, and safety
          standards.
        </p>
      ),
    },
    {
      title: "What is the size of your material?",
      description: (
        <p className="faq-description  m-0">
          Our plant-based leather comes in roll form with a standard width of
          150 cm and customizable lengths as needed.
        </p>
      ),
    },
    {
      title: "What’s the MOQ?",
      description: (
        <p className="faq-description  m-0">
          The minimum order quantity (MOQ) is 500 sqm.
        </p>
      ),
    },
    {
      title: "How can I get Avinya swatch cards?",
      description: (
        <p className="faq-description  m-0">
          You can request swatch cards by contacting us at [email/contact
          details].
        </p>
      ),
    },
    {
      title: "Is it possible to make customized material?",
      description: (
        // <ul>
        //   {avinyaFeatures.map((item, index) => (
        //     <li key={index} className="faq-features-text">
        //       {item}
        //     </li>
        //   ))}
        // </ul>
        <p className="faq-description  m-0">
          Yes, Avinya Leather offers full customization in color, texture,
          thickness, and backing to meet your specific requirements.
        </p>
      ),
    },
    // {
    //   title: "Are you certified?",
    //   description: (
    //     <p className="faq-description  m-0">
    //       Yes, Avinya is certified by REACH and GRS for its eco-friendly
    //       production processes.
    //     </p>
    //   ),
    // },
    // {
    //   title: "Do you ship worldwide?",
    //   description: (
    //     <p className="faq-description  m-0">
    //       Yes, Avinya ships globally, and shipping times vary between 2 to 5
    //       working days.
    //     </p>
    //   ),
    // },
    // {
    //   title: "How to use Avinya?",
    //   description: (
    //     <p className="faq-description  m-0">
    //       You can use Avinya’s vegan leather in a wide variety of applications,
    //       from fashion to upholstery.
    //     </p>
    //   ),
    // },
    // {
    //   title: "How to use vegan?",
    //   description: (
    //     <p className="faq-description  m-0">
    //       The vegan leather can be used in bags, shoes, upholstery, and more,
    //       offering both flexibility and style.
    //     </p>
    //   ),
    // },
    // {
    //   title: "Key Points to look for when you shop Avinya",
    //   description: (
    //     <p className="faq-description  m-0">
    //       Durability, sustainability, and certified eco-friendly production are
    //       key points to keep in mind when shopping Avinya’s vegan leather.
    //     </p>
    //   ),
    // },
    // {
    //   title: "How to use Avinya?",
    //   description: (
    //     <Table
    //       headers={["Avinya soft leather goods", "Avinya hard leather goods"]}
    //       data={[
    //         [
    //           "Best suited for products like bags, wallets, organisers, and other",
    //           "Best suited for products like stationaries, coasters, notebooks and other",
    //         ],
    //         ["Thickness: 0.8 mm-+0.1 mm", "Thickness: 0.9 mm-+0.1mm"],
    //         ["Backing: Cotton", "Backing: Recycled PET"],
    //       ]}
    //     />
    //   ),
    // },
    // {
    //   title: "Key Pointers to look for when you shop Avinya",
    //   description: <Table headers={headers} data={data} />,
    // },
    // {
    //   title: "How can I contact customer support?",
    //   description: (
    //     <p className="faq-description  m-0">
    //       You can contact customer support via email at support@avinya.com or
    //       call +123 456 789.
    //     </p>
    //   ),
    // },
  ];

  return (
    <>
      <HeaderInfo title={"Frequently asked questions"} bgImage={faqBg} />
      <Container>
        <div className="mt-5">
          <p className="text-center faq-main-title">FAQ’S</p>
          <p className="faq-main-description text-center">
            {
              " Explore our Frequently Asked Questions to learn more about our sustainable materials, production processes, environmental impact,and how you can contribute to a greener future."
            }
          </p>
        </div>
        <div className="mt-5">
          {faqData.map((faq, index) => (
            <Faq key={index} title={faq.title} description={faq.description} />
          ))}
        </div>
      </Container>
      <Footer />
    </>
  );
};

export default FaqScreen;
