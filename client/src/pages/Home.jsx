import React from "react";
import Banner from "../components/Home/Banner";
import Section5 from "../components/Home/Section5";
import Section4 from "../components/Home/Section4";
import Section6 from "../components/Home/Section6";
import Section7 from "../components/Home/Section7";
import Section8 from "../components/Home/Section8";
import Section9 from "../components/Home/Section9";
import Section10 from "../components/Home/Section10";
import Section11 from "../components/Home/Section11";
import BlogSection from "../components/Home/BlogSection";
import MeetingScheduleSection from "../components/Home/MeetingScheduleSection";
import CompanyLogoSlider from "../components/Home/CompanyLogoSlider";
// import Section12 from "../components/Home/Section12";
// import Section13 from "../components/Home/Section13";
import SectionLogistics from "../components/Home/SectionLogistics";
import StreamlineSection from "../components/Home/StreamlineSection";

const Home = () => {
  return (
    <div className="w-full">
      <Banner />
      {/* <Section2 /> */}
      {/* <Section3 /> */}
      {/* <StreamlineSection /> */}
      <Section4 /> {/* prev used */}
      <Section5 /> {/* new created */}
      <Section7 /> {/* changed in prev */}
      <Section6 /> {/* changed in prev */}
      <Section8 /> {/* changed in current */}
      <Section9 /> {/* changed in current */}
      {/* <Section12 />
      <Section13 /> */}
      {/* <SectionL */}
      {/* <Section10 /> Grid section component */}
      <SectionLogistics />
      <CompanyLogoSlider />
      <BlogSection />
      <MeetingScheduleSection />
    </div>
  );
};

export default Home;
