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
    <div data-aos="fade-up" className="py-[50px] ">
      <Container>
        <Swiper slidesPerView={5} spaceBetween={30} className="mySwiper">
          {logos.map((logo) => {
            return (
              <SwiperSlide key={logo.id}>
                <img src={logo.img} className="object-contain " alt="" />
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
