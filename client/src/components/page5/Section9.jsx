import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "../../assets/page4/sec3-img.png";
import Container from "../global/Container";
import checkIcon from "../../assets/page4/checkIcon.png";

const Section9 = () => {
  return (
    <div className="w-full flex items-center p-10 bg-[#DDCE1B1C] md:p-[100px]">
      <Container>
        <div className="w-full relative flex flex-col md:flex-row justify-between gap-10 items-center">
          {/* Image */}
          <img src={img} alt="" className="w-full md:w-[50%] object-cover" />
          {/* Content */}
          <div className="w-full">
            <h1 className="text-[36px] max-[600px]:text-[1.5rem] sm:text-[40px] md:text-[46px] font-[600]">
              Is Depoter the ideal fulfillment partner for your FBA needs?
            </h1>
            <ul className="leading-[40px] max-[600px]:mt-10 max-[600px]:text-[1rem] sm:leading-[45px] md:leading-[50px] p-0 text-[18px] sm:text-[20px] md:text-[21px] text-[#3B3A3A]">
              <li className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="w-5 h-5" />
                Ensure optimal stock levels with real-time tracking and
                efficient inventory planning.
              </li>
              <li className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="w-5 h-5" />
                We handle all packaging and labeling to meet Amazon's stringent
                FBA requirements.
              </li>
              <li className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="w-5 h-5" />
                Seamlessly integrate FBA with your Shopify store for a cohesive
                order fulfillment experience.
              </li>
              <li className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="w-5 h-5" />
                Minimize fulfillment fees with strategic planning and insights
                on Amazon’s pricing structures.
              </li>
              <li className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="w-5 h-5" />
                Benefit from kitting, bundling, and packaging solutions tailored
                for Amazon compliance.
              </li>
              <li className="flex items-center gap-2">
                <img src={checkIcon} alt="" className="w-5 h-5" />
                Simplify returns logistics to maintain customer satisfaction and
                Amazon standing.
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section9;
