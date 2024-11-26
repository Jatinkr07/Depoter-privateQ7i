import { HiOutlineSparkles, HiOutlineArrowSmRight } from "react-icons/hi";

export default function Banner() {
  return (
    <section className="min-h-[70vh] flex flex-col items-center justify-center  px-4 py-24 bg-[#FDF6F0]   ">
      <div className="container max-w-[1200px] mx-auto flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#F5A623] text-black mb-8">
          <HiOutlineSparkles className="w-4 h-4" />
          <span className="text-sm font-medium">Fulfillment Services</span>
        </div>

        <h1 className="text-xl md:text-5xl lg:text-6xl font-bold tracking-tight text-gray-900 max-w-[900px] mb-6">
          Efficient Fulfillment Solutions Designed to Meet Business Needs
        </h1>

        <p className="text-base md:text-xl text-gray-600 max-w-[800px] mb-12">
          Our fulfillment solutions are crafted to meet the unique demands of
          your business, providing efficient, reliable service every step of the
          way. With a focus on speed and customization, we help ensure a
          seamless experience from order to delivery.
        </p>
        <div className="flex flex-wrap items-center">
          <button
            size="lg"
            className="bg-[#F5A623] hover:bg-[#E69512] text-black font-medium md:px-4 md:py-2.5 text-lg  flex items-center px-3 py-1"
          >
            Explore
            <span className="ml-2">
              <HiOutlineArrowSmRight className="w-5 h-5" />
            </span>
          </button>
        </div>
      </div>
    </section>
  );
}
