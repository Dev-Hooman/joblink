import React from "react";
import MainSection from "../../components/LandingPage/sections/MainSection";
import GettingStartedSection from "../../components/LandingPage/sections/GettingStartedSection";
import FeatureSection from "../../components/LandingPage/sections/FeatureSection";
import PricingSection from "../../components/LandingPage/sections/PricingSection";
import SubscribeSection from "../../components/LandingPage/sections/SubscribeSection";

const LandingPage = () => {
  return (
    <div className="h-full">
      <MainSection />
      <GettingStartedSection/>
      <FeatureSection/>
      <PricingSection/>
      <SubscribeSection/>
    </div>
  );
};

export default LandingPage;
