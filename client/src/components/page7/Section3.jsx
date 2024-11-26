import React from "react";
import Container from "../../components/global/Container";
import icon1 from "../../assets/page7/sec2-icon1.png";
import icon2 from "../../assets/page7/sec2-icon2.png";
import icon3 from "../../assets/page7/sec2-icon3.png";
import icon4 from "../../assets/page7/sec2-icon4.png";

const Section3 = () => {
  return (
    <Container>
      <div className="bg-[#FCEFD8] p-6 md:p-12 flex flex-col md:flex-row justify-between gap-10 max-[600px]:gap-2 rounded-md my-[100px] max-[600px]:my-[1rem]">
        {/* Header Section */}
        <div className="mb-8 w-full md:w-1/2 flex flex-col justify-around">
          <div >
            <h2 className="text-3xl max-[600px]:text-[1.5rem] md:text-[44px] font-semibold text-gray-800 advantagesHead">
              Advantages of Inventory <br /> Management
            </h2>
            <p className="text-gray-600 text-lg md:text-[26px] max-[600px]:text-[0.9rem]">
              With the right inventory management strategy, companies receive
              the following benefits:
            </p>
          </div>
          {/* Statistics Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-[600px]:gap-1">
            <div className="flex flex-col items-start">
              <h4 className="text-[62px] font-bold text-gray-800 max-[600px]:text-[2rem]">10%</h4>
              <p className="text-gray-600 text-lg md:text-[26px] max-[600px]:text-[1rem]">
                Reduction in <br className="max-[600px]:hidden"/> Inventory Costs
              </p>
            </div>
            <div className="flex flex-col items-start">
              <h4 className="text-[62px] font-bold text-gray-800 max-[600px]:text-[2rem]">30%</h4>
              <p className="text-gray-600 text-lg md:text-[26px] max-[600px]:text-[1rem]">
                Improvement in order fulfillment rates.
              </p>
            </div>
          </div>
        </div>

        {/* Cards Section */}
        <div className="w-full md:w-1/2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6 mb-8">
          {/* Card 1 */}
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-yellow-100 flex justify-center items-center rounded mb-4">
              <img src={icon1} alt="Competitive Advantage" />
            </div>
            <h4 className="font-semibold max-[600px]:text-[1.2rem] text-gray-800 mb-2">
              Competitive advantage
            </h4>
            <p className="text-sm max-[600px]:text-[0.8rem] text-gray-600">
              The proper handling of inventory in logistics mgmt. gives your
              company a boost, as it provides real-time data for predicting
              demand and avoiding issues that lead to unnecessary expenditure.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-yellow-100 flex justify-center items-center rounded mb-4">
              <img src={icon2} alt="Predict Market Demands" />
            </div>
            <h4 className="font-semibold max-[600px]:text-[1.2rem] text-gray-800 mb-2">
              Predict market demands
            </h4>
            <p className="text-sm text-gray-600 max-[600px]:text-[0.8rem]">
              The data collected by a warehouse management inventory system is
              important for a business as it informs businesses about current
              market conditions.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-yellow-100 flex justify-center items-center rounded mb-4">
              <img src={icon3} alt="Decreased Operational Costs" />
            </div>
            <h4 className="font-semibold max-[600px]:text-[1.2rem] text-gray-800 mb-2">
              Decreased operational costs
            </h4>
            <p className="text-sm text-gray-600 max-[600px]:text-[0.8rem]">
              Logistics inventory management allows businesses to resolve issues
              in their supply of goods and maintain the right levels of stock.
            </p>
          </div>

          {/* Card 4 */}
          <div className="bg-white p-4 rounded-md shadow-md flex flex-col items-start">
            <div className="w-12 h-12 bg-yellow-100 flex justify-center items-center rounded mb-4">
              < img src={icon4} alt="Reduction of Errors" />
            </div>
            <h4 className="font-semibold max-[600px]:text-[1.2rem] text-gray-800 mb-2">
              Reduction of errors
            </h4>
            <p className="text-sm text-gray-600 max-[600px]:text-[0.8rem]">
              The automated processes offered by inventory management software
              have a proven record of reducing human error in maintaining
              records.
            </p>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section3;