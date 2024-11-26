import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import Container from "../global/Container";

const Banner = () => {
  return (
    <div className="w-full flex items-center h-screen bg-[#509DD61A]">
      <Container>
        <div className="w-full flex flex-col lg:flex-row justify-between items-center gap-5 max-[600px]:mt-12">
          {/* Content */}
          <div className="w-full lg:w-1/2">
            <h1 className="text-[36px] max-[600px]:text-[1.5rem] sm:text-[48px] md:text-[56px] font-[600]">
              Streamline FBN with Depoter’s expert fulfillment services
            </h1>
            <p className="section-small-heading font-[500] max-[600px]:text-sm my-3 text-[16px] sm:text-[18px] md:text-[20px]">
              Enhance your e-commerce success with Depoter’s expert FBN
              fulfillment services designed for efficiency. Concentrate on
              growing your business while we manage storage, packaging, and
              shipping seamlessly.
            </p>
            <button className="flex items-center bg-[#232F3E] text-white px-4 py-2 rounded-lg">
              Get Started <MdOutlineKeyboardArrowRight />
            </button>
          </div>

          {/* Image */}
          <div className="flex justify-center w-full lg:w-1/2">
            <img
              src="FBA.png"
              alt="Depoter Fulfillment Services"
              className="w-full max-w-[500px] rounded-lg object-cover"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
