import { Link } from "react-router-dom";
import logo from "../logo.svg";

function Nav() {
  return (
    <nav className="sm:px-4 py-2.5 w-full z-20 top-0 left-0 border-b border-gray-200">
      <div className="container flex justify-between flex-wrap items-center mx-auto">
        <div className="border-r-[1.5px] border-[#D9D9D9]">
          <a
            href="https://20scoopscnx.com/"
            className="flex items-center"
            target="_blank"
          >
            <img src={logo} className="mr-3 h-14 sm:h-14" alt="logo" />
          </a>
        </div>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-[#DE4343] hover:bg-[#ff7e7e] focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-3 md:mr-0"
          >
            Connect Wallet
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg md:hidden focus:outline-none"
            aria-controls="navbar-sticky"
            aria-expanded="false"
          >
            <span className="sr-only">Open main menu</span>
            <svg
              className="w-6 h-6"
              aria-hidden="true"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fill-rule="evenodd"
                d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                clip-rule="evenodd"
              ></path>
            </svg>
          </button>
        </div>
        <div className="hidden items-center w-full md:flex md:w-auto">
          <ul className="flex flex-col p-4 mt-4 bg-gray-50 rounded-lg border border-gray-100 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <li>
              <Link
                to="/"
                className="block py-2 pr-4 pl-3 text-black hover:border-b-2 border-[#C03838] bg-transparent md:hover:border-b-2 md:p-0"
              >
                Home
              </Link>
            </li>
            <li>
              <Link
                to="/salary"
                className="block py-2 pr-4 pl-3 text-black hover:border-b-2 border-[#C03838] bg-transparent md:hover:border-b-2 md:p-0"
              >
                Salary
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pr-4 pl-3 text-black hover:border-b-2 border-[#C03838] bg-transparent md:hover:border-b-2 md:p-0"
              >
                Services
              </Link>
            </li>
            <li>
              <Link
                to="#"
                className="block py-2 pr-4 pl-3 text-black hover:border-b-2 border-[#C03838] bg-transparent md:hover:border-b-2 md:p-0"
              >
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
