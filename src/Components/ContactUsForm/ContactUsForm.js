import React from "react";
import { Form, Button, Col, Row } from "react-bootstrap";
import { Formik } from "formik";
import * as Yup from "yup";
import "bootstrap/dist/css/bootstrap.min.css";
import "./contactUsForm.css";

const validationSchema = Yup.object().shape({
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  phoneNumber: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
  agree: Yup.boolean().oneOf([true], "You must accept the privacy policy"),
});

const ContactUsForm = () => {
  return (
    <Formik
      initialValues={{
        firstName: "",
        lastName: "",
        email: "",
        phoneNumber: "",
        message: "",
        agree: false,
      }}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const subject = encodeURIComponent("Contact Form Submission");
        const body = encodeURIComponent(`
    First Name: ${values.firstName}
    Last Name: ${values.lastName}
    Email: ${values.email}
    Phone Number: ${values.phoneNumber}
    Message: ${values.message}
  `);

        window.location.href = `mailto:contact@avinya.com?subject=${subject}&body=${body}`;
      }}
    >
      {({ handleSubmit, handleChange, values, touched, errors }) => (
        <Form noValidate onSubmit={handleSubmit}>
          <Row className="mb-4">
            <Form.Group as={Col} md="6" controlId="firstName">
              <Form.Label>First name</Form.Label>
              <Form.Control
                type="text"
                name="firstName"
                value={values.firstName}
                onChange={handleChange}
                isInvalid={touched.firstName && !!errors.firstName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.firstName}
              </Form.Control.Feedback>
            </Form.Group>

            <Form.Group as={Col} md="6" controlId="lastName">
              <Form.Label>Last name</Form.Label>
              <Form.Control
                type="text"
                name="lastName"
                value={values.lastName}
                onChange={handleChange}
                isInvalid={touched.lastName && !!errors.lastName}
              />
              <Form.Control.Feedback type="invalid">
                {errors.lastName}
              </Form.Control.Feedback>
            </Form.Group>
          </Row>

          <Form.Group className="mb-4" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              value={values.email}
              onChange={handleChange}
              isInvalid={touched.email && !!errors.email}
            />
            <Form.Control.Feedback type="invalid">
              {errors.email}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-4" controlId="phoneNumber">
            <Form.Label>Phone number</Form.Label>
            <Form.Control
              type="text"
              name="phoneNumber"
              value={values.phoneNumber}
              onChange={handleChange}
              isInvalid={touched.phoneNumber && !!errors.phoneNumber}
            />
            <Form.Control.Feedback type="invalid">
              {errors.phoneNumber}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="message">
            <Form.Label>Message</Form.Label>
            <Form.Control
              as="textarea"
              name="message"
              rows={3}
              value={values.message}
              onChange={handleChange}
              isInvalid={touched.message && !!errors.message}
            />
            <Form.Control.Feedback type="invalid">
              {errors.message}
            </Form.Control.Feedback>
          </Form.Group>

          <Form.Group className="mb-3" controlId="agree">
            <Form.Check
              type="checkbox"
              name="agree"
              label="You agree to our friendly privacy policy."
              value={values.agree}
              onChange={handleChange}
              isInvalid={touched.agree && !!errors.agree}
            />
            <Form.Control.Feedback type="invalid">
              {errors.agree}
            </Form.Control.Feedback>
          </Form.Group>

          <Button
            className="submit-button w-100 mt-3"
            variant="submit"
            type="submit"
          >
            <p className="submit-button-text m-0">Send message</p>
          </Button>
        </Form>
      )}
    </Formik>
  );
};

export default ContactUsForm;
