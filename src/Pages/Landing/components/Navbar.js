import React from "react";
import { Link } from "react-router-dom";

const Navbar = ({ toggle }) => {
  return (
    <nav
      className="flex justify-between items-center h-16 bg-white text-black relative shadow-sm"
      role="navigation"
    >
      <Link to="/" className="pl-8">
        FinanceMeister
      </Link>
      <div className="pr-8">
        <Link className="p-4" to="/">
          Home
        </Link>
        {/* <Link className="p-4" to="/menu">
          Menu
        </Link>
        <Link className="p-4" to="/about">
          About
        </Link> */}
        <Link
          className="bg-red-500 rounded-md px-4 py-2 text-sm text-white hover:cursor-pointer"
          to="/login"
        >
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
