import logo from "../../assets/footer/logo.png";

function Footer() {
  return (
    <footer className="bg-[#333333] text-white p-12 ">
      <div className="container flex flex-col items-start justify-between mx-auto md:flex-row">
        {/* Left Section */}
        <div className="mb-6 md:mb-0">
          <div className="flex items-center mb-4">
            {/* Placeholder for logo */}
            <img src={logo} className="md:h-[68px] h-8" alt="" />
          </div>
          <p className="text-[16px] md:text-[22px]">
            Welcome to Depoter, your <br /> comprehensive solution for all{" "}
            <br /> your warehousing needs.
          </p>
          <div className="mt-5">
            <span
              href="mailto:depoter@gmail.com"
              className="flex items-center md:text-[22px] text-[18px] underline-none text-white"
            >
              📧 depoter@gmail.com
            </span>
            <span
              href="tel:+97155889966"
              className="flex items-center md:text-[22px] text-[18px] underline-none text-white"
            >
              📞 +971 55889966
            </span>
          </div>
        </div>

        {/* Links Section */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-16">
          {/* Services */}
          <div>
            <h5 className="text-[18px] md:text-[22px] font-bold text-white mb-2">
              Services
            </h5>
            <ul className="pl-0 space-y-2 text-[14px] md:text-[19px] ">
              <li>
                <a href="#" className="text-white no-underline">
                  B2C
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  B2B
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  3PL
                </a>
              </li>
            </ul>
          </div>
          {/* Support */}
          <div>
            <h5 className="text-[18px] md:text-[22px] font-bold text-white mb-2">
              Support
            </h5>
            <ul className="pl-0 space-y-2 text-[14px] md:text-[19px]">
              <li>
                <a href="#" className="text-white no-underline">
                  Pricing Plan
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Guide
                </a>
              </li>
            </ul>
          </div>
          {/* Company */}
          <div>
            <h5 className="text-[18px] md:text-[22px] font-bold text-white mb-2">
              Company
            </h5>
            <ul className="pl-0 space-y-2 text-[14px] md:text-[19px]">
              <li>
                <a href="#" className="text-white no-underline">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Join Us
                </a>
              </li>
              <li>
                <a href="#" className="text-white no-underline">
                  Partners
                </a>
              </li>
            </ul>
          </div>
          {/* Legal */}
          <div>
            <h5 className="text-[18px] md:text-[22px] font-bold text-white mb-2">
              Legal
            </h5>
            <ul className="pl-0 space-y-2 text-[14px] md:text-[19px]">
              <li>
                <a
                  href="#"
                  className="text-white text-[14px] md:text-[19px] no-underline"
                >
                  Claim
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-[14px] md:text-[19px] no-underline"
                >
                  Privacy Policy
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-white text-[14px] md:text-[19px] no-underline"
                >
                  Terms & Conditions
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-6 border-t border-gray-700"></div>
    </footer>
  );
}

export default Footer;
