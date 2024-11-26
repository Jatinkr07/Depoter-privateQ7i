import React from "react";

const Section1 = () => {
  return (
    <div className="px-4 pt-12 mx-auto text-center max-w-7xl">
      {/* Header */}
      <h2 className="text-lg font-semibold text-yellow-500">Depoter + Noon</h2>
      <h1 className="text-3xl max-[600px]:text-[1.5rem] font-bold mt-2 mb-10">
        How Depoter Simplifies Your FBN Fulfillment Process
      </h1>

      {/* Cards Container */}
      <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
        {/* Card 1 */}
        {data.map((list) => {
          return (
            <div className="flex flex-col items-start text-left">
              <div className="w-16 h-16 mb-4 bg-gray-300"></div>
              <h3 className="text-xl font-semibold mb-2 max-[600px]:text-[1.2rem]">
                {list.title}
              </h3>
              <p className="text-gray-600 max-[600px]:text-[0.8rem]">
                {list.body}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

const data = [
  {
    id: 1,
    title: "Local Expertise",
    body: "FBN offers a deep understanding of the local market dynamics. With facilities strategically located throughout the UAE, Depoter ensures rapid order processing and timely deliveries. This local insight allows businesses to provide exceptional service to their customers, fostering loyalty and repeat purchases.",
  },
  {
    id: 2,
    title: "Cost-Effective Solutions",
    body: "Utilizing FBA fulfilled by Amazon may incur various fees, including storage and fulfillment costs. In contrast, FBN offers competitive pricing tailored to the UAE market, helping businesses maximize their profitability while minimizing overhead costs. ",
  },
  {
    id: 3,
    title: "Scalable Operations",
    body: "As your business grows, so do your fulfillment needs. FBN fulfillment is designed to scale with your operations, allowing you to adjust storage space and resources based on demand. This flexibility ensures that you can respond to market trends and fluctuations without the burden of excess inventory.",
  },
  {
    id: 4,
    title: "Efficient Order Processing",
    body: "With FBN, order processing is streamlined through advanced technology and dedicated personnel. Orders are picked and packed with precision, reducing the likelihood of errors and ensuring that customers receive their products on time. ",
  },
  {
    id: 5,
    title: "Focus on Core Business Functions",
    body: "By outsourcing fulfillment to Depoter, you can concentrate on essential business functions such as marketing, product development, and customer engagement. This focus enables you to drive growth and innovation while we handle the logistics side of your operations.",
  },
  {
    id: 6,
    title: "Enhanced Customer Experience",
    body: "With FBN’s local expertise and efficient order processing, customers receive faster deliveries and personalized service. This commitment to quality enhances satisfaction and fosters long-term relationships, ultimately leading to increased sales and brand loyalty.",
  },
];

export default Section1;
