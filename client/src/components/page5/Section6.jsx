// import React from "react";
// import Container from "../../components/global/Container";
// import bg1 from "../../assets/page5/sec6-bg.png";
// import bg2 from "../../assets/page5/sec7-bg.png";
// import bg3 from "../../assets/page5/sec8-bg.png";

// const Section6 = () => {
//   return (
//     <div className="w-full py-[100px] max-[600px]:py-[1rem] max-[600px]:hidden">
//       <Container>
//         <div className="w-full text-center mb-10 max-[600px]:-mb-10">
//           <h2 className="text-[#33333] max-[600px]:text-[1.2rem] text-[36px] sm:text-[48px] lg:text-[62px] font-[600]">
//             How Depoter Elevates Your Multichannel <br /> Fulfillment Strategy
//           </h2>
//           <h1 className="text-[20px] max-[600px]:text-[0.8rem] max-[600px]:pt-2 sm:text-[24px] lg:text-[28px] text-[#33333] font-[600] mt-2 mb-10">
//             Unlock the Power of logistics for an Enhanced and Seamless logistics
//             experience.
//           </h1>
//         </div>

//         <div>
//           {/* Section 1 */}
//           <div className="my-10">
//             <img src={bg1} className="w-full object-cover" alt="" />
//             <div className="flex flex-col md:flex-row justify-between py-5">
//               <div className="md:w-[40%] mb-2 md:mb-0">
//                 <h3 className="font-[600] max-[600px]:text-[1.2rem] text-[36px] sm:text-[44px] lg:text-[52px]">
//                   Handling Seasonal <br className="max-[600px]:hidden"/> Peaks and Promotions
//                 </h3>
//               </div>
//               <div className="md:w-[50%] text-[#454545]">
//                 <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[20px] lg:text-[21px]">
//                   Depoter specializes in managing seasonal peaks and promotions,
//                   ensuring your fulfillment operations remain efficient during
//                   high-demand periods. Our agile solutions enable rapid scaling
//                   of resources and streamlined processes, helping you meet
//                   increased order volumes while maintaining exceptional service
//                   levels.
//                 </p>
//                 <button className="bg-black py-2 px-5 rounded-lg text-white mt-4 max-[600px]:-mt-12">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Section 2 */}
//           <div className="my-10">
//             <img src={bg2} className="w-full object-cover" alt="" />
//             <div className="flex flex-col md:flex-row justify-between py-5">
//               <div className="md:w-[40%] mb-2 md:mb-0">
//                 <h3 className="font-[600] max-[600px]:text-[1.2rem] text-[36px] sm:text-[44px] lg:text-[52px]">
//                   Handling Seasonal <br className="max-[600px]:hidden"/> Peaks and Promotions
//                 </h3>
//               </div>
//               <div className="md:w-[50%] text-[#454545]">
//                 <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[20px] lg:text-[21px]">
//                   Depoter specializes in managing seasonal peaks and promotions,
//                   ensuring your fulfillment operations remain efficient during
//                   high-demand periods. Our agile solutions enable rapid scaling
//                   of resources and streamlined processes, helping you meet
//                   increased order volumes while maintaining exceptional service
//                   levels.
//                 </p>
//                 <button className="bg-black py-2 px-5 rounded-lg text-white mt-4 max-[600px]:-mt-12">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>

//           {/* Section 3 */}
//           <div className="my-10">
//             <img src={bg3} className="w-full object-cover" alt="" />
//             <div className="flex flex-col md:flex-row justify-between py-5">
//               <div className="md:w-[40%] mb-2 md:mb-0">
//                 <h3 className="font-[600] max-[600px]:text-[1.2rem] text-[36px] sm:text-[44px] lg:text-[52px]">
//                   Handling Seasonal <br className="max-[600px]:hidden"/> Peaks and Promotions
//                 </h3>
//               </div>
//               <div className="md:w-[50%] text-[#454545]">
//                 <p className="text-[18px] max-[600px]:text-[0.8rem] sm:text-[20px] lg:text-[21px]">
//                   Depoter specializes in managing seasonal peaks and promotions,
//                   ensuring your fulfillment operations remain efficient during
//                   high-demand periods. Our agile solutions enable rapid scaling
//                   of resources and streamlined processes, helping you meet
//                   increased order volumes while maintaining exceptional service
//                   levels.
//                 </p>
//                 <button className="bg-black py-2 px-5 rounded-lg text-white mt-4 max-[600px]:-mt-12">
//                   Contact Us
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       </Container>
//     </div>
//   );
// };

