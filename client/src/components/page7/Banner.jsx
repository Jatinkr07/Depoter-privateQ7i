import Container from "../global/Container";
import startIcon from "../../assets/page6/start.png";

const Banner = () => {
  return (
    <div className="w-full h-[50vh] page6-banner-main">
      <Container>
        <div className="w-full text-center pt-[20%] md:pt-[200px]">
          <div className="page6-banner-start-button rounded-[50px] w-[300px] mx-auto flex justify-center items-center gap-2 px-5">
            <p className="text-black text-[20px] md:text-[23px] flex items-center gap-3 my-2 max-[600px]:text-[1.2rem]">
              <img src={startIcon} alt="" className="w-6 h-6" /> Storage
              Services
            </p>
          </div>

          {/* Banner Text */}
          <div className="w-full my-10">
            <h3 className="text-[32px] md:text-[62px] max-[600px]:text-[1.2rem] font-[600] leading-tight">
              Gain Full Control Over Your Inventory{" "}
              <br className="hidden md:block" /> Management With Depoter
            </h3>
            <p className="text-[#333333] text-[18px] md:text-[26px] max-[600px]:text-[0.8rem]">
              Gain complete control of your inventory management with Depoter,
              enhancing accuracy and efficiency.{" "}
              <br className="hidden md:block" /> Streamline operations and boost
              productivity to stay competitive.
            </p>
          </div>

          {/* Buttons */}
          <div className="flex items-center justify-center space-x-4 ">
            <button className="bg-[#EDA119] text-[20px] md:text-[24px] font-[600] px-4 py-2 max-[600px]:text-[0.8rem] rounded hover:bg-gray-800 transition duration-300">
              Contact us {">"}
            </button>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Banner;
