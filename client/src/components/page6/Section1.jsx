import React from "react";
import Container from "../../components/global/Container";
import logo1 from "../../assets/page6/sec1-logo1.png";
import logo2 from "../../assets/page6/sec1-logo2.png";
import logo3 from "../../assets/page6/sec1-logo3.png";
import logo4 from "../../assets/page6/sec1-logo4.png";
import logo5 from "../../assets/page6/sec1-logo5.png";

import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Navigation } from "swiper/modules";

const logos = [
  { id: 1, img: logo1 },
  { id: 2, img: logo2 },
  { id: 3, img: logo3 },
  { id: 4, img: logo4 },
  { id: 5, img: logo5 },
];

const Section1 = () => {
  return (
    <Container>
      <div className="px-4 md:px-10 mt-[100px] max-[600px]:mt-2">
        <div className="w-full text-center mb-8 max-[600px]:mb-2">
          <h3 className="text-xl max-[600px]:text-[1rem] text-[#333333]">
            Industry leaders trust Depoter to grow their revenue
          </h3>
        </div>
        <div className="w-full py-[20px] max-[600px]:py-[0.2rem]">
          <Swiper
            navigation={true}
            modules={[Navigation]}
            slidesPerView={1} // Default for mobile
            spaceBetween={30}
            breakpoints={{
              640: {
                slidesPerView: 2, // At least 2 for small desktops
              },
              768: {
                slidesPerView: 3, // At least 3 for larger tablets
              },
              1024: {
                slidesPerView: 4, // 4 images on larger desktops
              },
            }}
            className="mySwiper"
          >
            {logos.map((logo) => (
              <SwiperSlide key={logo.id}>
                <div className="flex justify-center items-center p-2 h-[150px]">
                  <img
                    src={logo.img}
                    alt={`Logo ${logo.id}`}
                    className="max-h-full max-w-full object-contain"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </Container>
  );
};

export default Section1;
