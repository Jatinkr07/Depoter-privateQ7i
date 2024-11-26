import { Container } from "react-bootstrap";

import box1Img from "../../assets/home/section4-box1.png";
import box2Img1 from "../../assets/home/box2-animation1.gif";
import box2Img2 from "../../assets/home/box2-animation2.gif";
import box3Img from "../../assets/home/box3-animation.gif";
import border from "../../assets/home/section4-center-border.png";

const Section4 = () => {
  return (
    <div data-aos="fade-up" className="py-[100px] pb-[80px]">
      <Container>
        <div className="w-full pb-10 -mt-16 text-center md:mt-0 ">
          <h1
            className="text-[1.5rem] font-semibold md:text-5xl "
            style={{
              lineHeight: "60px",
            }}
          >
            Streamline Your Supply Chain <br /> with Depoter
          </h1>
          <p className="text-[0.8rem] md:text-base mt-3 text-[#454545]">
            Create Your Online Shop Just Complete Three Steps & Enjoy.
          </p>
        </div>
        {/* bottom content */}
        <div className="flex flex-col items-start w-full px-4 -space-y-4 md:space-y-8 supply-chain-container">
          {/* box1 */}
          <div className="absolute p-2 translate-x-6 bg-white rounded-full -translate-y-[495px] md:translate-x-5 md:-translate-y-[26px] hidden md:block">
            <div className="flex items-center justify-center w-16 h-16 rounded-full bg-blue-50">
              <span className="text-3xl font-bold text-blue-500">1</span>
            </div>
          </div>
          <div className="text-center text-[#454545]  ">
            <div className="p-5 home-supplyChange-box">
              <img
                src={box1Img}
                className="object-contain w-full scale-125 border "
                alt=""
              />
            </div>

            <p className="font-[600] my-2">1.Connect with us</p>
            <p className="text-[#454545]">
              Connect your store, import <br /> your products, then send us your
              inventory.
            </p>
          </div>{" "}
          <div className="flex items-center justify-center md:h-full md:pb-[180px]">
            <img
              src={border}
              className="md:mx-auto mt-0 md:h-[100px] md:block hidden md:w-50 supply-border"
              alt=""
            />
          </div>
          {/* box2 */}
          <div className="text-center ">
            <div className="flex justify-between gap-1 p-5 px-2 mt-12 home-supplyChange-box md:mt-0 ">
              {/* Efficient Storage Box */}
              <div className="absolute p-2 md:-translate-x-14 bg-white rounded-full -translate-x-[88px] -translate-y-[115px] md:-translate-y-[110px] hidden md:block">
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-purple-50">
                  <span className="text-3xl font-bold text-purple-500">2</span>
                </div>
              </div>

              <div className="grid grid-cols-2 p-2 space-x-2 bg-white rounded-md">
                <div className="flex flex-col items-center ">
                  <img
                    src={box2Img1}
                    className="object-cover border w-36 rounded-xl "
                    alt="Efficient Storage"
                  />
                  <span className="text-base sm:text-sm md:text-sm">
                    Efficient Storage
                  </span>
                </div>

                {/* Safe Storage Box */}
                <div className="flex flex-col items-center ">
                  <img
                    src={box2Img2}
                    className="h-[63px] border w-36 rounded-xl"
                    alt="Safe Storage"
                  />
                  <span className="text-base sm:text-sm md:text-sm">
                    Safe Storage
                  </span>
                </div>
              </div>
            </div>

            <div className="pb-12 md:pb-0">
              <div className="md:-mt-8">
                {" "}
                <p className="font-[600] my-2 ">2. Store & Manage</p>
                <p className="text-sm sm:text-base md:text-lg lg:text-base text-[#454545]">
                  Connect your store, import <br /> your products, then send us
                  your inventory.
                </p>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-center md:h-full md:pb-[180px]">
            <img
              src={border}
              className="mx-auto mt-0 md:h-[100px] md:block hidden md:w-50 supply-border"
              alt=""
            />
          </div>
          {/* Box 3 */}
          <div
            style={{
              background: "linear-gradient(to bottom, #f5f5f7, white, white)",
            }}
            className="relative   w-full max-w-[350px] md:max-w-[350px]  flex flex-col items-center text-center"
          >
            <div className="absolute p-2 -translate-x-[54px] bg-white rounded-full -translate-y-[58px] hidden md:block ">
              <div className="flex items-center justify-center w-16 h-16 rounded-full bg-yellow-50">
                <span className="text-3xl font-bold text-orange-500">3</span>
              </div>
            </div>

            <div className="flex flex-wrap justify-between w-full p-3 pt-4 border-b md:h-[150px]  bg-slate-100  ">
              <div className="p-2 mx-2 text-left bg-white rounded-lg">
                <span className="text-sm md:text-base md:mt-2">
                  Fast Delivery
                </span>

                <div className="flex items-center justify-between w-full mb-4 f">
                  <div className="text-left text-[12px]">
                    Your Product is on its way!
                  </div>
                  <div>
                    <img
                      src={box3Img}
                      className="object-contain h-[100px]"
                      alt="Fast Delivery"
                    />
                  </div>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:mt-4">
              <p className="font-[600] my-2">3. Fast Delivery</p>
              <p className="text-sm text-[#454545] line-clamp-2">
                Receive your products promptly after storing them, with
                efficient delivery.
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section4;
