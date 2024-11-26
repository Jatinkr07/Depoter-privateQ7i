import { Container } from "react-bootstrap";
import pallet from "../../assets/home/pallet.png";

const Section3 = () => {
  return (
    <Container>
      <div
        data-aos="fade-up"
        className="w-full py-5 my-5 text-center section3 section-heading"
      >
        <p>
          Transforming Warehouse Management with Unmatched Efficiency <br /> and
          Operational Innovation
        </p>
        <div className="w-[80%] my-0 mx-auto mt-5 counter-container gap-5">
          <div data-aos="fade-up" className="w-full">
            <h1 className="text-[34px] md:text-[55px]  font-[700]">45%</h1>
            <img src={pallet} className="mx-auto my-0" alt="" />
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet <br /> consectetur
            </p>
          </div>
          <div data-aos="fade-up" className="w-full">
            <h1 className="text-[34px] md:text-[55px] font-[700]">15K+</h1>
            <img src={pallet} className="mx-auto my-0" alt="" />
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet <br /> consectetur
            </p>
          </div>
          <div data-aos="fade-up" className="w-full">
            <h1 className="text-[34px] md:text-[55px] font-[700]">1B+</h1>
            <img src={pallet} className="mx-auto my-0" alt="" />
            <p className="text-[16px]">
              Lorem ipsum dolor sit amet <br /> consectetur
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;
