import { Container } from "react-bootstrap";
import boyImg from "../../assets/home/workerBoy.png";

const MeetingScheduleSection = () => {
  return (
    <div className="bg-[#00061C]  w-full md:mt-0 -mt-24">
      <Container>
        <div
          data-aos="fade-right"
          className="flex py-[43px] justify-start gap-x-10 flex-nowrap lg:flex-nowrap"
        >
          {/* Left Section */}
          <div className="w-full sm:w-[55%] text-left sm:text-left">
            <h1 className="text-white font-semibold text-[16px] sm:text-[35px] md:text-[38px] lg:text-[44px] leading-tight mb-4">
              Get the essentials and lorem <br className="hidden sm:block" />
              ipsum today!
            </h1>
            <div className="flex ">
              {" "}
              <button className="px-4 py-[5px] text-sm text-white transition duration-300 border-2 border-white rounded-full sm:px-5 sm:py-2 md:text-lg ">
                Schedule Meeting
              </button>
            </div>
          </div>

          {/* Right Section */}
          <div className=" md:w-[12%] flex md:justify-center md:ml-44 relative ">
            <img
              src={boyImg}
              className="hidden md:block absolute bottom-[1.3rem] md:bottom-[3.5rem] lg:bottom-[4rem]  md:left-[50%] translate-x-[-50%] md:right-0   object-contain w-[100%] scale-[1.9] md:scale-[2.7] h-[100%]   md:h-[70%] z-[99] "
              alt="Worker Boy"
            />
          </div>
        </div>
      </Container>
    </div>
  );
};

export default MeetingScheduleSection;
