import React from "react";
import { Container } from "react-bootstrap";
import { FaTruck } from "react-icons/fa6";

const Section1_3rd = () => {
  return (
    <Container className="flex items-center pt-40 max-[500px]:pt-20 ">
      <img src="Group 314.png" className="max-[1200px]:w-[35rem]" alt="" srcset="" />
      <div className=" mb-40 max-[500px]:mb-10">
        <h1 className="font-semibold">
          Scalable and Cost- <br /> Effective Services
        </h1>
        <p className="text-justify">
          Depoter’s flexible solutions accommodate businesses of all sizes,
          adapting to varying order volumes and seasonal demands efficiently. By
          optimizing logistics and leveraging economies of scale, we provide
          cost-effective fulfillment services balancing quality and cost
        </p>
        <p className="flex items-center text-[#FFBE2E]">
          Start Your Journey{" "}
          <span className="ml-2">
            <FaTruck />
          </span>
        </p>
      </div>
    </Container>
  );
};

export default Section1_3rd;
