import React from "react";
import { Container } from "react-bootstrap";
import { FaTruck } from "react-icons/fa6";

const Section1_4th = () => {
  return (
    <>
      <div className="bg-[#F4F4F4]">
        <Container className="flex justify-around items-center max-[950px]:flex-wrap  pt-20 max-[500px]:pt-20 pb-20">
          <img src="Group 316.png" className="max-[1200px]:w-[30rem]" alt="" />
          <div className="max-[950px]:mt-5 max-[1200px]:ml-2">
            <div className="flex max-[500px]:mt-2">
              <div className="flex justify-evenly w-full">
                <img
                  className=" w-[3rem] h-[3rem] border p-1 rounded-[100%]"
                  src="forklift2 1.png"
                  alt=""
                />
                <div>
                  <h3 className="text-xl max-[500px]:text-sm font-semibold">
                    Cost Optimization
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Knowledge & Data <br /> To Optimize Cost
                  </p>
                </div>
              </div>
              <div className="flex justify-evenly w-full">
                <img
                  className="w-[3rem] h-[3rem] border p-1 rounded-[100%]"
                  src="forklift2 1.png"
                  alt=""
                />
                <div>
                  <h3 className="text-xl max-[500px]:text-sm font-semibold">
                    Cost Optimization
                  </h3>
                  <p className="text-sm text-gray-500 ">
                    Knowledge & Data <br /> To Optimize Cost
                  </p>
                </div>
              </div>
            </div>
            <p>
              Efficiently manage inventory, picking, packing, and delivery with
              our
              <br /> comprehensive solutions.
            </p>
            <p className="flex items-center text-[#FFBE2E]">
              Start Your Journey{" "}
              <span className="ml-2">
                <FaTruck />
              </span>
            </p>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Section1_4th;
