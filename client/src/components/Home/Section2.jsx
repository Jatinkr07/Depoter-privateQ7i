import React from "react";
import { Container } from "react-bootstrap";
import bg from "../../assets/home/section2-bg.png";
import tool1 from "../../assets/home/section2-tool1.png";
import tool2 from "../../assets/home/section2-tool2.png";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";

const section2 = () => {
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
    <Container>
      <div
        data-aos="fade-up"
        className="w-[100%] section2 relative py-[70px] my-5 mx-auto text-center shadow rounded-r-xl"
      >
        <img src={bg} className="w-full h-[100%] absolute z-0" alt="" />
        <div className="z-1 relative">
          <h2 className="font-[700]">Find your fulfilment solution</h2>
          <p className="section-heading text-[#202225]  font-[500]">
            How many packages per month do you ship?
          </p>
          <div className="w-[90%] my-0 mx-auto mt-5 package-permonth-container flex  gap-2 justify-between">
            {data.map((list) => {
              return (
                <div
                  className="border-2 w-full  py-3 text-center px-5 font-[500] border-yellow-400"
                  key={list.id}
                >
                  {list.range}
                  {" >"}
                </div>
              );
            })}
          </div>
        </div>
        <img
          data-aos="fade-up"
          src={tool1}
          className="w-[100px] tool1"
          alt=""
        />
        <img
          data-aos="fade-up"
          src={tool2}
          className="w-[100px] tool2"
          alt=""
        />
      </div>
    </Container>
  );
};

export default section2;
