import { Container } from "react-bootstrap";
import Marquee from "react-fast-marquee";
import TestimonialCard from "./TestimonialCard";

const Section11 = () => {
  return (
    <div data-aos="fade-up" className="w-full py-[100px]">
      {/* Heading */}
      <Container>
        <div className="w-full -mt-40 text-center md:mt-0 ">
          <h1
            className="text-[1.5rem] font-semibold md:text-5xl"
            style={{ lineHeight: "3.5rem" }}
          >
            Customers are our valuable <br /> asset for you & us
          </h1>
          <p className="mt-3 max-[600px]:text-[0.8rem] text-base md:text-lg">
            Valuing customers as our most valuable asset, we prioritize your{" "}
            <br />
            satisfaction and success in every interaction.
          </p>
        </div>
      </Container>

      {/* content */}
      <div className="w-full mt-10 -mb-32 md:mb-0">
        <Marquee pauseOnHover={true}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Marquee>
        <br />
        <Marquee pauseOnHover={true} speed={80}>
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
          <TestimonialCard />
        </Marquee>
      </div>
    </div>
  );
};

export default Section11;
