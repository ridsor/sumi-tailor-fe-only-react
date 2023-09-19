import { useState } from "react";
import { FaBars, FaCircle, FaUser } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const [hamburger, setHamburger] = useState<boolean>(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50">
      <div className="container px-2 py-4">
        <article className="bg-two w-full flex items-center text-white p-2.5 rounded-full lg:justify-between relative">
          <div className="flex items-center order-1 px-2 left gap-x-1">
            <FaCircle className="fill-white" size="1rem" />
            <span className="text-base font-bold">Sumi Tailor</span>
          </div>
          <div className="order-3 center lg:order-2">
            <button
              className="block p-2 mx-2 lg:hidden"
              onClick={() => setHamburger((prev) => !prev)}
            >
              <FaBars
                className={`${
                  hamburger ? "fill-gray-400" : "fill-white"
                } transition`}
                size="1.7rem"
              />
            </button>
            <nav
              className={`${
                hamburger
                  ? " opacity-100 pointer-events-auto -right-0"
                  : "-right-1/3 pointer-events-none opacity-0 lg:pointer-events-auto lg:opacity-100"
              } transition-all top-[110%] lg:block lg:static absolute bg-white lg:bg-inherit shadow-md lg:shadow-none p-4 lg:p-0 w-full max-w-[250px] lg:w-auto lg:max-w-none lg:rounded-none rounded-md lg:border-none border`}
            >
              <ul className="flex gap-x-10 text-[#0f0f0f] lg:text-white flex-col lg:flex-row gap-y-3">
                <li>
                  <Link
                    to="/"
                    className={`after:transition-all after:content-[''] after:block after:h-1 relative after:absolute after:-bottom-1.5 after:bg-four after:rounded-full after:right-1/2 after:translate-x-1/2 ${
                      location.pathname === "/"
                        ? "after:w-5"
                        : "after:w-0 hover:after:w-5 lg:text-[#cdcdcd] hover:lg:text-white"
                    }`}
                  >
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    to="/about"
                    className={`after:transition-all after:content-[''] after:block after:h-1 relative after:absolute after:-bottom-1.5 after:bg-four after:rounded-full after:right-1/2 after:translate-x-1/2 ${
                      location.pathname === "/about"
                        ? "after:w-5"
                        : "after:w-0 hover:after:w-5 lg:text-[#cdcdcd] hover:lg:text-white"
                    }`}
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    to="/gallery"
                    className={`after:transition-all after:content-[''] after:block after:h-1 relative after:absolute after:-bottom-1.5 after:bg-four after:rounded-full after:right-1/2 after:translate-x-1/2 ${
                      location.pathname === "/gallery"
                        ? "after:w-5"
                        : "after:w-0 hover:after:w-5 lg:text-[#cdcdcd] hover:lg:text-white"
                    }`}
                  >
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link
                    to="/service"
                    className={`after:transition-all after:content-[''] after:block after:h-1 relative after:absolute after:-bottom-1.5 after:bg-four after:rounded-full after:right-1/2 after:translate-x-1/2 ${
                      location.pathname === "/service"
                        ? "after:w-5"
                        : "after:w-0 hover:after:w-5 lg:text-[#cdcdcd] hover:lg:text-white"
                    }`}
                  >
                    Service
                  </Link>
                </li>
                <li>
                  <Link
                    to="/contact"
                    className={`after:transition-all after:content-[''] after:block after:h-1 relative after:absolute after:-bottom-1.5 after:bg-four after:rounded-full after:right-1/2 after:translate-x-1/2 ${
                      location.pathname === "/contact"
                        ? "after:w-5"
                        : "after:w-0 hover:after:w-5 lg:text-[#cdcdcd] hover:lg:text-white"
                    }`}
                  >
                    Contact Us
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
          <div className="order-2 ml-auto right lg:order-3 lg:ml-0">
            <Link to="/login" className="bg-white p-3 rounded-full block">
              <FaUser className="fill-two" size="1.2rem" />
            </Link>
          </div>
        </article>
      </div>
    </header>
  );
};

export default Header;
