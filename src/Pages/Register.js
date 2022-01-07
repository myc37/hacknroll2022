import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../Contexts/AuthContext";
import "./Register.css";

const Register = () => {
  const emailRef = useRef();
  const passwordRef = useRef();
  const confirmRef = useRef();
  const [loading, setLoading] = useState(false);
  const { register } = useAuth();
  const nav = useNavigate();

  async function handleSubmit(e) {
    e.preventDefault();

    if (passwordRef.current.value !== confirmRef.current.value) return;

    try {
      setLoading(true);
      await register(emailRef.current.value, passwordRef.current.value);
      nav("/login");
    } catch (error) {
      console.log("error");
    }
    setLoading(false);
  }

  return (
    <>
      <div className="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
        <form className="flex-col" onSubmit={handleSubmit}>
          <h2 className="text-lg font-bold mb-4 text-blue-700">Registration</h2>
          <label className="font-semibold" htmlFor="email">
            Email address
          </label>
          <input
            type="email"
            placeholder="Email address"
            name="email"
            className="py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={emailRef}
          />
          <label className="font-semibold" htmlFor="email">
            Password
          </label>
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={passwordRef}
          />
          <label className="font-semibold" htmlFor="confirm">
            Confirm Password
          </label>
          <input
            type="password"
            placeholder="Confirm Password"
            name="confirm"
            className="py-0.5 display: block mb-4 border-solid border-2 placeholder-gray-500 text-gray-900 rounded-lg focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
            ref={confirmRef}
          />
          <input
            className="bg-blue-500 rounded-md px-4 py-2 text-sm text-white hover:cursor-pointer"
            type="submit"
            value="Submit"
            disabled={loading}
          />
        </form>
      </div>
    </>
  );
};

export default Register;
