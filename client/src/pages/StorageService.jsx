/* eslint-disable react-hooks/rules-of-hooks */
import { useRef } from "react";
import { useScroll, motion, useTransform } from "framer-motion";
import startIcon from "../assets/page6/start.png";
import dashBoard from "../assets/page7/dashboard.jpeg";
import Section2 from "../components/page7/Section2";
import { BorderBeam } from "../components/global/BorderBeam";
import Section3 from "../components/page7/Section3";
import Section4 from "../components/page7/Section4";
import Section5 from "../components/page7/Section5";

const StorageService = () => {
  const container = useRef();

  // Custom hook to check if the screen width is mobile
  const isMobile = window.innerWidth < 576;

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  // Use animations only if not on mobile
  const opacity = isMobile
    ? 1
    : useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.5, 0.2, 0]);
  const scale = isMobile
    ? 1
    : useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [1, 0.9, 0.5, 0]);
  const dashboardScale = isMobile
    ? 1
    : useTransform(scrollYProgress, [0, 0.3, 0.7, 1], [0.9, 1, 1.1, 1.1]);

  return (
    <div className="w-full ">
      <motion.div
        ref={container}
        className={`relative ${
          !isMobile && "h-[150vh]"
        } bg-gradient-to-b from-[#f9efdb] to-white pt-[100px] w-full`}
      >
        {/* Motion element with opacity */}
        <motion.div
          style={{ opacity }}
          className={`h-[45vh] md:h-[60vh] ${
            !isMobile && "sticky"
          } top-[100px] z-10 w-full flex justify-center items-center`}
        >
          <motion.div
            style={{ scale }}
            className="w-full px-2 md:w-[90vw] xl:w-[80vw] flex flex-col justify-center gap-y-2 lg:gap-y-3 items-center"
          >
            <div className="bg-[#FFBE2E] w-fit flex gap-x-2 p-[4px] sm:p-[6px] px-3 items-center rounded-full">
              <img
                src={startIcon}
                alt="Start Icon"
                className="w-3 h-3 sm:w-4 sm:h-4"
              />
              <span className="text-sm sm:text-base">Storage Service</span>
            </div>
            <h1 className="text-xl mt-1 md:mt-3 sm:text-2xl md:text-4xl lg:text-5xl xl:text-7xl lg:leading-[4rem] xl:leading-[5.2rem] font-semibold text-center">
              Gain Full Control Over Your Inventory Management With Depoter
            </h1>
            <p className="text-sm md:text-base lg:text-lg leading-[1.5rem] lg:leading-[2.2rem] text-[#454545] text-center">
              Gain complete control of your inventory management with Depoter,
              enhancing accuracy and efficiency. Streamline operations and boost
              productivity to enhancing accuracy and efficiency. Streamline
              operations and boost productivity to stay competitive.
            </p>
            <button className=" px-3 py-2 md:px-4 md:py-3  transition duration-300 bg-[#FFBE2E] text-black rounded   text-sm md:text-lg">
              Contact Us
            </button>
          </motion.div>
        </motion.div>

        {/* Dashboard Illustration */}
        <div className="flex justify-center w-full px-2 py-2 mt-8 md:mt-0">
          <motion.div
            style={{ scale: dashboardScale }}
            className="w-full rounded-md  relative  md:w-[80vw] lg:w-[90vw] z-20"
          >
            <motion.img
              src={dashBoard}
              className="object-cover w-full h-auto"
              alt="Dashboard Illustration"
            />
            {!isMobile && <BorderBeam />}
          </motion.div>
        </div>
      </motion.div>
      <Section2 />
      <Section3 />
      <Section4 />
      <Section5 />
    </div>
  );
};

export default StorageService;
