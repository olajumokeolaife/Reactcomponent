import React from "react";


const CTASection = ({ text, subtext, buttonText }) => (
  <div className="cta-section">
    <h2>{text}</h2>
    <p>{subtext}</p>
    <button>{buttonText}</button>
  </div>
);

export default CTASection;
