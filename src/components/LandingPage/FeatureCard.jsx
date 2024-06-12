import React from "react";

const FeatureCard = ({title, desc}) => {
  return (
    <div className="feature-card">
      <h1>{title}</h1>
      <p>
        {desc}
      </p>
    </div>
  );
};

export default FeatureCard;
