import React from "react";
import { Container } from "react-bootstrap";
import bg from "../../assets/home/section2-bg.png";
import tool1 from "../../assets/home/section2-tool1.png";
import tool2 from "../../assets/home/section2-tool2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import polygon from "../../assets/page1/section1-polygon.png";

const section1 = () => {
  const data = [
    {
      id: 1,
      range: "1 - 100",
    },
    {
      id: 2,
      range: "101 - 500",
    },
    {
      id: 3,
      range: "501 - 1000",
    },
    {
      id: 4,
      range: "1001 - 5000",
    },
    {
      id: 5,
      range: "5000+",
    },
  ];
  return (
    <div className="w-full py-[50px] ">
      <Container>
        <img src={polygon} className="object-contain h-[100%] w-full" alt="" />
        <div className="w-full section2 bg-[#393939] text-white relative py-[50px] md:py-[70px] mb-5 mx-auto text-center px-12 max-[600px]:px-0  shadow-lg  rounded-sm">
          <div className="relative px-4 ">
            <h2 className="font-bold text-[1.5rem] md:text-[28px] lg:text-[32px] mb-3">
              Find your fulfillment solution
            </h2>
            <p className="font-semibold text-[0.8rem] md:text-[18px] lg:text-[20px] mb-6">
              How many packages per month do you ship?
            </p>
            <div className="w-[90%] mx-auto mt-5 flex flex-wrap gap-3 justify-between">
              {data.map((list) => (
                <div
                  className="border-2 border-[#FFBE2E] w-full sm:w-[48%] md:w-[30%] lg:w-[18%] py-3 text-center px-6 font-medium rounded-md hover:bg-[#FFBE2E] hover:text-black cursor-pointer transition-all  duration-200"
                  key={list.id}
                >
                  {list.range} {" >"}
                </div>
              ))}
            </div>
          </div>
          <img src={tool1} className="w-[100px] md:block hidden tool1" alt="" />
          <img src={tool2} className="w-[100px] tool2 md:block hidden" alt="" />
        </div>
      </Container>
    </div>
  );
};

export default section1;
