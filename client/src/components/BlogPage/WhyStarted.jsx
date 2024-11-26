/* eslint-disable react/no-unescaped-entities */
import profileImg from "../../assets/blog/boy.png";
import graphImg from "../../assets/blog/graph.jpg";

export default function WhyStarted() {
  return (
    <section className="grid grid-cols-1 mx02-4 my-44 overflow-hidden shadow-md md:grid-cols-4 rounded-3xl md:mx-28 md:h-[50vh]">
      {/* Text Section */}
      <div className="flex flex-col justify-center col-span-3 p-6 bg-gray-50 md:p-12">
        <h3 className="mb-6 text-2xl font-bold md:text-5xl">
          Why I Started Blogi
        </h3>
        <p className="mb-6 text-lg text-gray-700 md:pr-64">
          My name is Jhon Doe and I am the founder of Blogi. Blogi is my
          passion, which is why I'm so excited to launch this new product...
        </p>
        <div className="flex items-center">
          <img
            src={profileImg}
            alt="Author"
            width={80}
            height={80}
            className="rounded-full"
          />
          <div className="ml-4">
            <p className="text-lg font-semibold">Robert Fox</p>
            <p className="text-sm text-gray-500">Feb 14, 2018</p>
          </div>
        </div>
      </div>

      {/* Image Section */}
      <div className="flex items-center justify-center p-6 bg-yellow-400 md:p-12">
        <div className="md:scale-150 md:-translate-x-20">
          <img
            src={graphImg}
            alt="Dashboard"
            className="object-contain rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
