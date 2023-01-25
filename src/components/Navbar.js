import { Link } from "react-router-dom";
import { useState } from "react";
import { useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation().pathname;

  const [isNavbar, setIsNavbar] = useState(false);
  const [isDropdown, setIsDropdown] = useState(false);

  return (
    <header className="relative z-10 shadow-lg bg-amber-500">
      <div className="container flex items-center justify-between">
        <Link className="animation hover:scale-105" to="./home-page.html">
          <img
            className="w-56 h-auto md:w-64"
            src="/cover.png"
            alt="MRHYA Logo"
          />
        </Link>

        <nav>
          <ul className="hidden gap-14 md:flex">
            <li
              className={`list-item ${
                location === "/" ? "active-list-item" : ""
              }`}
            >
              <Link to="/">Home</Link>
            </li>

            <li
              className={`relative group list-item ${
                location === "/products" ? "active-list-item" : ""
              }`}
            >
              <Link to="/products">Clothes</Link>

              <ul className="absolute -top-4 group-hover:top-6 pr-10 pl-2 py-3 space-y-3 animation opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 bg-amber-500 -left-2 rounded-xl !duration-700 shadow-2xl z-50">
                <li className="dropdown-item">
                  <Link to="">Man</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="">Woman</Link>
                </li>
                <li className="dropdown-item">
                  <Link to="">Kids</Link>
                </li>
              </ul>
            </li>

            <li
              className={`list-item ${
                location === "/about" ? "active-list-item" : ""
              }`}
            >
              <Link to="/about">About</Link>
            </li>

            <li
              className={`list-item ${
                location === "/contact" ? "active-list-item" : ""
              }`}
            >
              <Link to="/contact">Contact</Link>
            </li>
          </ul>
        </nav>

        <button
          onClick={() => setIsNavbar(!isNavbar)}
          className="inline-block mr-8 sm:mr-16 md:hidden"
        >
          <svg
            width="28"
            height="28"
            className="fill-amber-700"
            viewBox="0 0 20 20"
          >
            <path d="M0 3h20v2h-20v-2zM0 9h20v2h-20v-2zM0 15h20v2h-20v-2z"></path>
          </svg>
        </button>
      </div>
      <nav
        className={`${
          isNavbar && "active-navbar"
        } absolute z-50 w-full py-6 opacity-0 pointer-events-none md:hidden animation -top-40 bg-amber-500`}
      >
        <ul className="flex flex-col items-center w-full gap-8">
          <li
            className={`mobile-list-item ${
              location === "/" ? "active-mobile-list-item" : ""
            }`}
          >
            <Link to="/">Home</Link>
          </li>
          <li
            className={`mobile-list-item ${
              location === "/clothes" ? "active-mobile-list-item" : ""
            }`}
            onClick={() => setIsDropdown(!isDropdown)}
          >
            Clothes
            <svg
              width="36"
              height="36"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              className={`${
                isDropdown && "arrow-animation"
              } inline-block fill-amber-50 animation hover:fill-amber-900`}
            >
              <path d="M11.8079 14.7695L8.09346 10.3121C7.65924 9.79109 8.02976 9 8.70803 9L15.292 9C15.9702 9 16.3408 9.79108 15.9065 10.3121L12.1921 14.7695C12.0921 14.8895 11.9079 14.8895 11.8079 14.7695Z" />
            </svg>
            <ul
              className={`${
                isDropdown && "active-mobile-dropdown"
              } absolute mt-2 pl-2 space-y-3 opacity-0 pointer-events-none animation border-t-[1px]`}
            >
              <li className="dropdown-item">
                <Link to="">Man</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Woman</Link>
              </li>
              <li className="dropdown-item">
                <Link to="">Kids</Link>
              </li>
            </ul>
          </li>
          <li
            className={`mobile-list-item ${
              location === "/about" ? "active-mobile-list-item" : ""
            }`}
          >
            <Link to="/about">About</Link>
          </li>
          <li
            className={`mobile-list-item ${
              location === "/contact" ? "active-mobile-list-item" : ""
            }`}
          >
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
