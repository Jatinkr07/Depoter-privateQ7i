/* eslint-disable react/no-unescaped-entities */
import serviceImg1 from "../../assets/page8/services1.png";
import serviceImg2 from "../../assets/page8/services2.png";
import serviceImg3 from "../../assets/page8/services3.png";
import serviceImg4 from "../../assets/page8/services4.png";
import serviceImg5 from "../../assets/page8/services5.png";
import serviceImg6 from "../../assets/page8/services6.png";

export default function ServicesSection() {
  return (
    <section className="px-4 py-16 -mt-24 md:mt-0">
      <div className="mx-auto max-w-7xl">
        {/* Header */}
        <div className="mb-16 text-center">
          <div className="inline-block px-6 py-2 rounded-full bg-[#FFF8E7] text-[#F5A623] font-medium mb-6">
            Services
          </div>
          <h2 className="text-xl font-bold sm:text-4xl md:text-5xl">
            Top Fulfillment Services Offered
            <br />
            By <span className="text-[#F5A623]">Depoter</span>
          </h2>
        </div>

        {/* Services Grid */}
        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {/* Service Cards */}
          {[
            {
              img: serviceImg1,
              title: "B2B Fulfillment",
              description:
                "Designed to support large-volume shipments for business needs, our B2B fulfillment services ensure your products reach retailers, wholesalers, or other businesses quickly and efficiently.",
            },
            {
              img: serviceImg2,
              title: "B2C Fulfillment",
              description:
                "Depoter provides reliable B2C fulfillment solutions for businesses in the UAE. Our e-commerce fulfillment services ensure efficient storage, picking, packing, and delivery to meet the demands of growing brands.",
            },
            {
              img: serviceImg3,
              title: "Multichannel Ecommerce",
              description:
                "Depoter's multichannel ecommerce fulfillment services offer seamless logistics through our range multichannel fulfilment centre. We manage multi channel order fulfilment efficiently, ensuring accuracy across all sales platforms.",
            },
            {
              img: serviceImg4,
              title: "FBA Fulfillment",
              description:
                "Depoter’s FBA fulfillment services streamline your e-commerce operations by seamlessly integrating with Amazon's Fulfillment By Amazon (FBA) program. We manage storage, packing, and shipping, ensuring quick and accurate deliveries.",
            },
            {
              img: serviceImg5,
              title: "FBN Fulfillment",
              description:
                "Depoter’s Fulfillment by Noon (FBN) services provide a comprehensive logistics solution for e-commerce businesses in the UAE. We handle storage, packing, and shipping, ensuring efficient order processing.",
            },
            {
              img: serviceImg6,
              title: "Warehousing",
              description:
                "Depoter offers exceptional warehousing services, including tailored warehouse fulfillment services for e-commerce businesses. Our warehouse distribution services ensure efficient order processing and delivery.",
            },
          ].map((service, index) => (
            <div
              key={index}
              className={`p-6 rounded-xl ${
                index % 2 === 0 ? "bg-[#F8FAFC]" : "bg-[#FDF6F0]"
              }`}
            >
              <img
                src={service.img}
                alt={`${service.title} illustration`}
                className="object-cover w-full h-48 mb-6 rounded-2xl"
              />
              <div className="inline-block px-3 py-1 mb-4 text-sm font-medium bg-gray-200 rounded-md">
                {service.title}
              </div>
              <h3 className="mb-3 text-xl font-semibold sm:text-2xl">
                {service.title}
              </h3>
              <p className="mb-6 text-sm text-gray-600 sm:text-base">
                {service.description}
              </p>
              <a href="#" className="font-medium text-black hover:underline">
                Learn more
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
