import React from "react";
import FeatureCard from "./FeatureCard";

const FeatureList = () => {
  const features = [
    {
      title: "Centralized Application Management",
      desc: "Say goodbye to scattered applications. Zenpply brings all your job applications into one centralized platform for easy management.",
    },
    {
      title: "Smart Application Submission",
      desc: "Our AI-driven system intelligently submits your applications to the right opportunities, increasing your chances of success.",
    },
    {
      title: "Time-Efficient Process",
      desc: "Save valuable time by eliminating repetitive tasks. Zenpply automates the tedious aspects of the job application process, allowing you to invest your time where it matters.",
    },
    {
      title: "Enhanced Job Search Visibility",
      desc: "Stand out in the crowded job market. Zenpply ensures your applications receive the attention they deserve, enhancing your overall job search visibility.",
    },
  ];

  return (
    <div className="py-[80px] grid grid-cols-1 max-w-[1000px] items-center mx-auto space-y-[40px]">
      {features.map(({ title, desc }, index) => (
        <FeatureCard key={index} title={title} desc={desc} />
      ))}
    </div>
  );
};

export default FeatureList;
