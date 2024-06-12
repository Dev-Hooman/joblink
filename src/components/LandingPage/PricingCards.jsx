import React from "react";
import PricingCard from "./PricingCard";

const PricingCards = () => {
  const packages = [
    {
      name: "Starter",
      desc: "Lorem Ipsum",
      price: "Free",
      duration: null,
      features: ["Free 3 Jobs at Linkedin", "Lorem Ipsum", "Lorem Ipsum"],
      keyFeatures: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      name: "Basic Package",
      desc: "Lorem Ipsum",
      price: "$7.99",
      duration: "Week",
      features: [
        "500 Jobs at Indeed/Linkedin",
        "Billed Monthly",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      keyFeatures: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
    {
      name: "Premium Package",
      desc: "Lorem Ipsum",
      price: "$11.99",
      duration: "Week",
      features: [
        "1000 Jobs at Indeed/Linkedin",
        "Billed Monthly",
        "Lorem Ipsum",
        "Lorem Ipsum",
      ],
      keyFeatures: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
    },
  ];

  return (
    <div className="pricing-card-layout">
      {packages.map(
        ({ name, price, duration, features, desc, keyFeatures }, index) => (
          <PricingCard
            key={index}
            name={name}
            price={price}
            duration={duration}
            features={features}
            desc={desc}
            keyFeatures={keyFeatures}
            index={index}
          />
        )
      )}
    </div>
  );
};

export default PricingCards;
