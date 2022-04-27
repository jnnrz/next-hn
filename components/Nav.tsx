import React from "react";
import Link from "next/link";

const Nav = () => {
  return (
    <div>
      <nav className="flex p-3 bg-blue-800">
        <div className="container flex flex-wrap items-center justify-between mx-auto">
          <div className="flex items-center flex-shrink-0 mr-10 text-white">
            <Link href="/">
              <a href="">
                <span className="text-xl font-semibold tracking-tight text-teal-300">
                  <span className="text-white">Next</span>HN
                </span>
              </a>
            </Link>
          </div>
          <div className="block lg:hidden">
            <button
              id="nav-toggle"
              className="flex items-center px-3 py-2 border border-gray-500 rounded text-black-900 hover:text-black hover:border-black"
            >
              <svg
                className="w-3 h-3 fill-current"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
            </button>
          </div>
          <div
            className="flex-grow hidden w-full text-white lg:flex lg:items-center lg:w-auto"
            id="nav-content"
          >
            <div className="lg:flex-grow">
              <a
                href="#responsive-header"
                className="navbar-link lg:inline-block lg:mt-0"
              >
                news
              </a>
              <a
                href="#responsive-header"
                className="navbar-link lg:inline-block lg:mt-0"
              >
                newest
              </a>
              <a
                href="#responsive-header"
                className="navbar-link lg:inline-block lg:mt-0"
              >
                ask
              </a>
              <a
                href="#responsive-header"
                className="navbar-link lg:inline-block lg:mt-0"
              >
                show
              </a>
              <a
                href="#responsive-header"
                className="navbar-link lg:inline-block lg:mt-0"
              >
                jobs
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Nav;
