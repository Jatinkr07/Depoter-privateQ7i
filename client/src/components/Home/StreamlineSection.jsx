export default function StreamlineSection() {
  return (
    <div className="container px-4 py-12 mx-auto">
      {/* Header Section */}
      <div className="mb-16 space-y-4 text-center">
        <h1 className="text-4xl font-bold text-gray-900 md:text-5xl lg:text-6xl">
          Streamline Your Supply Chain with Depoter
        </h1>
        <p className="text-xl text-gray-600">
          Start fulfilling your B2B needs with just three steps and enjoy.
        </p>
      </div>

      {/* Steps Section */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3 lg:gap-12">
        {/* Step 1 */}
        <div className="relative">
          <div className="absolute flex items-center justify-center rounded-full -top-4 -left-4 w-14 h-14 bg-blue-50">
            <span className="text-3xl font-bold text-blue-600">1</span>
          </div>
          <div className="p-6 mt-6 border">
            <div className="space-y-4">
              <div className="flex items-center p-2 space-x-2 bg-white border rounded-md">
                <div className="w-4 h-4 text-gray-400" />
                <span className="text-sm">
                  <span className="text-gray-400">www.</span>
                  <span className="text-orange-500">depoter</span>
                  <span className="text-gray-400">.com</span>
                </span>
              </div>
              {[...Array(3)].map((_, i) => (
                <div key={i} className="h-8 bg-gray-100 rounded-md" />
              ))}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-xl font-semibold">1. Connect with us</h3>
            <p className="text-gray-600">
              Connect your store, import your products, then send us your
              inventory.
            </p>
          </div>
          <svg className="w-full h-16 mt-4" viewBox="0 0 200 50">
            <path
              d="M0,25 Q50,5 100,25 T200,25"
              fill="none"
              stroke="url(#blue-gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="blue-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#60A5FA" />
                <stop offset="100%" stopColor="#818CF8" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 2 */}
        <div className="relative">
          <div className="absolute flex items-center justify-center rounded-full -top-4 -left-4 w-14 h-14 bg-purple-50">
            <span className="text-3xl font-bold text-purple-600">2</span>
          </div>
          <div className="p-6 mt-6 border">
            <div className="grid grid-cols-2 gap-4">
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-lg">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Efficient Storage"
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-sm">Efficient Storage</span>
              </div>
              <div className="text-center">
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-2 bg-gray-100 rounded-lg">
                  <img
                    src="/placeholder.svg?height=32&width=32"
                    alt="Safe Storage"
                    className="w-8 h-8"
                  />
                </div>
                <span className="text-sm">Safe Storage</span>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-xl font-semibold">2. Store & Manage</h3>
            <p className="text-gray-600">
              Connect your store, import your products, then send us your
              inventory.
            </p>
          </div>
          <svg className="w-full h-16 mt-4" viewBox="0 0 200 50">
            <path
              d="M0,25 Q50,5 100,25 T200,25"
              fill="none"
              stroke="url(#purple-gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="purple-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#A78BFA" />
                <stop offset="100%" stopColor="#C084FC" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        {/* Step 3 */}
        <div className="relative">
          <div className="absolute flex items-center justify-center rounded-full -top-4 -left-4 w-14 h-14 bg-orange-50">
            <span className="text-3xl font-bold text-orange-500">3</span>
          </div>
          <div className="p-6 mt-6 border">
            <div className="space-y-4">
              <div className="flex items-start justify-between">
                <div>
                  <h4 className="font-semibold">Fast Delivery</h4>
                  <p className="text-sm text-gray-500">
                    Your Product is on its way!
                  </p>
                </div>
                <span className="font-bold text-orange-500">$352</span>
              </div>
              <div className="flex items-center justify-between">
                <img
                  src="/placeholder.svg?height=48&width=48"
                  alt="Delivery Package"
                  className="w-12 h-12"
                />
                <div className="space-y-2">
                  <div className="w-24 h-2 bg-gray-200 rounded" />
                  <div className="w-16 h-2 bg-gray-200 rounded" />
                </div>
              </div>
            </div>
          </div>
          <div className="mt-4">
            <h3 className="mb-2 text-xl font-semibold">3. Ship</h3>
            <p className="text-gray-600">
              Connect your store, import your products, then send us your
              inventory.
            </p>
          </div>
          <svg className="w-full h-16 mt-4" viewBox="0 0 200 50">
            <path
              d="M0,25 Q50,5 100,25 T200,25"
              fill="none"
              stroke="url(#orange-gradient)"
              strokeWidth="2"
            />
            <defs>
              <linearGradient id="orange-gradient" x1="0" y1="0" x2="1" y2="0">
                <stop offset="0%" stopColor="#FB923C" />
                <stop offset="100%" stopColor="#F97316" />
              </linearGradient>
            </defs>
          </svg>
        </div>
      </div>
    </div>
  );
}
