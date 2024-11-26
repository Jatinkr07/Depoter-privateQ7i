import React from "react";
import Container from "../global/Container";
import img1 from "../../assets/page3/section1-img1.png";
import img2 from "../../assets/page3/section1-img2.png";
import img3 from "../../assets/page3/section1-img3.png";
import img4 from "../../assets/page3/section1-img4.png";
import img5 from "../../assets/page3/section1-img5.png";
import hexagon from "../../assets/page3/hexagon.png";

const Section1 = () => {
  return (
    <div className="w-full pb-1">
      <Container>
        <div className="flex flex-wrap justify-center">
          {data.map((item) => {
            return (
              <div
                key={item.id}
                className="w-[80%]  sm:w-[150px] md:w-[175px] lg:w-[200px] relative mx-4 my-4"
              >
                <img src={hexagon} alt="" className="object-cover w-full" />
                <div className="absolute text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
                  <img
                    src={item.img}
                    alt=""
                    className="my-0 mx-auto w-[40px] sm:w-[30px] md:w-[35px] lg:w-[40px]"
                  />
                  <p className="text-[0.8rem] sm:text-[16px] md:text-[18px] lg:text-[20px] font-semibold">
                    {item.title}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </Container>
    </div>
  );
};

const data = [
  {
    id: 1,
    img: img1,
    title: "No Code Automation",
  },
  {
    id: 2,
    img: img2,
    title: "Send Unlimited Data",
  },
  {
    id: 3,
    img: img3,
    title: "Custom Field Value",
  },
  {
    id: 4,
    img: img4,
    title: "In & Out Webhook",
  },
  {
    id: 5,
    img: img5,
    title: "Conditional Logic",
  },
];

export default Section1;
