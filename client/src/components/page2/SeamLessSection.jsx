import React from "react";
import Container from "../global/Container";
import img from "../../assets/page1/seamless.png";

const SeamLessSection = () => {
  return (
    <div className="py-[100px]">
      <Container>
        <div className="text-center">
          <h3 className="text-[40px] max-[600px]:text-[1.5rem] font-[700]">
            How Depoter will <br /> transform your business
          </h3>
          <p className="max-[600px]:text-sm">
            Unlock the Power of logistics for an Enhanced and Seamless logistics{" "}
            <br />
            experience.
          </p>
        </div>
        <img src={img} className="object-cover w-full" alt="" />
      </Container>
    </div>
  );
};

export default SeamLessSection;
