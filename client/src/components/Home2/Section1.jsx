import React from "react";
import { Container } from "react-bootstrap";
import { MdKeyboardArrowRight } from "react-icons/md";

const Section1 = () => {
  return (
    <div className="h-full bg-yellow-100">
      <Container className="flex items-center justify-center flex-col p-5">
        <div className="flex items-center mb-10 mt-7  justify-center bg-yellow-50 w-fit p-2 max-[500px]:p-2 rounded-tl-[1rem] rounded-bl-[1rem] rounded-tr-[1rem] rounded-br-[1rem]">
          <img
            src="/SecondPage/Frame.png"
            className="w-4 mr-1"
            alt=""
            srcset=""
          />
          <img
            className="w-64 max-[500px]:w-36"
            src="/SecondPage/Best Automation Plugin for Wordpress.png"
            alt=""
            srcset=""
          />
        </div>
        <img
          className="w-[80rem] max-[500px]:w-[50rem] mb-5"
          src="/SecondPage/Integrate 25+ popular eCommerce plaforms seamlessly with our 3PL services, all without a single line of code..png"
          alt=""
          srcset=""
        />
        <div className="flex justify-around mb-5">
          <button className="flex max-[500px]:text-md items-center bg-black text-[#fff] p-1 mr-2  rounded">
            Get Started{" "}
            <span>
              {" "}
              <MdKeyboardArrowRight />
            </span>
          </button>
          <button className="flex max-[500px]:text-md items-center  border-black border-1 px-4 p-1 rounded">
            Get Quote
          </button>
        </div>
        <div className="flex justify-center items-center w-full">
          <img
            src="/SecondPage/client 1.png"
            className="border-yellow-500 border-2 rounded-[100%] p-2 w-20 h-20 max-[500px]:w-12 max-[500px]:h-12"
            alt=""
            srcset=""
          />
          <img
            src="/SecondPage/arrow-right 1.png"
            className="w-20 max-[1000px]:m-4 max-[500px]:w-10 max-[400px]:m-1"
            alt=""
            srcset=""
          />
          <img
            src="/SecondPage/Group 344.png"
            className="w-28 h-28 max-[500px]:w-20 max-[500px]:h-20"
            alt=""
            srcset=""
          />
          <img
            src="/SecondPage/arrow-right 1.png"
            className="w-20 max-[1000px]:m-4 max-[500px]:w-10 max-[400px]:m-1"
            alt=""
            srcset=""
          />
          <div className="border-white border-2 shadow-lg rounded-[100%] p-1">
            <div className="border-yellow-500 border-2  p-2 rounded-[100%] text-center shadow-lg h-32 w-32 max-[500px]:w-24 max-[500px]:h-24 flex flex-col items-center justify-center">
              <h3>25+</h3>
              <p>Integrations</p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section1;
