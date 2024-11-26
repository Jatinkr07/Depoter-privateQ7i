import React from "react";
import Container from "../global/Container";
import { AnimatedList } from "../global/AnimatedList";
import { cn } from "../global/utiles";

let notifications = [
  {
    name: "Payment received",
    description: "Magic UI",
    time: "15m ago",
 
    icon: "💸",
    color: "#00C9A7",
  },
  {
    name: "Shipment received",
    description: "Magic UI",
    time: "10m ago",
    icon: "👤",
    color: "#FFB800",
  },
  {
    name: "Item dispatched",
    description: "Magic UI",
    time: "5m ago",
    icon: "💬",
    color: "#FF3D71",
  },
  {
    name: "Low stock",
    description: "Magic UI",
    time: "2m ago",
    icon: "🗞️",
    color: "#1E86FF",
  },
];
 
notifications = Array.from({ length: 10 }, () => notifications).flat();
 
const Notification = ({ name, description, icon, color, time }) => {
  return (
    <figure
      className={cn(
        "relative mx-auto min-h-fit w-full max-w-[400px] cursor-pointer overflow-hidden rounded-2xl p-[10px] px-4 ",
        // animation styles
        "transition-all duration-200 ease-in-out hover:scale-[103%]",
        // light styles
        "bg-white border [box-shadow:0_0_0_1px_rgba(0,0,0,.03),0_2px_4px_rgba(0,0,0,.05),0_12px_24px_rgba(0,0,0,.05)]",
        // dark styles
        "transform-gpu dark:bg-transparent dark:backdrop-blur-md dark:[border:1px_solid_rgba(255,255,255,.1)] dark:[box-shadow:0_-20px_80px_-20px_#ffffff1f_inset]",
      )}
    >
      <div className="flex flex-row  items-center gap-3">
        <div
          className="flex size-10 items-center justify-center rounded-2xl"
          style={{
            backgroundColor: color,
          }}
        >
          <span className="text-lg">{icon}</span>
        </div>
        <div className="flex flex-col overflow-hidden">
          <figcaption className="flex flex-row items-center whitespace-pre text-lg font-medium  ">
            <span className="text- mb-0 sm:text-lg">{name}</span>
            <span className="mx-1">·</span>
            <span className="text-xs mb-0">{time}</span>
          </figcaption>
          <p className="text-sm mb-0 font-normal ">
            {description}
          </p>
        </div>
      </div>
    </figure>
  );
};


const Section4 = () => {
  return (
    <div className="w-full bg-gray-50">
      <Container>
        <div className="py-[100px] max-[600px]:py-[1rem] bg-gray-50">
          {/* Header */}
          <div className="text-center mb-12 max-[600px]:-mb-8 h-[200px]">
            <h3 className="text-3xl md:text-[52px] font-semibold max-[600px]:text-[1.5rem] text-gray-800">
              Manage Your Inventory Smarter <br /> <p className="max-[600px]:-mt-1 md:mt-5">With These Powerful Tools</p>
            </h3>
            <p className="text-lg max-[600px]:text-[0.8rem] md:text-[24px] max-[600px]:-mt-4 text-gray-600">
              Discover seamless, reliable and efficient point-of-sale solutions
              tailored to your <br className="max-[600px]:hidden block" />{" "}
              business needs.
            </p>
          </div>

          {/* Main Content */}
          <div className="py-12 px-4 md:px-12 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Inventory Forecasting */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="chart-forecasting.png"
                    alt="Inventory Forecasting"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-lg text-2xl mb-2">
                  Inventory Forecasting
                </h4>
                <p className="text-gray-600 max-[600px]:text-sm text-lg">
                  Forecast your future inventory requirements more accurately by
                  analyzing past sales data alongside current market trends.
                </p>
              </div>

              {/* Inventory Tracking */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                 <img
                    src="inventory-tracking.png"
                    alt="Inventory Tracking"
                    className="w-full h-auto"
                  /> 
                 
                <h4 className="font-semibold text-gray-800 max-[600px]:text-lg text-2xl mb-2">
                  Easily track your store's inventory
                </h4>
                <p className="text-gray-600 max-[600px]:text-sm text-lg">
                  Effortlessly track and manage your store's inventory with
                  real-time updates, ensuring you stay informed and never miss a
                  stock change.
                </p>
              </div>
            </div>

            <br />

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Low Stock Alert */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="low-stock.png"
                    alt="Low Stock Alert"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 max-[600px]:text-lg text-2xl mb-2">
                  Low Stock Alert
                </h4>
                <p className="text-gray-600 text-lg max-[600px]:text-sm">
                  Automatically get notified when your inventory is running low.
                </p>
              </div>

              {/* Multi-Location Support */}
              <div className="bg-white p-6 rounded-lg shadow-md">
                <div className="bg-amber-50 p-4 rounded-lg mb-4">
                  <img
                    src="multi-location.png"
                    alt="Multi-Location Support"
                    className="w-full h-auto"
                  />
                </div>
                <h4 className="font-semibold text-gray-800 text-2xl max-[600px]:text-lg mb-2">
                  Multi-Location Support
                </h4>
                <p className="text-gray-600 text-lg max-[600px]:text-sm">
                  Manage inventory across multiple warehouses or retail
                  locations.
                </p>
              </div>

              {/* Supplier Management */}
              <div className="bg-white p-3 rounded-lg shadow-md">
                <div className="bg-amber-50 p-3 rounded-lg mb-3">
                  {/* <img
                    src="supplier-management.png"
                    alt="Supplier Management"
                    className="w-full h-auto"
                  /> */}
                 {/* <img
                    src="inventory-tracking.png"
                    alt="Inventory Tracking"
                    className="w-full h-auto"
                  />  */}
                  <div className={cn(
        "relative flex h-[260px] w-full flex-col p-4 overflow-hidden rounded-lg border bg-white ",
       
      )}>

                   <AnimatedList>
        {notifications.map((item, idx) => (
          <Notification {...item} key={idx} />
        ))}
      </AnimatedList>
        </div>
                </div>
                <h4 className="font-semibold text-gray-800 text-2xl max-[600px]:text-lg mb-2">
                  Supplier Management
                </h4>
                <p className="text-gray-600 text-lg max-[600px]:text-sm">
                  Keep track of suppliers and order statuses with ease.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Section4;
