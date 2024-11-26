import Banner from "../components/page2/Banner";
import Section1 from "../components/page2/Section1";
import Section2 from "../components/page2/Section2";
import Section3 from "../components/page2/Section3";
// import Section4 from "../components/page2/Section4";
import Section5 from "../components/page2/Section5";
import Section6 from "../components/page2/Section6";
import Section7 from "../components/page2/Section7";
import Section8 from "../components/page2/Section8";
import Section9 from "../components/page2/Section9";
import Section10 from "../components/page2/Section10";
import Integrations from "../components/page2/Integrations";
import Section11 from "../components/page2/Section11";
import CompanyLogoSlider from "../components/page2/CompanyLogoSlider";
import BlogSection from "../components/page2/BlogSection";
import MeetingScheduleSection from "../components/page2/MeetingScheduleSection";
import SeamLessSection from "../components/page2/SeamLessSection";
import Section4Copy from "../components/page2/Section4Copy";

const Page2 = () => {
  return (
    <div className="w-full">
      <Banner />
      <Section1 />
      <Section2 />
      <Section3 />
      <Section4Copy />
      <Section5 />
      <Section6 />
      <Section7 />
      <Section8 />
      <Section9 />
      <Section10 />
      <SeamLessSection />
      <Integrations />
      <Section11 />
      <CompanyLogoSlider />
      <BlogSection />
      <MeetingScheduleSection />
    </div>
  );
};

export default Page2;
