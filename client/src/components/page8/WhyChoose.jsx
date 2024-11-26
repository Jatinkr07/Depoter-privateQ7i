/* eslint-disable react/no-unescaped-entities */
import Marquee from "react-fast-marquee";
import HoltzmanImg from "../../assets/page8/img6.png";
import ScalerImg from "../../assets/page8/img2.png";
import GlossierImg from "../../assets/page8/img3.png";
import GatheringsImg from "../../assets/page8/img4.png";
import AsanaImg from "../../assets/page8/img5.png";

export default function WhyChoose() {
  const images = [
    { src: HoltzmanImg, alt: "Holtzman" },
    { src: ScalerImg, alt: "Scaler" },
    { src: GlossierImg, alt: "Glossier" },
    { src: GatheringsImg, alt: "Gatherings" },
    { src: AsanaImg, alt: "Asana" },
    { src: HoltzmanImg, alt: "Holtzman" },
    { src: ScalerImg, alt: "Scaler" },
    { src: GlossierImg, alt: "Glossier" },
    { src: GatheringsImg, alt: "Gatherings" },
    { src: AsanaImg, alt: "Asana" },
  ];

  return (
    <section className="px-4 py-16 mx-auto max-w-7xl">
      <h2 className="mb-12 text-2xl font-medium text-center text-gray-900">
        Industry leaders trust Depoter to grow their revenue
      </h2>

      <Marquee speed={50} gradient={false} className="mySwiper">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={img.alt}
            className="object-contain h-16 mx-8 transition-transform duration-300 sm:h-24 hover:scale-110"
          />
        ))}
      </Marquee>

      <div className="grid items-start gap-12 mt-12 md:grid-cols-2">
        <h2 className="text-lg font-bold tracking-tight text-gray-900 md:text-4xl">
          Why To Choose Depoter's Fulfillment Service
        </h2>
        <p className="-mt-12 text-sm leading-relaxed text-gray-600 md:text-lg md:mt-0 ">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          varius enim in eros elementum tristique. Duis cursus, mi quis viverra
          ornare, eros dolor interdum nulla, ut
        </p>
      </div>
    </section>
  );
}
