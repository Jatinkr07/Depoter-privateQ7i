import { IoBarChartSharp } from "react-icons/io5";
import advanceTechImg from "../../assets/page8/Card5.png";
import globeImg from "../../assets/page8/globe.png";

export default function Featurescard() {
  return (
    <div className="container px-4 py-16 mx-auto -mt-32 md:mt-0">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {/* Strategic Locations */}
        <div className="p-6 bg-[#FDF6F0] rounded-2xl flex flex-col justify-between">
          <div>
            <h3 className="mb-4 text-2xl font-semibold">Strategic Locations</h3>
            <p className="mb-6 text-gray-600">
              Our warehouses and fulfillment centers located close to ports,
              airports and key transport links in Dubai ensure rapid fulfillment
              reach to your customers.
            </p>
          </div>
          <div className="mt-4">
            <img
              src={globeImg}
              alt="Globe illustration"
              className="w-full h-auto rounded-full"
            />
          </div>
        </div>

        {/* Flexible & Scalable */}
        <div>
          <div className="p-8 rounded-2xl bg-[#FDF6F0]">
            <h3 className="mb-4 text-2xl font-semibold">Flexible & Scalable</h3>
            <p className="text-gray-600">
              Our fulfillment services can be customized to support sudden
              spikes or seasonal peaks in your order volumes flexibly. We have
              sufficient warehouse capacity and manpower.
            </p>
          </div>
          <div className="p-8 mt-6 bg-[#F8FAFC] rounded-2xl">
            <h3 className="mb-4 text-2xl font-semibold">
              Robust Infrastructure
            </h3>
            <p className="text-gray-600">
              Our facilities utilize specialized material handling equipment,
              high-density pallet racks, mezzanines and more to boost storage
              density, throughput and accuracy.
            </p>
          </div>
        </div>

        {/* Real-Time Visibility */}
        <div className="p-6 bg-gray-200 rounded-2xl">
          <h3 className="mb-4 text-2xl font-semibold">Real-Time Visibility</h3>
          <p className="mb-6 text-gray-600">
            Monitor inventory, orders, dispatch, and returns 24/7 with our
            online portal. Access real-time reports and KPI dashboards for
            smarter decision-making.
          </p>
          <div className="p-4 bg-white rounded-lg">
            <div className="flex items-center gap-2 mb-4">
              <IoBarChartSharp className="w-5 h-5 text-[#F5A623]" />
              <span className="font-medium">Overview</span>
            </div>
            <div className="mb-4">
              <div className="flex items-baseline gap-2">
                <span className="text-3xl font-bold">$2,234</span>
                <span className="text-gray-500">AED</span>
                <span className="px-2 py-1 text-sm text-green-500 rounded bg-green-50">
                  +20%
                </span>
              </div>
              <div className="text-sm text-gray-500">Today Sale</div>
            </div>
            <div className="grid items-end h-24 grid-cols-7 gap-2">
              {["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"].map(
                (day, i) => (
                  <div key={day} className="flex flex-col items-center gap-2">
                    <div
                      className="w-full bg-[#F5A623]/20 rounded-t"
                      style={{ height: `${(i + 1) * 15}%` }}
                    />
                    <span className="text-xs text-gray-500">{day}</span>
                  </div>
                )
              )}
            </div>
          </div>
        </div>

        {/* Advanced Technology (Two Grid Boxes) */}
        <div className="col-span-1 md:col-span-2 flex flex-col md:flex-row p-6 bg-[#FDF6F0] shadow rounded-lg">
          {/* Left Section: Text Content */}
          <div className="flex flex-col justify-center pr-0 md:w-1/2 md:pr-6">
            <h3 className="mb-4 text-2xl font-semibold">Advanced Technology</h3>
            <p className="text-gray-600">
              We utilize advanced warehouse management systems, ERP software, RF
              and barcode scanning and more to boost accuracy, efficiency and
              service levels.
            </p>
          </div>
          {/* Right Section: Image */}
          <div className="md:w-1/2">
            <img
              src={advanceTechImg}
              alt="Dashboard interface"
              className="object-cover w-full h-full mt-4 rounded-lg md:mt-0"
            />
          </div>
        </div>

        {/* Specialist Expertise */}
        <div className="p-6 bg-gray-200 rounded-2xl">
          <h3 className="mb-4 text-2xl font-semibold">Specialist Expertise</h3>
          <p className="text-gray-600">
            Our core focus on storage, warehouse management and order
            fulfillment makes us specialists in these areas. Our management
            brings decades of relevant industry experience.
          </p>
        </div>
      </div>
    </div>
  );
}
