import React from "react";
import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";

import mainImage from "../../assets/home/section9-main.png";
import smallImage from "../../assets/home/section9-small.png";

const Section9 = () => {
  return (
    <div data-aos="fade-up" className="w-full text-center py-10">
      <Container>
        {/* content section */}
        <div className="flex justify-between py-5 flex-wrap md:flex-nowrap">
          {/* left */}
          <div className="w-full md:w-[50%] flex flex-col justify-center text-left">
            <h3 className="font-[700] max-[600px]:text-[1.5rem]">Manage Everything</h3>
            <p className="my-3 max-[600px]:my-2 max-[600px]:text-sm">
              Gain The Insights You Need To Grow - Use A Single Dashboard To
              Manage Orders, Shipping, And Payments Anywhere You Go.Gain The
              Insights You Need To Grow -
            </p>

            <div className="flex items-center gap-3">
              <p className="section-heading text-yellow mb-0 max-[600px]:text-xl">
                Start Your Journey
              </p>
              <img src={car} className="w-[50px]" />
            </div>
          </div>

          {/* right */}
          <div className="w-full md:w-[50%] relative">
            <img src={mainImage} className="w-[80%]" alt="" />
            <img
              src={smallImage}
              className="w-[400px] absolute bottom-[-30%]"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section9;
