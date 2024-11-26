import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import img from "../../assets/page4/sec3-img.png";
import Container from "../global/Container";
import checkIcon from "../../assets/page4/checkIcon.png";

const Section3 = () => {
  return (
    <div className="w-full flex flex-col lg:flex-row items-center p-10 bg-[#509DD61A]">
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-10">
          {/* Image */}
          <div className="w-full lg:w-1/2 flex justify-center">
            <img src={img} alt="Depoter Fulfillment" className="w-full max-w-[500px] object-cover" />
          </div>
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[32px] max-[600px]:text-[1.2rem] sm:text-[40px] md:text-[46px] font-[600] text-center lg:text-left">
              Is Depoter the ideal fulfillment partner for your FBA needs?
            </h1>
            <ul className="leading-[30px] max-[600px]:text-[1rem] p-0 text-[18px] sm:text-[21px] text-[#3B3A3A] mt-5 max-[600px]:mt-2">
              {[
                "Ensure optimal stock levels with real-time tracking and efficient inventory planning.",
                "We handle all packaging and labeling to meet Amazon's stringent FBA requirements.",
                "Seamlessly integrate FBA with your Shopify store for a cohesive order fulfillment experience.",
                "Minimize fulfillment fees with strategic planning and insights on Amazon’s pricing structures.",
                "Benefit from kitting, bundling, and packaging solutions tailored for Amazon compliance.",
                "Simplify returns logistics to maintain customer satisfaction and Amazon standing.",
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-2 mt-2">
                  <img src={checkIcon} alt="Check Icon" className="w-5 h-5" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section3;