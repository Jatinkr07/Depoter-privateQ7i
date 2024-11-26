import React from "react";
import Container from "../global/Container";
import startIcon from "../../assets/page5/star.png";

const Banner = () => {
  return (
    <div className="w-full  page5-banner flex items-center">
      <Container>
        <div className="w-full text-center pt-28 max-[600px]:pt-22  rounded">
          <div className="page5-gradient-text w-full max-[600px]:w-fit max-[600px]:px-4 max-w-[500px] mx-auto flex justify-center items-center gap-2  rounded-[50px]">
            <p className="text-white text-[23px] max-[600px]:text-[0.8rem] flex items-center gap-3 my-2">
              <img src={startIcon} alt="Star Icon" className="h-6 w-6 max-[600px]:h-4 max-[600px]:w-4" />
              Multichannel Ecommerce Fulfillment
            </p>
          </div>
          {/* Banner Text */}
          <div className="w-full my-10">
            <h3 className="text-3xl sm:text-3xl max-[600px]:text-[1.5rem] md:text-[40px]  font-[600]">
              Seamless Multichannel Fulfillment <br /> for E-Commerce Success
            </h3>
            <p className="text-[#333333] max-[600px]:text-[0.8rem] text-[18px] sm:text-[20px] md:text-[26px]">
              Depoter stands as a leader in the industry, offering specialized
              solutions as a multichannel fulfillment center. With the
              integration of advanced technology and flexible operations,
              Depoter enables businesses to efficiently manage their inventory,
              streamline order processing, and fulfill customer expectations
              seamlessly.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-[#141280] max-[600px]:text-[1rem] text-[20px] sm:text-[24px] font-[500] text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              Explore {">"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
