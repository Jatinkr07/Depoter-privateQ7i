import Container from "../global/Container";
import img1 from "../../assets/page1/section10-img1.png";
import img2 from "../../assets/page1/section10-img2.png";
import img3 from "../../assets/page1/section10-img3.png";
import { useRef } from "react";
import { useScroll } from "framer-motion";
import { projects } from "../global/data";
import Card from "../global/Card";

const Section10 = () => {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ['start start', 'end end']
  })
  return (
    // <div className="py-[50px] md:py-[100px]">
    //   <Container>
    //     {/* Top Section */}
    //     <div className="mb-12 text-center">
    //       <h3 className="mb-4 max-[600px]:text-[1.5rem] text-base font-bold md:text-4xl">
    //         How Depoter will <br /> transform your business
    //       </h3>
    //       <p className="text-lg max-[600px]:text-sm text-gray-700 md:text-xl">
    //         Unlock the Power of logistics for an Enhanced and Seamless logistics
    //         <br />
    //         experience.
    //       </p>
    //     </div>

    //     <div className="space-y-10 md:space-y-20">
    //       {data.map((list) => {
    //         return (
    //           <section
    //             key={list.id}
    //             style={{
    //               backgroundColor: list.bgColor,
    //             }}
    //             className="flex flex-col items-center p-6 mx-4 rounded-lg shadow md:flex-row md:p-12"
    //           >
    //             {/* Text Content */}
    //             <div className="mb-6 text-center md:w-1/2 md:mb-0 md:pr-6 md:text-left">
    //               <h2 className="mb-4 max-[600px]:text-[1.5rem] text-xl font-semibold md:text-2xl">
    //                 {list.title}
    //               </h2>
    //               <p className="text-base max-[600px]:text-sm text-gray-700 md:text-lg">
    //                 {list.para}
    //               </p>
    //             </div>

    //             {/* Image Content */}
    //             <div className="md:w-1/2">
    //               <img
    //                 src={list.img}
    //                 alt="Customer Experience"
    //                 className="w-full md:w-[70%] object-cover h-auto rounded-lg shadow-md mx-auto md:mx-0"
    //               />
    //             </div>
    //           </section>
    //         );
    //       })}
    //     </div>
    //   </Container>
    // </div>
    <main ref={container} className="relative mt-[50px]">
    {
      projects.map( (project, i) => {
        const targetScale = 1 - ( (projects.length - i) * 0.05);
        return <Card key={`p_${i}`} i={i} {...project} progress={scrollYProgress} range={[i * .25, 1]} targetScale={targetScale}/>
      })
    }
  </main>
  );
};



export default Section10;
