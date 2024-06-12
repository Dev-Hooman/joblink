import React from "react";
import StepImage from "../../assets/misc/step-img.png";
import { CheckBoxIcon } from "../../icons";

const StepsCard = ({
  isReverse = false,
  image = StepImage,
  title = "Title",
  desc = "description",
  list = [],
  link,
}) => {
  const listLength = list.length;
  const isListExist = listLength > 0;

  return (
    <div className="grid lg:grid-cols-2 grid-cols-1 gap-4 place-content-center items-center z-40">
      <div className={`${isReverse ? "md:order-2" : "md:order-1"}`}>
        <img src={image} alt="Step" />
      </div>
      <div
        className={`flex flex-col space-y-[19px] ${
          isReverse ? "md:order-1" : "md:order-2"
        }`}
      >
        <label className="text-[20px] font-semibold text-heading-clr text-left">
          {title}
        </label>
        <p className="text-thin text-left xl:w-4/6">{desc}</p>
        {link && (
          <div className="pt-[19px] text-left">
            {" "}
            <a
              href={link}
              className="py-[8px] px-[21px] bg-primary-dark text-white hover:bg-primary-dark/50 transition-colors duration-300 rounded-md"
            >
              Download
            </a>
          </div>
        )}
        {isListExist && (
          <div className="pt-[26px]">
            <ul className="list-none text-left space-y-[11px]">
              {list.map((listData, index) => (
                <li
                  key={index}
                  className="flex flex-row lg:items-center gap-[11px]  lg:text-base text-sm"
                >
                  <div>
                    <CheckBoxIcon />
                  </div>
                  <p>{listData}</p>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default StepsCard;
