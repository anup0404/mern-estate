import React from "react";
import { FaSearch } from "react-icons/fa";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-slate-200 shadow-md">
      <nav className="flex justify-between max-w-6xl mx-auto items-center p-3">
        <NavLink to="/">
          {" "}
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Anup</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </NavLink>
        <form className="flex items-center bg-slate-100 p-3 rounded-lg">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64"
          />
          <FaSearch className="text-slate-700" />
        </form>

        <ul className="flex gap-4 font-bold">
          <li className="hidden sm:inline text-slate-700">
            {" "}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-slate-700"
              }
            >
              HOME
            </NavLink>
          </li>
          <li className="hidden sm:inline text-slate-700">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-slate-700"
              }
            >
              ABOUT
            </NavLink>
          </li>
          <li className="text-slate-700">
            <NavLink
              to="/sign-in"
              className={({ isActive }) =>
                isActive ? "text-green-700" : "text-slate-700"
              }
            >
              SIGN IN{" "}
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
