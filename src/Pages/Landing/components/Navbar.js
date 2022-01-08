import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../Contexts/AuthContext";

const Navbar = () => {
  const { currentUser, logout } = useAuth();
  const nav = useNavigate();

  async function handleLogout() {
    try {
      await logout();
      nav("/login");
    } catch {
      console.log("Error");
    }
  }

  function isLoggedIn() {
    if (currentUser != null) {
      return (
        <>
          <Link className="p-4 hover:bg-secondary rounded-full" to="/">
            <svg
              className="w-6 h-6 display: inline mr-2 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"
              />
            </svg>
            Dashboard
          </Link>
          <Link className="p-4 hover:bg-secondary rounded-full" to="/history">
            {/* <svg
              className="w-6 h-6 display: inline mr-2 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg> */}
            <svg
              className="w-6 h-6 display: inline mr-2 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
              />
            </svg>
            History
          </Link>
          <Link className="p-4 hover:bg-secondary rounded-full" to="/goals">
            <svg
              className="w-6 h-6 display: inline mr-2 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M13 10V3L4 14h7v7l9-11h-7z"
              />
            </svg>
            Goals
          </Link>
          <Link className="p-4 hover:bg-secondary rounded-full" to="/news">
            <svg
              className="w-6 h-6 display: inline mr-2 mb-1"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z"
              />
            </svg>
            News
          </Link>
          <button
            className="ml-5 bg-slate-100 rounded-md px-4 py-2 text-sm text-black font-semibold hover:cursor-pointer hover:bg-slate-300 font-semi"
            onClick={handleLogout}
          >
            Logout
          </button>
        </>
      );
    } else if (currentUser == null) {
      return (
        <>
          {/* <Link className="p-4 hover:bg-secondary rounded-full" to="/">
            Home
          </Link> */}
          <Link
            className="bg-slate-100 rounded-md px-4 py-2 text-sm text-black hover:cursor-pointer hover:bg-slate-300 font-semibold"
            to="/login"
          >
            Login
          </Link>
        </>
      );
    }
  }

  return (
    <nav
      className="flex justify-between items-center h-16 bg-tertiary text-white relative shadow-sm"
      role="navigation"
    >
      <Link to="/" className="pl-8 font-bold text-xl">
        <svg
          className="w-6 h-6 display: inline mr-2 mb-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        FinanceMeister
      </Link>

      <div className="mr-7">{isLoggedIn()}</div>
    </nav>
  );
};

export default Navbar;
