import React from "react";
import { Link } from "react-router-dom";
import FinanceBro from "../Images/Revenue-bro.svg";

const Home = () => {
  return (
    <div className="bg-white h-screen flex lg:flex-row md:flex-col justify-center items-center">
      <div>
        <h1 className="whitespace-nowrap lg:text-6xl md:text-7xl sm:text-5xl text-3xl font-black mb-4 ">
          FinanceMeister
        </h1>
        <p>A website to help track one's transactions (expenses and income).</p>
        <p className="mb-8">
          {" "}
          Provides some useful analysis based on the transactions.
        </p>
        <Link
          className="text-black font-bold py-2 px-4 bg-sky-300 rounded-full text-md hover:bg-blue-400 transition duration-300 ease-in-out items-center"
          to="/register"
        >
          Sign Up!{" "}
        </Link>
      </div>
      <img
        src={FinanceBro}
        alt="Landing Page"
        className="w-1/2 lg:w-auto lg:h-3/4 ml-3"
      />
    </div>
  );
};

export default Home;
