import React, { useState } from "react";
import "./faq.css";
import { Button, Collapse } from "react-bootstrap";
import Plus from "../../assets/icons/Plus";
import Collaps from "../../assets/icons/Collaps";
import Reactangle from "../../assets/icons/Reactangle";

const Faq = ({ title, description }) => {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-section mb-3">
      <div className="d-flex justify-content-between align-items-start">
        <div className="d-flex justify-content-start align-items-center gap-2">
          <Reactangle />
          <p className="faq-title m-0 p-0">{title}</p>
        </div>
        <Button
          variant="link"
          onClick={() => setOpen(!open)}
          aria-controls="faq-description"
          aria-expanded={open}
        >
          {!open ? <Plus /> : <Collaps />}
        </Button>
      </div>
      <Collapse in={open}>
        <div>{description}</div>
      </Collapse>
    </div>
  );
};

export default Faq;
