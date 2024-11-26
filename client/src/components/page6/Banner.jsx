import React from "react";
import Container from "../global/Container";
import startIcon from "../../assets/page6/start.png";

const Banner = () => {
  return (
    <div className="w-full mt-28 max-[600px]:mt-20 max-[600px]:pt-2 page6-banner-main flex items-center">
      <Container>
        <div className="w-full text-center">
          <div className="page6-banner-start-button rounded-full w-[300px] mx-auto flex justify-center items-center gap-2 px-5">
            <p className="text-black max-[600px]:text-[1.2rem] text-[1.3rem] flex items-center gap-3 my-2">
              <img src={startIcon} alt="Start Icon" />
              Storage Services
            </p>
          </div>
          {/* Banner Text */}
          <div className="w-full my-10 max-[600px]:-my-2">
            <h3 className="text-[36px] max-[600px]:text-[1.2rem] max-[600px]:my-8 sm:text-[48px] md:text-[62px] font-semibold leading-tight">
              Comprehensive Storage and Warehousing <br /> Solutions Tailored
              for Your Business
            </h3>
            <p className="text-[#333333] max-[600px]:text-[0.8rem] text-[18px] sm:text-[20px] md:text-[26px]">
              From secure storage to efficient order fulfillment, we offer
              seamless, scalable solutions tailored to enhance your business’s
              operational efficiency and customer satisfaction. Partner with us
              for streamlined logistics that support your growth at every step.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex justify-center items-center space-x-4">
            <button className="bg-[#EDA119] text-[20px] sm:text-[24px] max-[600px]:text-[0.8rem] max-[600px]:my-4 font-[500] text-white px-4 py-2 rounded hover:bg-gray-800 transition duration-300">
              Explore {">"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
