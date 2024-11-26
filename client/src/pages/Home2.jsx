import React from "react";
import Section1 from "../components/Home2/Section1";
import Section2 from "../components/Home2/Section2";
import MeetingScheduleSection from "../components/Home/MeetingScheduleSection";

const Home2 = () => {
  return (
    <div className="w-full">
      <Section1 />
      <Section2 />
      <MeetingScheduleSection />
    </div>
  );
};

export default Home2;
