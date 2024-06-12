import React from "react";

const SubscribeSection = () => {
  return (
    <section className="subscribe-section flex flex-col justify-center items-center w-full">
      <div className="max-w-[1328px] w-full text-center">
        <h1>Subscribe Us</h1>
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-4 mt-[100px] items-center">
          <div className="lg:col-span-2 subscribe-card">
            <h1>Why Subscribe Us</h1>
            <p className="mt-[7px]">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
              rhoncus neque tincidunt nulla porttitor ultricies. Sed dapibus,
              elit quis bibendum suscipit, ligula justo ullamcorper ligula, in
              malesuada ante mauris ut purus. Aliquam ac tortor tincidunt,
              varius nisl vitae, volutpat risus. Donec imperdiet tortor non erat
              efficitur, vitae scelerisque diam congue. Curabitur mi sapien,
              pellentesque eget volutpat eu, feugiat ut ipsum. Etiam
              scelerisque, justo eu maximus tempus, lectus orci feugiat sapien,
              dapibus luctus est dolor eget arcu. Vivamus sed quam pharetra,
              egestas turpis non, laoreet nisl. Ut fringilla dictum eleifend.
              Nullam laoreet neque egestas, sollicitudin lorem et, pretium dolor
            </p>
          </div>
          <div className="subscribe-card flex flex-col space">
            <div>
              <h1>Subscribe to our newsletter</h1>
              <p className="mt-[7px]">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                rhoncus neque tincidunt.
              </p>
            </div>
            <form className="mt-[30px] space-y-[20px]">
              <input
                type="text"
                class="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-[#BFBFBF] w-full"
                placeholder="Enter Name"
              />
              <input
                type="text"
                class="border border-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:border-[#BFBFBF] w-full"
                placeholder="Enter Email"
              />
              <button className="subscribe-btn">Subscribe</button>
            </form>
          </div>
        </div>
      </div>

      <div className="max-w-[1328px] gradient-div lg:mt-[150px] mt-[100px] w-full rounded-[40px] h-[315px] pt-[52px] lg:px-[111px] px-[70px]">
        <h3 className="xl:text-[44px] md:text-[32px] text-[20px] text-center font-bold text-[#ffff]">
          Try our AI powered Job application automation tool to automate job
          search
        </h3>
        <button className="lg:mt-[39px] mt-[20px] lg:px-[31px] px-[25px] py-[14px] lg:text-[20px] text-base text-[#fff] rounded-[10px] bg-primary-dark">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default SubscribeSection;
