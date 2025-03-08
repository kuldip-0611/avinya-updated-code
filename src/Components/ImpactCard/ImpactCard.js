import React from "react";
import "./impactCard.css";

const ImpactCard = ({ icon, title, description }) => {
  return (
    <div className="impact-card">
      <div className="d-flex flex-column justify-content-start align-items-start">
        {icon}
        <div className="content">
          <h4 className="impact-title">{title}</h4>
          <p className="impact-description m-0">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default ImpactCard;
