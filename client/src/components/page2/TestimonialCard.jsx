import React from "react";
import img from "../../assets/home/testimonial.png";
import StartRating from "../global/StartRating";

const TestimonialCard = () => {
  return (
    <div className="w-[350px] shadow mr-[50px] py-2 px-3 border border-gray-200 rounded-lg">
      <div className="flex gap-3">
        <img src={img} className="w-[65px] h-[60px]  rounded-[100px]" alt="" />
        <div>
          <h5>Jana Thomas</h5>
          <p className="text-gray-500">CEO of ApnaStore</p>
        </div>
      </div>
      <StartRating num={3} />
      <p className="mt-3 text-[12px]">
        Exceptional experience using this eCommerce builder! Seamless website
        creation, intuitive features, and top-notch customer support. A
        game-changer for anyone looking to establish an online presence
        effortlessly.
      </p>
    </div>
  );
};

export default TestimonialCard;
