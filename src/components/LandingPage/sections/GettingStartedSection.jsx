import React from "react";
import StepsCard from "../StepsCard";
import GlowCover from "../../../assets/bg-covers/glow-cover.png";
import StepImage from "../../../assets/misc/step-img.png";
import dashedLine from '../../../assets/misc/Line.png'

const GettingStartedSection = () => {
  const steps = [
    {
      title: "Install Zenpply's extension for your browser.",
      desc: "Install Zenpply's extension for your browser.",
      link: "/download-link",
      image: StepImage,
    },
    {
      title: "Create your Profile and Upload resume",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
      list: [
        "Lorem ipsum dolor sit amet, consectetur",
        "Lorem ipsum dolor sit amet",
        "Lorem ipsum dolor sit amet",
      ],
      image: StepImage,
    },
    {
      title: "Set search key words and answers",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus neque tincidunt nulla porttitor ultricies. Sed dapibus, elit quis bibendum suscipit",
      list: [
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus",
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. ",
        "Lorem ipsum dolor sit amet",
      ],
      image: StepImage,
    },
    {
      title: "Identify Job Opportunity",
      desc: "Zepply's AI identifies the top job opportunities on the market that are best suited for you and automatically send out job applications",
      image: StepImage,
    },
    {
      title: "Apply for jobs faster",
      desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus neque tincidunt nulla porttitor ultricies. Sed dapibus, elit quis bibendum suscipit",
      image: StepImage,
    },
  ];

  return (
    <section className="getting-started-section">
      <div className="lg:px-[108px] lg:py-[59px] px-[54px] py-[29px] shadow-md rounded-lg">
        <h1 className="text-2xl font-medium text-primary-light text-left">
          Our Solution
        </h1>
        <p className="text-thin text-left mt-[7px]">
          Zenpply is developing an innovative AI-powered platform designed to
          revolutionize the job application process. Our solution will
          streamline and automate the submission of applications across various
          online job portals, providing you with a seamless and time-efficient
          experience. With Zenpply, you can focus on what matters most -
          showcasing your skills and securing the opportunities you deserve.
        </p>
      </div>

      <div>
        <h1 className="main-heading">How to use AI-Job-Link-Pro</h1>
        <h3 className="sub-heading mt-[7px]">
          A Little Description About How To Apply For Job{" "}
        </h3>
      </div>

      {/* Steps */}
      <div className="pt-[10px] pb-[140px] relative space-y-12">
        <div className="absolute lg:-top-[18rem]">
          <img src={GlowCover} className="z-20" />
        </div>
        <div className="absolute  lg:bottom-[12rem] bottom-[8rem]">
          <img src={GlowCover} className="z-20" />
        </div>
        {steps.map(({ image, title, desc, list, link }, index) => (
          <StepsCard
            key={index}
            image={image}
            title={title}
            desc={desc}
            list={list}
            link={link}
            isReverse={(index + 1) % 2 === 0}
          />
        ))}
      </div>
      <img src={dashedLine} alt="dashed-line"/>
    </section>
  );
};

export default GettingStartedSection;
