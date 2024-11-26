import React from "react";
import Banner from "../components/page3/Banner";
import Section1 from "../components/page3/Section1";
import Meetings from "../components/page3/Meetings";
import Section2 from "../components/page3/Section2";
import Section3 from "../components/page3/Section3";

const Page3 = () => {
  return (
    <div className="w-full">
      <Banner />
      <Section1></Section1>
      <Section2></Section2>
      <Section3 />
      <Meetings />
    </div>
  );
};

export default Page3;
