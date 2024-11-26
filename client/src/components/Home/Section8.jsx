/* eslint-disable react/no-unescaped-entities */
import React from "react";
import { Container } from "react-bootstrap";
import img from "../../assets/home/section8.png";
import car from "../../assets/home/smallCar.png";

const Section8 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-10 text-center">
      <Container>
        {/* content section */}
        <div className="flex flex-wrap items-center justify-between py-5 md:flex-nowrap">
          {/* left */}
          <div className="w-[100%] md:w-[50%] -mt-10 md:mt-0 relative">
            <img src={img} className="w-[85%] my-0 mx-auto" alt="" />
          </div>
          {/* right */}
          <div className="w-[100%] md:w-[50%] text-left ">
            <h3 className="text-lg font-semibold md:text-4xl">
              Scalability: Adapting to Business Growth <br />
              <h3 className="mt-2 text-lg font-semibold md:text-4xl">
                and Market Fluctuations
              </h3>
            </h3>
            <p className="my-3 text-[#454545] text-lg">
              Another noteworthy feature of Depoter's B2B fulfillment services
              is its scalability. Whether a business is a start-up or an
              established enterprise, Depoter's flexible solutions can
              accommodate varying order volumes and seasonal fluctuations. This
              scalability is crucial for businesses experiencing growth, as it
              allows them to adapt their fulfillment processes without
              compromising efficiency.
            </p>

            <div className="flex items-center gap-3">
              <p className="mb-0 text-lg md:text-2xl text-yellow">
                Start Your Journey
              </p>
              <img src={car} className="md:w-[50px] w-[30px]" />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section8;
