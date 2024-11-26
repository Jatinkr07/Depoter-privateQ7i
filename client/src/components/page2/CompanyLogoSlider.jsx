import React from "react";
import logo1 from "../../assets/home/company1.png";
import logo2 from "../../assets/home/company2.png";
import logo3 from "../../assets/home/company3.png";
import logo4 from "../../assets/home/company4.png";
import logo5 from "../../assets/home/company5.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Container } from "react-bootstrap";

const CompanyLogoSlider = () => {
  return (
    <div data-aos="fade-up" className="py-[20px]">
      <Container>
        {/* top */}
        <div className="text-center mb-20 max-[600px]:mb-10">
          <h3 className="text-[50px] font-[700] max-[600px]:text-[1.5rem] ">They are talking about us</h3>
        </div>
        <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
          {logos.map((logo) => {
            return (
              <SwiperSlide>
                <img src={logo.img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>
      </Container>
    </div>
  );
};

export default CompanyLogoSlider;

const logos = [
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
    img: logo5,
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
    img: logo5,
  },
];
