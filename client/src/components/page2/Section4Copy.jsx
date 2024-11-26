import icon1 from "../../assets/icons/icon1.png";
import icon2 from "../../assets/icons/icon2.png";
import icon3 from "../../assets/icons/icon3.png";
import icon4 from "../../assets/icons/icon4.png";
import icon5 from "../../assets/icons/icon5.png";
import icon6 from "../../assets/icons/icon6.png";
import icon7 from "../../assets/icons/icon7.png";
import icon8 from "../../assets/icons/icon8.png";
import icon9 from "../../assets/icons/icon9.png";
import icon10 from "../../assets/icons/icon10.png";
import bg1 from "../../assets/icons/Ellipse 90.png";
import bg2 from "../../assets/icons/Rectangle 479.png";
import bg3 from "../../assets/icons/Group 467.png";
import bg4 from "../../assets/icons/Polygon 38.png";
import bg5 from "../../assets/icons/Polygon 37.png";
import { useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

export default function Section4Copy() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      const scrollAmount = 300;
      scrollRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const services = [
    { title: "Pet Supplies", bg: bg1, iconTop: icon1, iconBottom: icon2 },
    { title: "Toys & Games", bg: bg5, iconTop: icon3, iconBottom: icon4 },
    { title: "Cosmetics", bg: bg4, iconTop: icon5, iconBottom: icon6 },
    { title: "Food & Drink", bg: bg2, iconTop: icon7, iconBottom: icon8 },
    { title: "Fashion Order", bg: bg3, iconTop: icon9, iconBottom: icon10 },
  ];

  return (
    <section className="container px-4 py-16 mx-auto">
      <div className="max-w-3xl mx-auto mb-12 text-center">
        <h2 className="mb-6 max-[600px]:mb-2 text-4xl max-[600px]:text-[1.5rem] font-bold md:text-5xl">
          We can help with
        </h2>
        <p className="text-[0.8rem] text-muted-foreground">
          We can assist with fulfillment across various industries, including
          pet supplies and more
        </p>
      </div>

      <div className="relative">
        <button
          className="absolute left-0 z-10 w-12 h-12 p-2 -translate-y-1/2 bg-gray-100 border rounded-full top-1/2 bg-background"
          onClick={() => scroll("left")}
        >
          <FaArrowLeft className="w-4 h-4 ml-2" />
        </button>

        <div
          ref={scrollRef}
          className="flex gap-6 py-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {services.map((service, index) => (
            <div key={index} className="flex-shrink-0 snap-start ">
              <div className="relative w-64 aspect-[1.15/1]">
                <div className="absolute inset-0">
                  <svg viewBox="0 0 100 100" className="w-full h-full">
                    <polygon
                      points="50 0, 93.3 25, 93.3 75, 50 100, 6.7 75, 6.7 25"
                      className="stroke-[0.2] fill-gray-50 stroke-amber-500"
                    />
                  </svg>
                  <div className="flex items-center justify-center">
                    <img
                      src={service.bg}
                      alt="Background Shape"
                      className="absolute -translate-y-36 md:-translate-y-36"
                    />
                  </div>
                </div>

                <div className="absolute inset-0 flex flex-col items-center justify-center p-6">
                  <div className="relative w-full h-full mb-4">
                    <img
                      src={service.iconTop}
                      alt="Top Icon"
                      className="absolute w-8 h-8 md:top-4 top-4 right-12 md:right-16"
                    />
                    <img
                      src={service.iconBottom}
                      alt="Bottom Icon"
                      className="absolute w-8 h-8 md:-bottom-4 md:left-12 -bottom-4 left-12"
                    />
                  </div>

                  <div className="text-center">
                    <h3 className="font-semibold">{service.title}</h3>
                    <p className="text-sm text-muted-foreground">Fulfillment</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <button
          className="absolute right-0 z-10 w-12 h-12 p-2 -translate-y-1/2 border rounded-full top-1/2 bg-background bg-gray-50"
          onClick={() => scroll("right")}
        >
          <FaArrowRight className="w-4 h-4 ml-2" />
        </button>
      </div>
    </section>
  );
}
