import { useState, useEffect, useRef } from "react";
import { FiMenu, FiX } from "react-icons/fi"; // Import hamburger and close icons
import logoTxt from "../../assets/header/logoText.png";
import logo from "../../assets/header/logo.png";
import Container from "../global/Container";
import { Link, useNavigate } from "react-router-dom";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { FaHandshake } from "react-icons/fa";
import { BiSupport } from "react-icons/bi";
import { AiOutlineLogin } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  const [isDropDown, setIsDropDown] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("up"); // Track scroll direction
  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  const handleDropdownToggle = () => setIsDropDown(!isDropDown);

  const handleOutsideClick = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsDropDown(false);
    }
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setScrollDirection(currentScrollY > lastScrollY.current ? "down" : "up");
    setIsSticky(currentScrollY > 0);
    lastScrollY.current = currentScrollY;
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isDropDown) {
      document.addEventListener("click", handleOutsideClick);
    } else {
      document.removeEventListener("click", handleOutsideClick);
    }
    return () => document.removeEventListener("click", handleOutsideClick);
  }, [isDropDown]);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);

  return (
    <header
      className={`w-full px-4 text-black py-2 fixed top-0 z-[1000] transition-colors duration-300 ${
        isSticky ? "bg-[#FFBE2E]" : "bg-transparent"
      }`}
    >
      <Container>
        <div
          className={`flex justify-end w-full mb-2 lg:mb-0 lg:w-auto transition-all duration-300 ${
            scrollDirection === "down" ? "opacity-0 h-0" : "opacity-100"
          }`}
        >
          <div className="flex items-center space-x-4 text-sm">
            <Link
              to="/login"
              className="flex items-center space-x-1 no-underline hover:underline"
            >
              <AiOutlineLogin className="text-xl text-black" />
              <span className="text-black">Login</span>
            </Link>
            <div className="h-5 border-r border-gray-900" />
            <a href="#" className="flex items-center space-x-1 no-underline">
              <BiSupport className="text-xl text-black" />
              <span className="text-black">Support</span>
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between mx-auto">
          {/* Logo Section */}
          <Link to="/">
            <div className="flex items-center space-x-2">
              <img src={logo} alt="Logo" className="md:h-[38px] h-8" />
              <img src={logoTxt} alt="Logo Text" className="md:h-[42px] h-10" />
            </div>
          </Link>

          {/* Hamburger Menu Button for Mobile */}
          <button
            className="text-3xl text-black lg:hidden"
            onClick={toggleMenu}
          >
            {isMenuOpen ? <FiX /> : <FiMenu />}
          </button>

          {/* Navigation Links and Right Section */}
          <nav
            className={`lg:flex items-center  space-x-12 ${
              isMenuOpen
                ? "flex flex-col items-center justify-center absolute top-0 left-0 right-0 bg-white md:h-0 h-[45vh] space-y-2 pr-8"
                : "hidden"
            } lg:block`}
          >
            {isMenuOpen && (
              <button
                className="absolute text-3xl text-black top-4 right-4"
                onClick={toggleMenu}
              >
                <FiX />
              </button>
            )}
            {/* Removed the select dropdown */}
            <div
              ref={dropdownRef}
              className="relative"
              onClick={handleDropdownToggle}
            >
              <a
                href="#"
                className="no-underline flex items-center justify-center text-black text-lg md:text-[16px] hover:underline"
              >
                Services{" "}
                <span className="pl-2">
                  {!isDropDown ? <IoIosArrowUp /> : <IoIosArrowDown />}
                </span>
              </a>
              {isDropDown && <DropDown />}
            </div>
            <a
              href="#"
              className="no-underline text-black text-lg md:text-[16px] hover:underline"
            >
              About us
            </a>
            <Link
              to="/blogs/home"
              className="no-underline text-black text-lg md:text-[16px] hover:underline"
            >
              Blogs
            </Link>

            {/* Right Section - Buttons */}
            <div className="grid items-center grid-cols-1 space-x-5 space-y-3 md:space-y-0 md:grid-cols-2 ">
              <button className="px-4 py-2 md:px-4 md:py-2 transition duration-300 border border-black rounded hover:bg-black hover:text-white text-sm md:text-[16px]">
                Get a Quote
              </button>
              <button className=" px-4 py-2 md:px-4 md:py-3  transition duration-300 bg-black text-white rounded hover:text-gray-900  hover:bg-gray-100  text-sm md:text-[16px] ">
                Contact Us
              </button>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
};

const DropDown = () => {
  const linksArr = [
    {
      Heading: "B2B Fulfillment",
      para: "Efficient B2B order management.",
      link: "/",
    },
    {
      Heading: "B2C Fulfillment",
      para: "Reliable e-commerce fulfillment services.",
      link: "/b2c-fulfillment",
    },
    {
      Heading: "FBA Fulfillment",
      para: "Integrated Amazon fulfillment solution.",
      link: "/fba-fulfillment",
    },
    {
      Heading: "FBN Fulfillment",
      para: "Comprehensive Noon logistics service.",
      link: "/fbn-fulfillment",
    },
    {
      Heading: "Multi-channel Ecommerce",
      para: "Seamless multichannel order fulfillment.",
      link: "/multi-channel-ecommerce",
    },
    {
      Heading: "Logistics",
      para: "Comprehensive local and global logistics.",
      link: "/logistics",
    },
  ];
  return (
    <div className="absolute bg-[#FFBE2E] top-10 -left-40 w-[700px] border border-black rounded p-4 z-10 ">
      <h3 className="px-12 text-xl ps-0">We Offer</h3>
      <div className="flex list-none">
        <div>
          {linksArr.slice(0, 3).map((elem, index) => (
            <Link
              key={index}
              to={elem.link}
              className="flex items-center py-2 text-xl  max-[600px]:px-2 max-[600px]:py-1 text-black no-underline"
            >
              <FaHandshake className="mb-3 mr-2 text-3xl" />
              <div>
                <span className="text-lg">{elem.Heading}</span>
                <p className="text-sm text-[#333333]">{elem.para}</p>
              </div>
            </Link>
          ))}
        </div>
        <div>
          {linksArr.slice(3).map((elem, index) => (
            <Link
              key={index}
              to={elem.link}
              className="flex items-center px-12 py-2 text-xl max-[600px]:px-2 max-[600px]:py-1 text-black no-underline"
            >
              <FaHandshake className="mb-3 mr-2 text-3xl" />
              <div>
                <span className="text-lg">{elem.Heading}</span>
                <p className="text-sm">{elem.para}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;
