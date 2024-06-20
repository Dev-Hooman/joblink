import React from "react";

const PricingCard = ({
  name,
  price,
  duration,
  features,
  desc,
  keyFeatures,
  index,
}) => {
  const isEven = (index) => {
    return (index + 1) % 2 === 0;
  };

  return (
    <div
      className={`main pricing-card ${
        isEven(index)
          ? "even-card"
          : `odd-card ${
              index + 1 === 1 &&
              "rounded-[42px] lg:rounded-l-[42px] lg:rounded-r-none"
            }
            ${
              index + 1 === 3 &&
              "rounded-[42px] lg:rounded-r-[42px] lg:rounded-l-none"
            }`
      }`}
    >
      <h2 className="text-xl font-bold mb-4">{name}</h2>
      <p className="mb-4">{desc}</p>
      <div className="flex flex-row items-center mb-4 space-x-[10.94px]">
        <h3 className="text-4xl font-bold">{price}</h3>
        {price != "Free" && (
          <p className="font-thin text-[13px]">per {duration}</p>
        )}
      </div>
      <button className="btn">
        {price === "Free" ? "Sign Up, It's Free" : "Buy Now"}
      </button>
      <ul className="first-list">
        {features.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
      <hr />
      <h4 className="text-lg font-bold mb-2">Key Features</h4>
      <ul className="second-list">
        {keyFeatures.map((text, index) => (
          <li key={index}>{text}</li>
        ))}
      </ul>
    </div>
  );
};

export default PricingCard;
