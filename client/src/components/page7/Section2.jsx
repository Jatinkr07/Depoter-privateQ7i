import React from "react";
import Container from "../../components/global/Container";
import Section2Image from "../../assets/page7/section2-img.png";
import burgerIcon from "../../assets/page7/burgerIcon.png";

const Section2 = () => {
  return (
    <Container>
      <div className="flex flex-col items-start justify-between gap-8 px-4 py-12 bg-white md:px-8 md:flex-row">
        {/* Left Section */}
        <div className="w-full md:w-1/2">
          <h2 className="text-xl md:text-2xl max-[600px]:text-[1.2rem] font-semibold text-gray-800 warehouse">
            Warehouse inventory management software used in companies
          </h2>
          <p className="text-gray-600 mb-6 max-[600px]:text-[0.8rem]">
            Inventory management software helps track and organize resources
            efficiently, streamlining warehouse operations. Common systems
            include:
          </p>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            {/* Item 1 */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded">
                <img
                  src={burgerIcon}
                  alt="Barcode scanning"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-[1.2rem]">
                  Barcode scanning
                </h4>
                <p className="text-sm text-gray-600  max-[600px]:text-[0.8rem]">
                  Scans product barcodes to minimize manual errors in inventory
                  checks.
                </p>
              </div>
            </div>
            {/* Item 2 */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded">
                <img src={burgerIcon} alt="ERP systems" className="w-6 h-6" />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-[1.2rem]">
                  ERP systems
                </h4>
                <p className="text-sm text-gray-600 max-[600px]:text-[0.8rem]">
                  Integrate finance, inventory, and procurement functions to
                  enhance business operations.
                </p>
              </div>
            </div>
            {/* Item 3 */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded">
                <img
                  src={burgerIcon}
                  alt="SAP Warehouse Management"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-[1.2rem]">
                  SAP Warehouse Management
                </h4>
                <p className="text-sm text-gray-600  max-[600px]:text-[0.8rem]">
                  Offers automated processes for efficient stock tracking and
                  handling.
                </p>
              </div>
            </div>
            {/* Item 4 */}
            <div className="flex gap-4">
              <div className="flex items-center justify-center w-10 h-10 bg-yellow-100 rounded">
                <img
                  src={burgerIcon}
                  alt="Oracle Netsuite"
                  className="w-6 h-6"
                />
              </div>
              <div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-[1.2rem]">
                  Oracle Netsuite
                </h4>
                <p className="text-sm text-gray-600  max-[600px]:text-[0.8rem]">
                  Cloud-based ERP with comprehensive inventory management for
                  demand forecasting and order processing.
                </p>
              </div>
            </div>
          </div>
        </div>
        {/* Right Section */}
        <div className="relative w-full md:w-1/2">
          <img
            src={Section2Image}
            alt="User  Image"
            className="w-full rounded-lg"
          />
          <div className="absolute flex flex-col items-start bg-white rounded-lg shadow-lg bottom-4 right-4 overview z-1">
            <h4 className="text-sm text-gray-500 overviewHead max-[600px]:text-[0.8rem]">
              Overview
            </h4>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-bold text-gray-800 max-[600px]:text-[0.8rem]">
                $2,234
              </span>
              <span className="text-sm text-gray-500 max-[600px]:text-[0.7rem]">
                AED
              </span>
            </div>
            <span className="text-xs text-green-500">+20%</span>
            <div className="mt-4 w-full h-16 max-[600px]:h-10 bg-yellow-100 rounded flex justify-around items-end">
              {/* Chart Bars */}
              <div className="w-2 h-8 bg-yellow-400" />
              <div className="w-2 h-10 bg-yellow-400" />
              <div className="w-2 h-12 bg-yellow-400" />
              <div className="w-2 h-16 bg-yellow-400" />
              <div className="w-2 h-10 bg-yellow-400" />
              <div className="w-2 bg-yellow-400 h-14" />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default Section2;
