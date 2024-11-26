/* eslint-disable react/no-unescaped-entities */

import img1 from "../../assets/home/section12.jpeg";
import img2 from "../../assets/home/section13.jpeg";

export default function SectionLogistics() {
  return (
    <div className="w-full py-12 pt-0 space-y-12 md:-space-y-0.5">
      {/* First Section */}
      <section className="container grid gap-8 px-4 mx-auto md:flex md:items-center">
        {/* Left (Text) */}
        <div className="space-y-4 md:w-1/2">
          <h2
            className="text-xl font-semibold tracking-tight lg:text-4xl leading-[2rem]  md:leading-[3.5rem]"
            // style={{
            //   lineHeight: "3.5rem",
            // }}
          >
            Last-Mile Delivery: Ensuring Timely and Reliable Deliveries
          </h2>
          <p className="text-lg text-muted-foreground">
            In the realm of last-mile delivery, Depoter excels in providing
            timely and reliable shipping solutions. The company has a network of
            strategic partnerships with transportation providers, allowing for
            quick and efficient deliveries across Dubai and the broader region.
          </p>
        </div>
        {/* Divider */}
        {/* <div className="hidden md:block w-[36px] bg-gray- h-[400px] mx-auto" />{" "} */}
        <div className="relative h-[400px] overflow-hidden md:w-1/2">
          <img
            src={img1}
            alt="Warehouse worker with tablet"
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
      </section>

      {/* Second Section */}
      <section className="container grid gap-8 px-4 mx-auto md:flex md:items-center">
        <div className="relative order-first md:w-1/2 h-[400px] overflow-hidden  md:order-first">
          <img
            src={img2}
            alt="Office workers discussing logistics"
            className="object-cover w-full h-full"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </div>
        {/* <div className="hidden md:block w-[36px] bg-gray-300 h-[400px] mx-auto" />{" "} */}
        <div className="space-y-4 md:w-1/2">
          <h2
            className="text-xl font-semibold tracking-tight lg:text-4xl md:leading-[3.5rem] leading-[2rem]"
            // style={{
            //   lineHeight: "3.5rem",
            // }}
          >
            Technology-Driven Fulfillment: Leveraging Innovation for B2B Success
          </h2>
          <p className="text-lg text-muted-foreground">
            One key aspect of Depoter's B2B fulfillment services is its advanced
            technology infrastructure. The company utilizes warehouse management
            systems (WMS) and order processing systems to ensure real-time
            visibility into inventory levels and order status.
          </p>
        </div>
      </section>
    </div>
  );
}
