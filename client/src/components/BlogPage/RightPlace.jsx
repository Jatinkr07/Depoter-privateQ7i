import { useEffect } from "react";
import googleImg from "../../assets/blog/google.jpeg";
import uberImg from "../../assets/blog/uber.jpeg";
import santanderImg from "../../assets/blog/santander (1).jpeg";
import airbnbImg from "../../assets/blog/airbnb.jpeg";
import lyftImg from "../../assets/blog/lyft.jpeg";
import sonyImg from "../../assets/blog/sony.jpeg";

export default function RightPlace() {
  useEffect(() => {
    const logos = document.querySelectorAll(".logo");

    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("opacity-100", "translate-y-0");
          entry.target.classList.remove("opacity-0", "translate-y-10");
          observer.unobserve(entry.target);
        }
      });
    }, options);

    logos.forEach((logo) => observer.observe(logo));

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen px-4 bg-white md:-mt-80 ">
      <h1 className="text-xl font-semibold text-gray-800 md:text-4xl">
        You Are In The Right Place
      </h1>
      <p className="mt-2 text-gray-500">
        Some of the best teams are already transforming their management
      </p>
      <div className="flex flex-wrap justify-center gap-6 mt-10">
        <div
          className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md opacity-0 md:w-32 md:h-32 logo "
          style={{ transitionDelay: "0.1s" }}
        >
          <img
            src={googleImg}
            alt="Google logo"
            className="object-contain w-16 h-16 md:w-[92px] md:h-[92px]"
          />
        </div>
        <div
          className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md opacity-0 md:translate-y-40 md:-translate-x-12 md:w-24 md:h-24 logo"
          style={{ transitionDelay: "0.2s" }}
        >
          <img
            src={uberImg}
            alt="Lyft logo"
            className="object-contain w-16 h-16 md:w-12 md:h-12"
          />
        </div>
        <div
          className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md opacity-0 md:w-24 md:h-24 logo md:translate-x-20 md:translate-y-12"
          style={{ transitionDelay: "0.3s" }}
        >
          <img
            src={lyftImg}
            alt="Airbnb logo"
            className="object-contain w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <div
          className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md opacity-0 md:w-28 md:translate-y-56 md:-translate-x-28 md:h-28 logo"
          style={{ transitionDelay: "0.4s" }}
        >
          <img
            src={santanderImg}
            alt="santander logo"
            className="object-contain w-16 h-16 md:w-20 md:h-20"
          />
        </div>
        <div
          className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md opacity-0 md:w-20 md:h-20 logo md:translate-y-40 "
          style={{ transitionDelay: "0.5s" }}
        >
          <img
            src={sonyImg}
            alt="Santander logo"
            className="object-contain w-16 h-16 md:w-12 md:h-12"
          />
        </div>
        <div
          className="flex items-center justify-center w-24 h-24 bg-white rounded-full shadow-md opacity-0 md:w-32 md:h-32 logo md:translate-x-12"
          style={{ transitionDelay: "0.6s" }}
        >
          <img
            src={airbnbImg}
            alt="Sony logo"
            className="object-contain w-16 h-16 md:w-20 md:h-20"
          />
        </div>
      </div>
    </div>
  );
}
