import React from "react";
import BgCover1 from "../../../assets/bg-covers/bg-cover-1.png";
import mockVideoPlayer from "../../../assets/bg-covers/mock-video-player.png";

const MainSection = () => {
  return (
    <>
      <div className="absolute left-0 top-0 ">
        <img src={BgCover1} className="w-[400px]" />
      </div>
      <section className="main-layout">
        <div className="grid lg:grid-cols-2 grid-cols-1 place-content-center items-center justify-items-center">
          <div className="lg:text-left text-center">
            <h1 className="md:text-2xl text-xl font-bold text-heading-clr">
              Welcome to <span className="text-primary-dark">Zenpply</span>
            </h1>
            <p className="main-heading xl:w-9/12  mt-6">
              Transforming Your Job Search Experince!
            </p>
            <button className="btn-primary mt-[29px] font-bold text-xl">
              Explore
            </button>
          </div>
          <div className="lg:mt-0 mt-12">
            <img src={mockVideoPlayer} className="object-cover rounded-lg" />
          </div>
        </div>
        <div className="custom-border-dashed" />
      </section>
    </>
  );
};

export default MainSection;
