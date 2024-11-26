import { Container } from "react-bootstrap";
import pallet from "../../assets/home/pallet.png";

const Section2 = () => {
  return (
    <Container>
      <div
        data-aos="fade-up"
        className="w-full my-5 text-center section3 section-heading"
      >
        <p className="mb-6 text-[1.1rem] font-semibold sm:text-xl md:text-2xl lg:text-3xl">
          Transforming Warehouse Management with Unmatched Efficiency <br />
          and Operational Innovation
        </p>

        {/* Single Grid Layout for All Boxes */}
        <div className="grid grid-cols-2 gap-8 mt-5 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
          {/* Box 1 */}
          <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] font-bold">
              1st
            </h1>
            <img
              src={pallet}
              className="mx-auto my-3 w-[60px] sm:w-[80px] md:w-[100px]"
              alt="Pallet"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              3rd Party Dark Store In <br /> MENA
            </p>
          </div>

          {/* Box 2 */}
          <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] font-bold">
              2M+
            </h1>
            <img
              src={pallet}
              className="mx-auto my-3 w-[60px] sm:w-[80px] md:w-[100px]"
              alt="Pallet"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Products Shipped <br />
              so far
            </p>
          </div>

          {/* Box 3 */}
          <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] font-bold">
              99.98%
            </h1>
            <img
              src={pallet}
              className="mx-auto my-3 w-[60px] sm:w-[80px] md:w-[100px]"
              alt="Pallet"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Picking Accuracy
            </p>
          </div>

          {/* Box 4 */}
          <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] font-bold">
              100+
            </h1>
            <img
              src={pallet}
              className="mx-auto my-3 w-[60px] sm:w-[80px] md:w-[100px]"
              alt="Pallet"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Omni Channel <br /> Integrations
            </p>
          </div>

          {/* Box 5 */}
          <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] font-bold">
              15K+
            </h1>
            <img
              src={pallet}
              className="mx-auto my-3 w-[60px] sm:w-[80px] md:w-[100px]"
              alt="Pallet"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Delivery Partners <br /> integration
            </p>
          </div>

          {/* Box 6 */}
          <div data-aos="fade-up" className="flex flex-col items-center w-full">
            <h1 className="text-[34px] sm:text-[45px] md:text-[55px] font-bold">
              1000+
            </h1>
            <img
              src={pallet}
              className="mx-auto my-3 w-[60px] sm:w-[80px] md:w-[100px]"
              alt="Pallet"
            />
            <p className="text-[16px] sm:text-[18px] md:text-[20px]">
              Clients and growing
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
