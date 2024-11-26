import React from "react";
import { Container } from "react-bootstrap";
import main from "../../assets/page1/section8.png";
import polygon from "../../assets/page1/section8-polygon.png";
import car from "../../assets/home/smallCar.png";
import pallet from "../../assets/home/pallet.png";
import icon1 from "../../assets/home/section8-small1.png";
import icon2 from "../../assets/home/section8-small2.png";

const Section8 = () => {
  return (
    <>
      <img src={polygon} className="w-full" alt="" />
      <div className="w-full text-center bg-[#F5CC82] pb-10">
        <Container>
          {/* content section */}
          <div className="flex justify-between py-5 flex-wrap md:flex-nowrap">
            {/* left */}
            <div className="w-[100%] md:w-[50%] mb-5 md;mb-0">
              <img src={main} className="my-0 mx-auto w-[70%]" alt="" />
            </div>

            {/* right */}
            <div className="w-[100%] md:w-[50%] text-left flex flex-col justify-center">
              <h3 className="font-[700] max-[600px]:text-xl">Enhanced Customer Satisfaction</h3>
              <p className="my-2 max-[600px]:text-sm">
                You enjoy all the things that matter without breaking <br /> the
                bank.
              </p>
              <div className="w-[100%]  md:w-[80%] py-3 px-3 flex items-center bg-white rounded-sm">
                <img src={icon1} className="w-[50px]" alt="" />
                <div className="pl-3">
                  <p className="m-0 font-[500]">Business & Revenue Growth</p>
                  <p className="m-0 text-[#454545]">
                    Business have reported a notable 10% increase <br /> in
                    sales and revenue.
                  </p>
                </div>
              </div>
              <div className="w-[100%]  md:w-[80%] py-3 px-3 flex items-center bg-white rounded-sm">
                <img src={icon2} className="w-[50px]" alt="" />
                <div className="pl-3">
                  <p className="m-0 font-[500]">Business & Revenue Growth</p>
                  <p className="m-0 text-[#454545]">
                    Business have reported a notable 10% increase <br /> in
                    sales and revenue.
                  </p>
                </div>
              </div>
              <img src={pallet} className="w-[100%]  md:w-[80%]" alt="" />
              <div className="flex items-center gap-3">
                <p className="section-heading  mb-0">Start Your Journey</p>
                <img src={car} className="w-[50px]" />
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section8;