// export default Section6;
import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { FiArrowUpRight } from "react-icons/fi";
import Container from "../global/Container";
import bg1 from "../../assets/page5/sec6-bg.png";
import bg2 from "../../assets/page5/sec7-bg.png";
import bg3 from "../../assets/page5/sec8-bg.png";

const Section6 = () => {
  return (
    <div className="bg-white  sm:p-4">
      {/* <Container> */}

      <TextParallaxContent
        imgUrl={bg1}
        subheading="Collaborate"
        heading="Handling Seasonal Peaks and Promotions"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-semibold md:col-span-5">
            Achieve Improved Operational Efficiency Levels
          </h2>
          <div className="col-span-1 md:col-span-7">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
              Depoter specializes in managing seasonal peaks and promotions,
              ensuring your fulfillment operations remain efficient during
              high-demand periods. Our agile solutions enable rapid scaling of
              resources and streamlined processes, helping you meet increased
              order volumes while maintaining exceptional service levels.
            </p>

            <button className="w-full rounded bg-neutral-900 px-9 py-3 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
              Contact us <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={bg2}
        subheading="Quality"
        heading="Never compromise."
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-semibold md:col-span-5">
          Enjoy Flexible Scalability Options for Growth
          </h2>
          <div className="col-span-1 md:col-span-7">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            As your business expands, so do your fulfillment needs. Our scalable solutions allow you to easily adapt to increased order volumes, product lines, or new sales channels without compromising on service quality.
            </p>

            <button className="w-full rounded bg-neutral-900 px-9 py-3 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
              Contact us <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
      </TextParallaxContent>
      <TextParallaxContent
        imgUrl={bg3}
        subheading="Modern"
        heading="Dress for the best."
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 gap-8 px-4 pb-24 pt-12 md:grid-cols-12">
          <h2 className="col-span-1 text-3xl font-semibold md:col-span-5">
          Access Real-Time Analytics and Insights
          </h2>
          <div className="col-span-1 md:col-span-7">
            <p className="mb-4 text-xl text-neutral-600 md:text-2xl">
            With our advanced technology, you can access real-time analytics to monitor sales, inventory levels, and fulfillment performance across all channels. This data-driven approach helps you make informed decisions and optimize your operations for better results.
            </p>

            <button className="w-full rounded bg-neutral-900 px-9 py-3 text-xl text-white transition-colors hover:bg-neutral-700 md:w-fit">
              Contact us <FiArrowUpRight className="inline" />
            </button>
          </div>
        </div>
      </TextParallaxContent>
      {/* </Container> */}
    </div>
  );
};

const IMG_PADDING = 12;

const TextParallaxContent = ({ imgUrl, subheading, heading, children }) => {
  return (
    <div
      style={{
        paddingLeft: IMG_PADDING,
        paddingRight: IMG_PADDING,
      }}
    >
      <div className="relative h-[150vh]">
        <StickyImage imgUrl={imgUrl} />
        <OverlayCopy heading={heading} subheading={subheading} />
      </div>
      {children}
    </div>
  );
};

const StickyImage = ({ imgUrl }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${imgUrl})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "center",
        height: `calc(100vh - ${IMG_PADDING * 2}px)`,
        top: IMG_PADDING,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden rounded-3xl"
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{
          opacity,
        }}
      />
    </motion.div>
  );
};

const OverlayCopy = ({ subheading, heading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.3, 0.8, 0.9], [0, 1, 0]);

  return (
    <motion.div
      style={{
        y,
        opacity,
      }}
      ref={targetRef}
      className="absolute left-0 top-0 flex h-screen w-full flex-col items-center justify-center text-white"
    >
      <p className="mb-2 text-center text-xl md:mb-4 md:text-3xl">
        {subheading}
      </p>
      <p className="text-center text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};


export default Section6;
