import React from "react";
import Container from "../../components/global/Container";
import logo1 from "../../assets/page5/logo1.png";
import logo2 from "../../assets/page5/logo2.png";
import logo3 from "../../assets/page5/logo3.png";
import logo4 from "../../assets/page5/logo4.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const Section3 = () => {
  return (
    <Container>
      <div className="px-5 my-15 max-[600px]:-my-14">
        <div className="w-full text-center">
          <h3 className="text-2xl max-[600px]:text-[1.2rem] sm:text-4xl lg:text-[52px] text-[#333333] font-[600]">
            Supporting <span className="text-[#EDA119]">Your Growth</span>{" "}
            Across <br className="hidden lg:block" />
          </h3>
          <h3 className=" sm:text-4xl lg:text-[52px] text-[#333333] font-[600]   max-[600px]:text-[1.1rem]">
            10+ Key Sales Channels
          </h3>
        </div>
        <div className="w-full max-[600px]:py-[20px] py-[60px] ">
          <Swiper
            navigation={true} // Enable navigation
            modules={[Navigation]}
            spaceBetween={30}
            className="mySwiper"
            breakpoints={{
              640: {
                slidesPerView: 2, // 2 slides for small devices
                spaceBetween: 20,
              },
              768: {
                slidesPerView: 3, // 3 slides for medium devices
                spaceBetween: 30,
              },
              1024: {
                slidesPerView: 4, // 4 slides for large devices
                spaceBetween: 30,
              },
            }}
          >
            {logos.map((logo) => {
              return (
                <SwiperSlide key={logo.id}>
                  <div className="border border-gray-300 flex justify-center items-center p-2 h-[150px] max-[600px]:h-[4rem]">
                    <img
                      src={logo.img}
                      className="w-full h-auto object-contain max-[600px]:w-[7rem] "
                      alt=""
                    />
                  </div>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Section3;

const logos = [
  {
    id: 1,
    img: logo1,
  },
  {
    id: 2,
    img: logo2,
  },
  {
    id: 3,
    img: logo3,
  },
  {
    id: 4,
    img: logo4,
  },
  {
    id: 5,
    img: logo1,
  },
  {
    id: 6,
    img: logo2,
  },
  {
    id: 7,
    img: logo3,
  },
  {
    id: 8,
    img: logo4,
  },
];
