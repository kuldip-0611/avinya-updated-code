import React from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import swatchCard from "../../assets/images/swatchCard.png";
import productImage from "../../assets/images/products.png";
import material from "../../assets/images/material.png";
import { useTranslation } from "react-i18next";
import "./ourProducts.css";
import { useNavigate } from "react-router-dom";

const OurProducts = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  const products = [
    {
      title: t("products.0.title"),
      image: swatchCard,
    },
    {
      title: t("products.1.title"),
      image: material,
    },
    {
      title: t("products.2.title"),
      image: productImage,
    },
  ];

  return (
    <Container className="my-5 pt-4 ps-5 pe-5" id="product">
      <h2 className="our-product-title text-center mb-5">
        {t("ourProductTitle")}
      </h2>{" "}
      <Row>
        {products.map((product, index) => (
          <Col
            md={4}
            sm={6}
            xs={12}
            key={index}
            className="mb-4"
            onClick={() => navigate("/contact-us")}
          >
            <div className="product-card shadow-sm">
              <div className="image-container w-100">
                <Image
                  variant="top"
                  src={product.image}
                  className="product-image w-100"
                />
                <div className="overlay">
                  <p className="product-title text-start ps-2">
                    {product.title}
                  </p>
                </div>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default OurProducts;
