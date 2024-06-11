import React from "react";
import MainSection from "../../components/LandingPage/sections/MainSection";
import GettingStartedSection from "../../components/LandingPage/sections/GettingStartedSection";

const LandingPage = () => {
  return (
    <div className="h-full">
      <MainSection />
      <GettingStartedSection/>
    </div>
  );
};

export default LandingPage;
