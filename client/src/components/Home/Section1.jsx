import React from "react";
import { Container } from "react-bootstrap";
import { FaTruck } from "react-icons/fa6";
import Section1_2nd from "./Section1_2nd";
import Section1_3rd from "./Section1_3rd";
import Section1_4th from "./Section1_4th";
import Section1_5th from "./Section1_5th";

const Section1 = () => {
  return (
    <>
      <Container className="flex items-center justify-center ">
        <img
          src="Group 276.png"
          className="w-[50rem] max-[1178px]:w-[30rem]"
          alt="No Image"
          srcset=""
        />
        <div className=" mb-40 max-[500px]:mb-10">
          <h1 className="font-semibold">
            Efficient, affordable B2B <br />
            fulfillment solutions.
          </h1>
          <p className="text-justify">
            Depoter: Leading B2B e-commerce fulfillment in Dubai, offering
            tailored, tech-driven solutions for real-time inventory visibility
            and optimized stock levels. Minimize errors and ensure perfect
            deliveries with our advanced WMS and order processing systems.
          </p>
          <p className="flex items-center text-[#FFBE2E]">
            Start Your Journey{" "}
            <span className="ml-2">
              <FaTruck />
            </span>
          </p>
        </div>
      </Container>
      <Section1_2nd />
      <Section1_3rd />
      <Section1_4th />
      <Section1_5th />
    </>
  );
};

export default Section1;
