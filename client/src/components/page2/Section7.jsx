/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "react-bootstrap";
import car from "../../assets/home/smallCar.png";
import main from "../../assets/home/section7-main.png";
import right from "../../assets/home/section7-right.png";
import left from "../../assets/home/section7-left.png";

const Section7 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* content section */}
        <div className="flex flex-wrap items-center justify-between py-5 md:flex-nowrap">
          {/* left */}
          <div className="w-[100%] md:w-[50%] text-left">
            <h3 className="text-[1/2rem] font-bold md:text-4xl">
              Real-Time Tracking and Updates
            </h3>
            <p className="my-3 max-[600px]:text-sm text-base md:text-lg">
              With Depoter, you get real-time visibility into your inventory and
              order status. Our platform provides up-to-the-minute updates,
              allowing you to track every stage of the process from the
              warehouse to the customer's doorstep, ensuring transparency and
              accountability.
            </p>

            <div className="flex items-center gap-3">
              <p className="mb-0 text-lg md:text-3xl text-yellow">
                Start Your Journey
              </p>
              <img src={car} className="w-[30px] md:w-[50px]" />
            </div>
          </div>

          {/* right */}
          <div className="w-[100%] md:w-[50%] mt-5 md:mt-0 relative">
            <img
              src={left}
              className="w-[300px] hidden sm:block my-0  absolute md:left-[-5%]"
              alt=""
            />
            <img
              src={main}
              className="md:w-[70%] w-[60%] my-0 mx-auto"
              alt=""
            />
            <img
              src={right}
              className="w-[150px] hidden sm:block my-0 absolute bottom-0 right-[4%]"
              alt=""
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section7;
