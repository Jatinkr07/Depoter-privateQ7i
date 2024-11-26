import React from "react";
import { Container } from "react-bootstrap";
import { FaTruck } from "react-icons/fa6";

const Section1_2nd = () => {
  return (
    <div className="bg-[#F4F4F4] clipBg">
      <Container className="flex items-center justify-center flex-wrap-reverse max-[500px]:flex-wrap ">
        <div>
          <h1 className="font-semibold">
            Advanced Technology <br /> for Superior Fulfillment
          </h1>
          <p className="w-96 max-[500px]:w-full">
            Our state-of-the-art warehouse management and order processing
            systems offer real-time visibility into inventory levels and order
            status. This allows businesses to make informed decisions, optimize
            stock levels, and reduce fulfillment times, ensuring accurate and
            timely deliveries
          </p>
          <p className="flex items-center text-[#FFBE2E]">
            Start Your Journey{" "}
            <span className="ml-2">
              <FaTruck />
            </span>
          </p>
        </div>
        <div className="flex flex-col justify-center mt-40 max-[500px]:mt-10 ">
          <img
            src="Group 292.png"
            className="w-[8rem] max-[1300px]:w-[7rem] max-[500px]:w-[4.5rem] m-auto mb-2"
            alt=""
            srcset=""
          />
          <div className="flex justify-center">
            <img
              src="Group 292.png"
              className="m-2 w-[8rem] max-[1300px]:w-[7rem] max-[500px]:w-[4.5rem]"
              alt=""
              srcset=""
            />
            <img
              src="Group 292.png"
              className="m-2 w-[8rem] max-[1300px]:w-[7rem] max-[500px]:w-[4.5rem]"
              alt=""
              srcset=""
            />
          </div>
          <div className="flex justify-center">
            <img
              src="Group 292.png"
              className="m-2 w-[8rem] max-[1300px]:w-[7rem] max-[500px]:w-[4.5rem]"
              alt=""
              srcset=""
            />
            <img
              src="Group 292.png"
              className="m-2 w-[8rem] max-[1300px]:w-[7rem] max-[500px]:w-[4.5rem]"
              alt=""
              srcset=""
            />
            <img
              src="Group 292.png"
              className="m-2 w-[8rem] max-[1300px]:w-[7rem] max-[500px]:w-[4.5rem]"
              alt=""
              srcset=""
            />
          </div>
          <img src="Group 283.png" className="max-[1300px]:w-[40rem] max-[1200px]:w-[32rem]" alt="" srcset="" />
        </div>
      </Container>
    </div>
  );
};

export default Section1_2nd;
