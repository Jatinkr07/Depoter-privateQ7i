import React from "react";
import section2Bg from "../../assets/page5/bannerSection2.png";
import Container from "../../components/global/Container";

const Section2 = () => {
  return (
    <Container>
      <div className="flex flex-col lg:flex-row px-4 max-[600px]:mt-10 lg:px-10 my-20 rounded-lg page5-banner-sec2 justify-center items-center text-white">
        <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
          <h2 className="text-3xl sm:text-4xl max-[600px]:text-[1.2rem] max-[600px]:pt-5 lg:text-[52px] font-bold">
            What is a Multi-Vendor Marketplace Platform?
          </h2>
          <p className="text-lg max-[600px]:text-[0.8rem] sm:text-xl lg:text-[26px] mt-4 max-[600px]:mt-2">
            In today's fast-paced e-commerce landscape, businesses must adopt a
            robust and agile approach to meet the growing demands of consumers.
          </p>
          <p className="text-lg max-[600px]:text-[0.8rem] sm:text-xl lg:text-[26px] mt-2 max-[600px]:mt-2">
            With the rise of multiple sales channels—such as online
            marketplaces, branded websites, and social media—managing inventory
            and order processing across all these platforms can be challenging.
          </p>
        </div>
        <div className="w-full lg:w-1/2">
          <img
            src={section2Bg}
            className="w-full h-auto object-cover"
            alt="Multi-Vendor Marketplace"
          />
        </div>
      </div>
    </Container>
  );
};

export default Section2;