export default function BlogFooter() {
  return (
    <div className="px-2">
      <section className="py-12 text-center text-white bg-gradient-to-r bg-[#FFBE2E] px-4 md:px-20 flex flex-col items-center justify-center md:mx-20 rounded-3xl mb-12  md:mb-16  md:mt-0">
        <h3 className="mb-4 text-2xl font-semibold tracking-widest">
          Get notified about our blogs published
        </h3>
        <form className="flex justify-center w-full max-w-sm mt-4">
          <div className="flex w-full">
            <input
              type="email"
              placeholder="Your email address..."
              className="w-full px-4 py-3 rounded-l-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <button
              type="submit"
              className="px-4 py-2 text-white bg-orange-500 md:w-28 w-44 rounded-r-md hover:bg-orange-600 focus:outline-none focus:ring-2 focus:ring-orange-400"
            >
              Join us
            </button>
          </div>
        </form>
      </section>

      {/* <footer className="py-8 bg-white">
        <div className="container mx-auto text-center">
          <div className="flex justify-center mb-6 space-x-12">
            <div>
              <h4 className="font-bold">Product</h4>
              <ul className="mt-2 space-y-1">
                <li>Pricing</li>
                <li>Features</li>
                <li>Security</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Support</h4>
              <ul className="mt-2 space-y-1">
                <li>Contact</li>
                <li>Platforms</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Legal</h4>
              <ul className="mt-2 space-y-1">
                <li>Terms of Use</li>
                <li>Privacy Policy</li>
                <li>GDPR</li>
                <li>Cookie Policy</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Company</h4>
              <ul className="mt-2 space-y-1">
                <li>About</li>
                <li>Blog</li>
                <li>Jobs</li>
                <li>Brand Guidelines</li>
              </ul>
            </div>
            <div>
              <h4 className="font-bold">Get It</h4>
              <ul className="mt-2 space-y-1">
                <li>Available On Chrome Store</li>
                <li>
                  <button className="px-4 py-2 text-white bg-orange-500 rounded">
                    Download Now
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-sm text-gray-500">
            &copy; All rights are reserved @Blogi 2023
          </p>
          <div className="flex justify-center mt-4 space-x-4">
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-facebook-f"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-twitter"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-linkedin-in"></i>
            </a>
            <a href="#" className="text-gray-500 hover:text-gray-700">
              <i className="fab fa-google-plus-g"></i>
            </a>
          </div>
        </div>
      </footer> */}
    </div>
  );
}
